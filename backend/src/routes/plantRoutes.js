import express from "express";
import { Plant } from "../models/Plant.js";

const router = express.Router();

// GET /api/plants?search=&category=&inStock=&page=&limit=
router.get("/", async (req, res) => {
  try {
    const {
      search = "",
      category = "",
      inStock = "", // "true" | "false" | ''
      page = 1,
      limit = 20,
    } = req.query;

    const filters = {};

    if (search) {
      const regex = new RegExp(search, "i");
      // match name OR categories keyword
      filters.$or = [{ name: regex }, { categories: regex }];
    }

    if (category) {
      filters.categories = { $in: [new RegExp(`^${category}$`, "i")] };
    }

    if (inStock === "true" || inStock === "false") {
      filters.inStock = inStock === "true";
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [items, total] = await Promise.all([
      Plant.find(filters)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
      Plant.countDocuments(filters),
    ]);

    res.json({ items, total, page: Number(page), limit: Number(limit) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/plants (admin add)
router.post("/", async (req, res) => {
  try {
    const { name, price, categories, inStock, imageUrl } = req.body;
    if (!name || !String(name).trim()) {
      return res.status(400).json({ message: "Name is required" });
    }
    const parsedPrice = Number(price);
    if (Number.isNaN(parsedPrice) || parsedPrice < 0) {
      return res
        .status(400)
        .json({ message: "Price must be a non-negative number" });
    }

    const cats = Array.isArray(categories)
      ? categories
      : String(categories || "")
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean);
    const plant = await Plant.create({
      name: String(name).trim(),
      price: parsedPrice,
      categories: cats,
      inStock: Boolean(inStock),
      imageUrl: imageUrl || "",
    });

    res.status(201).json(plant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
