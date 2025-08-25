const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/plants";

export const fetchPlants = async (query = {}) => {
  try {
    const params = new URLSearchParams(query).toString();
    const res = await fetch(`${API_URL}?${params}`);
    if (!res.ok) throw new Error("Failed to fetch plants");
    const data = await res.json();
    return data.items || [];   // ✅ only return array
  } catch (err) {
    console.error("fetchPlants error:", err);
    return [];
  }
};


export const addPlant = async (plant) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plant),
    });
    if (!res.ok) throw new Error("Failed to add plant");
    return await res.json();
  } catch (err) {
    console.error("addPlant error:", err);
    throw err;
  }
};
