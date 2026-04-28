import React, { useState } from "react";
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
  const [searchInput, setSearchInput] = useState("");
  function handleSearchChange(input) {
    console.log("Search input changed:", searchInput);
    setSearchInput(input);
  }

  let filteredAndSortedProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          product.description.toLowerCase().includes(searchInput.toLowerCase()),
      )
    : [];

  return (
    <div className="max-w-[1152px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="Search for products..."
          value={searchInput}
          handleSearch={(input) => handleSearchChange(input)}
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
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
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
