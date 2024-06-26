import { URLs, endpoints } from "@/constants/apis";
import { getCookie } from "@/lib/helpers";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class HTTPService {
  private static instance: HTTPService | null = null;
  private baseURL!: string;
  private refreshToken!: string;
  private accessToken!: string;
  private axiosInstance!: AxiosInstance;
  private defaultHeaders!: { [key: string]: string | null };

  protected constructor(baseURL?: string) {
    if (
      HTTPService.instance &&
      HTTPService.instance.getBaseURL() === (baseURL ?? URLs.BASE_URL)
    ) {
      return HTTPService.instance;
    }

    this.baseURL = baseURL ?? URLs.BASE_URL;
    // console.log(this.baseURL)

    this.defaultHeaders = {
      "Content-Type": "application/json",
      // Authorization: token ? token : null,
    };
    this.axiosInstance = axios.create({
      baseURL,
      headers: this.defaultHeaders ? this.defaultHeaders : {},
    });
    this.setupInterceptors();
    HTTPService.instance = this;
  }

  public static getInstance(baseURL?: string): HTTPService {
    if (
      !HTTPService.instance ||
      HTTPService.instance.getBaseURL() !== (baseURL ?? URLs.BASE_URL)
    ) {
      HTTPService.instance = new HTTPService(baseURL);
    }
    return HTTPService.instance;
  }

  public getBaseURL(): string {
    return this.baseURL;
  }

  private setupInterceptors(): void {
    // this.axiosInstance.interceptors.request.use(
    //   async (config: AxiosRequestConfig) => {
    //     const accessToken: string | null = 'accessToken'
    //     if (accessToken) {
    //       config.headers['Authorization'] = `Bearer ${accessToken}`
    //     }
    //     return config
    //   },
    //   (error) => Promise.reject(error)
    // )

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: any) => {
        if (error.response && error.response.status === 401) {
          console.log("unauthed");
          if (document) {
            const token = getCookie("accessToken");
            console.log(token);
          }
          //   if (this.refreshToken) {
          //     try {
          //       const refreshedToken: string = await this.refreshAccessToken();
          //       // console.log("here", refreshedToken)
          //       error.config.headers[
          //         "Authorization"
          //       ] = `Bearer ${refreshedToken}`;
          //       return axios(error.config);
          //     } catch (refreshError) {
          //       console.info(
          //         "Error refreshing access token:",
          //         (refreshError as Error).message
          //       );
          //       throw refreshError;
          //     }
          //   }
        }
        // console.info('Global response interceptor error:', (error as Error).message)
        return Promise.reject(error);
      }
    );
  }

  private mergeConfig(
    defaultConfig: AxiosRequestConfig,
    customConfig: AxiosRequestConfig
  ): AxiosRequestConfig {
    return {
      ...defaultConfig,
      ...customConfig,
      headers: {
        ...defaultConfig.headers,
        ...customConfig.headers,
      },
    };
  }

  private async request<T = any>(
    method: string,
    endpoint: string,
    data: any = {},
    customConfig: AxiosRequestConfig = {},
    params: any = {}
  ): Promise<T> {
    const url = this.baseURL + endpoint;
    const config = this.mergeConfig(
      {
        headers: this.defaultHeaders,
      },
      customConfig
    );

    try {
      const response = await this.axiosInstance.request({
        method,
        url,
        data,
        params,
        ...config,
      });
      return response.data;
    } catch (error) {
      console.info(
        `Error in ${method.toUpperCase()} request to ${url}:`,
        (error as Error).message
      );
      throw error;
    }
  }

  public get<T = any>(
    endpoint: string,
    params: any = {},
    customHeaders: AxiosRequestConfig["headers"] = {}
  ): Promise<any> {
    return this.request<T>(
      "get",
      endpoint,
      undefined,
      { headers: customHeaders },
      params
    );
  }

  public post<T = any>(
    endpoint: string,
    data: any = {},
    customConfig: AxiosRequestConfig = {}
  ): Promise<any> {
    return this.request<T>("post", endpoint, data, customConfig);
  }
  public patch<T = any>(
    endpoint: string,
    data: any = {},
    customConfig: AxiosRequestConfig = {}
  ): Promise<any> {
    return this.request<T>("patch", endpoint, data, customConfig);
  }

  public put<T = any>(
    endpoint: string,
    data: any = {},
    customConfig: AxiosRequestConfig = {}
  ): Promise<any> {
    return this.request<T>("put", endpoint, data, customConfig);
  }

  public delete<T = any>(
    endpoint: string,
    customConfig: AxiosRequestConfig = {}
  ): Promise<any> {
    return this.request<T>("delete", endpoint, undefined, customConfig);
  }
  //   private async refreshAccessToken(): Promise<string> {
  //     try {
  //       const tokem = await this.get(
  //         `${endpoints.REFRESH_TOKEN}/${this.refreshToken}`
  //       );
  //       // console.log(tokem)
  //       if (document) {
  //         document.cookie = `accessToken=${tokem.accessToken};path=/`;
  //       }
  //       this.setAccessToken(tokem.accessToken);
  //       return tokem.accessToken;
  //     } catch (error) {
  //       throw error;
  //     }
  //   }
  public setBaseUrl(newUrl: string): void {
    this.baseURL = newUrl;
    this.axiosInstance.defaults.baseURL = newUrl;
  }

  public getAccessToken() {
    return this.axiosInstance.defaults.headers.common.authorization;
  }

  public setAccessToken(token: string) {
    this.axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
    this.accessToken = token;
  }
  public setRefresToken(token: string) {
    this.refreshToken = token;
  }

  public setHeaderIpAddress(ipAddress: string) {
    this.axiosInstance.defaults.headers.common.requestIp = ipAddress;
  }

  public login<T = any>(payload: object): Promise<T> {
    return this.post<T>(endpoints.SIGN_IN, payload);
  }

  public register<T = any>(payload: object): Promise<T> {
    return this.post<T>(endpoints.SIGN_UP, payload);
  }
  public getProducts<T = any>(): Promise<T> {
    return this.get<T>(endpoints.PRODUCTS);
  }
  public editCartItem<T = any>(
    id: number,
    payload: object,
    token: string
  ): Promise<T> {
    return this.put<T>(`${endpoints.CART}update/${id}?token=${token}`, payload);
  }
  public addCartItem<T = any>(payload: object, token: string): Promise<T> {
    return this.post<T>(`${endpoints.CART}add?token=${token}`, payload);
  }
  public deleteCartItem<T = any>(id: number, token: string): Promise<T> {
    return this.delete<T>(`${endpoints.CART}delete/${id}?token=${token}`);
  }
  public getCart<T = any>(token: string): Promise<T> {
    return this.get<T>(`${endpoints.CART}?token=${token}`);
  }
}

export default HTTPService;
