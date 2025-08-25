import React, { useState } from "react";
import { addPlant } from "../api/plants";
import Toast from "../components/Toast";

const Admin = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    categories: "",
    inStock: true,
    imageUrl: "",
  });
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPlant({
        ...form,
        price: parseFloat(form.price),
        categories: form.categories.split(",").map((c) => c.trim()),
      });
      setToast({ message: "Plant added successfully!", type: "success" });
      setForm({ name: "", price: "", categories: "", inStock: true, imageUrl: "" });
    } catch (err) {
      setToast({ message: "Failed to add plant", type: "error" });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin - Add Plant</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Plant name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Categories (comma separated)"
          value={form.categories}
          onChange={(e) => setForm({ ...form, categories: e.target.value })}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          className="w-full border px-3 py-2 rounded-md"
          required
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.inStock}
            onChange={(e) => setForm({ ...form, inStock: e.target.checked })}
          />
          In Stock
        </label>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add Plant
        </button>
      </form>
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </div>
  );
};

export default Admin;
