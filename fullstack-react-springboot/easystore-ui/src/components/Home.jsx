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
      <div className="d-grid gap-2 col-6 mx-auto">
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <div className="alert alert-secondary" role="alert">
          A simple secondary alert—check it out!
        </div>
        <div className="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
        <div className="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
        <div className="alert alert-warning" role="alert">
          A simple warning alert—check it out!
        </div>
        <div className="alert alert-info" role="alert">
          A simple info alert—check it out!
        </div>
        <div className="alert alert-light" role="alert">
          A simple light alert—check it out!
        </div>
        <div
          className="alert alert-dark alert-dismissible fade show"
          role="alert"
        >
          A simple dark alert—check it out!
          <strong>Warning!!</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
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
