import { CartContextProvider } from "./cartContext";
import { UserContextProvider } from "./userContext";

export const AppContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <UserContextProvider>
            <CartContextProvider>
                {children}
            </CartContextProvider>
        </UserContextProvider>
    );
};