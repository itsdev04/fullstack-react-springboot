import React from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

const sortList = [
  "Popularity",
  "Price: Low to High",
  "Price: High to Low",
  "Newest Arrivals",
];
export default function ProductListings({ products }) {
  let searchInput = "";
  function handleSearchChange(input) {
    searchInput = input;
    // Handle search input change
    console.log("Search input changed:", searchInput);
  }

  return (
    <div className="max-w-[1152px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="Search for products..."
          value={searchInput}
          handleSearch={(input) => handleSearchChange}
        />
        <Dropdown
          label="Sort by"
          options={sortList.map((option) => ({
            value: option.toLowerCase().replace(/ /g, "-"),
            label: option,
          }))}
          selectedValue="name"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="text-center font-primary font-bold text-lg text-primary">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
