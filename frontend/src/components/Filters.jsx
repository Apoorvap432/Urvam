import React, { useState, useEffect } from "react";
import { debounce } from "../utils/debounce";

const Filters = ({ onFilter }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState(false);

  // debounce search to avoid too many API calls
  useEffect(() => {
    const handler = debounce(() => {
      onFilter({ search, category, inStock });
    }, 400);
    handler();
    return () => handler.cancel && handler.cancel();
  }, [search, category, inStock]);

  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center">
      <input
        type="text"
        placeholder="Search plants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 border rounded-md"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-3 py-2 border rounded-md"
      >
        <option value="">All Categories</option>
        <option value="Indoor">Indoor</option>
        <option value="Outdoor">Outdoor</option>
        <option value="Succulent">Succulent</option>
        <option value="Flowering">Flowering</option>
        <option value="Herbs">Herbs</option>
      </select>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
        />
        In Stock only
      </label>
    </div>
  );
};

export default Filters;
