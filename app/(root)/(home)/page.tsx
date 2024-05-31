import LoadMore from "@/components/LoadMore";
import ProductCard from "@/components/ProductCard";
import ProductSearch from "@/components/ProductSearch";
import ProductSelect from "@/components/ProductSelect";
import Slider from "@/components/Slider";
import HTTPService from "@/services/api";

export default async function Home({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { search, range } = searchParams

  const data: Product[] = await HTTPService.getInstance().getProducts()
  return (
    <main className="w-full main flex-auto flex justify-center">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          <Slider />
          <div className="flex items-center justify-between gap-4 mb-4">
            <ProductSearch />
            <ProductSelect />
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4">
            {!search && !range && data.slice(0, 8).map((product, index) => (
              <ProductCard key={product.id} index={index} {...product} />
            ))}

          </div>
          <LoadMore products={data} />
        </div>
      </div>
    </main>
  );
}
