import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

export default function Home() {
  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8 dark:bg-darkbg">
      <PageHeading title="Explore Eazy Stickers!">
        <h1 className="text-md font-primary font-extrabold text-center text-primary mt-4 py-2 dark:text-lighter">
          Add a touch of creativity to your space with our wide range of fun and
          unique stickers. Perfect for any occasion!
        </h1>
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}