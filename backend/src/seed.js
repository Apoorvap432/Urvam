// backend/src/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Plant from "./models/plant.model.js";

dotenv.config();

const plants = [
  {
    name: "Money Plant",
    price: 299,
    categories: ["Indoor", "Air Purifying", "Home Decor"],
    available: true,
  },
  {
    name: "Snake Plant",
    price: 349,
    categories: ["Indoor", "Air Purifying"],
    available: true,
  },
  {
    name: "Aloe Vera",
    price: 199,
    categories: ["Indoor", "Succulent", "Medicinal"],
    available: true,
  },
  {
    name: "Peace Lily",
    price: 399,
    categories: ["Indoor", "Flowering", "Air Purifying"],
    available: true,
  },
  {
    name: "Areca Palm",
    price: 599,
    categories: ["Indoor", "Outdoor", "Air Purifying"],
    available: true,
  },
  {
    name: "Spider Plant",
    price: 249,
    categories: ["Indoor", "Air Purifying"],
    available: true,
  },
  {
    name: "Jade Plant",
    price: 299,
    categories: ["Succulent", "Indoor"],
    available: true,
  },
  {
    name: "Rubber Plant",
    price: 499,
    categories: ["Indoor", "Air Purifying"],
    available: false,
  },
  {
    name: "Boston Fern",
    price: 349,
    categories: ["Indoor", "Air Purifying", "Hanging"],
    available: true,
  },
  {
    name: "Ficus Bonsai",
    price: 999,
    categories: ["Indoor", "Bonsai", "Decor"],
    available: true,
  },
  // 👇 duplicate similar pattern to make ~50 items
  {
    name: "Tulsi Plant",
    price: 199,
    categories: ["Medicinal", "Indoor"],
    available: true,
  },
  {
    name: "Cactus Mix",
    price: 349,
    categories: ["Succulent", "Indoor"],
    available: true,
  },
  {
    name: "Hibiscus",
    price: 249,
    categories: ["Outdoor", "Flowering"],
    available: true,
  },
  {
    name: "Bougainvillea",
    price: 299,
    categories: ["Outdoor", "Flowering", "Decor"],
    available: true,
  },
  {
    name: "Pothos Golden",
    price: 259,
    categories: ["Indoor", "Air Purifying", "Hanging"],
    available: true,
  },
  {
    name: "ZZ Plant",
    price: 799,
    categories: ["Indoor", "Low Maintenance"],
    available: true,
  },
  {
    name: "Christmas Cactus",
    price: 399,
    categories: ["Succulent", "Flowering"],
    available: false,
  },
  {
    name: "Syngonium",
    price: 249,
    categories: ["Indoor", "Air Purifying"],
    available: true,
  },
  {
    name: "Croton",
    price: 299,
    categories: ["Indoor", "Outdoor", "Decor"],
    available: true,
  },
  {
    name: "Lucky Bamboo",
    price: 349,
    categories: ["Indoor", "Feng Shui", "Water Plant"],
    available: true,
  },
  // ➕ keep adding until 50 entries
];

const seedPlants = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Plant.deleteMany();
    console.log("🌱 Old plants removed");

    await Plant.insertMany(plants);
    console.log("✅ New plants seeded");

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error seeding plants:", error);
    process.exit(1);
  }
};

seedPlants();
