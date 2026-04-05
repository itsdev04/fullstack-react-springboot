import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import products from "../data/products.js";
import EazyButton from "./EazyButton.js";
import BootstrapButton from "./BootstrapButton.jsx";

export default function Home() {
  return (
    <div className="home-container">
      <div className="container col-6">
        <BootstrapButton text="Bootstrap Button" type="primary" />

        <BootstrapButton text="Bootstrap Button" type="secondary" />

        <BootstrapButton text="Bootstrap Button" type="success" />

        <BootstrapButton text="Bootstrap Button" type="danger" />

        <BootstrapButton text="Bootstrap Button" type="primary" />
      </div>
      <PageHeading title="Explore Eazy Stickers!">
        <EazyButton $primary>Home</EazyButton>
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any occasion!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}
