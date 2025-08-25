import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import PlantCard from "../components/PlantCard";
import SkeletonCard from "../components/SkeletonCard";
import { fetchPlants } from "../api/plants";

const Catalog = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});

useEffect(() => {
  setLoading(true);
  fetchPlants(filters)
    .then((data) => setPlants(data))   // ✅ data is already an array
    .finally(() => setLoading(false));
}, [filters]);



  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Plant Catalog</h1>
      <Filters onFilter={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : plants.map((plants) => <PlantCard key={plants._id} plants={plants} />)}
      </div>
    </div>
  );
};

export default Catalog;
