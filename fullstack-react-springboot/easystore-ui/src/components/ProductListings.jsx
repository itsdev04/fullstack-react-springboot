import React, { useState, useMemo } from "react";
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
  const [selectedSort, setSelectedSort] = useState("Popularity");

  const filteredAndSortedProducts = useMemo(() => {
    if (!Array.isArray(products)) {
      console.error(
        "Expected products to be an array, but received:",
        products,
      );
      return [];
    }

    let filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.description.toLowerCase().includes(searchInput.toLowerCase()),
    );

    return filteredProducts.slice().sort((a, b) => {
      switch (selectedSort) {
        case "price-low-to-high":
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case "price-high-to-low":
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case "newest-arrivals":
          filteredProducts.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          );
          break;
        default:
          // For "Popularity" or any other default sorting, you can implement your logic here
          break;
      }
    });
  }, [products, searchInput, selectedSort]);

  function handleSearchChange(input) {
    console.log("Search input changed:", searchInput);
    setSearchInput(input);
  }

  function handleSort(sortOption) {
    console.log("Selected sort option:", sortOption);
    setSelectedSort(sortOption);
  }

  return (
    <div className="max-w-[1152px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox className="dark:bg-darkbg dark:text-light"
          label="Search"
          placeholder="Search for products..."
          value={searchInput}
          handleSearch={(input) => handleSearchChange(input)}
        />
        <Dropdown className="dark:bg-darkbg dark:text-light"
          label="Sort by"
          options={sortList.map((option) => ({
            value: option.toLowerCase().replace(/ /g, "-"),
            label: option,
          }))}
          selectedValue={selectedSort}
          handleSort={handleSort}
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
