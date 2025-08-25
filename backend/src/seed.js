// backend/src/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import {Plant} from "./models/plant.js";

dotenv.config();

const plants = [
  { name: "Money Plant", price: 299, categories: ["Indoor","Air Purifying","Home Decor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1684978494723-5bd3ab17b9a1?auto=format&fit=crop&w=400&q=80" },
  { name: "Snake Plant", price: 349, categories: ["Indoor","Air Purifying"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1514539079130-25950c84ed4d?auto=format&fit=crop&w=400&q=80" },
  { name: "Aloe Vera", price: 199, categories: ["Indoor","Succulent","Medicinal"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1524594152150-0bb2d7f9d8b5?auto=format&fit=crop&w=400&q=80" },
  { name: "Peace Lily", price: 399, categories: ["Indoor","Flowering","Air Purifying"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1556912194-9e1db26d1aa9?auto=format&fit=crop&w=400&q=80" },
  { name: "Areca Palm", price: 599, categories: ["Indoor","Outdoor","Air Purifying"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1462326839037-db485478c28f?auto=format&fit=crop&w=400&q=80" },
  { name: "Spider Plant", price: 249, categories: ["Indoor","Air Purifying"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1584471081508-76e1e1b366d7?auto=format&fit=crop&w=400&q=80" },
  { name: "Jade Plant", price: 299, categories: ["Succulent","Indoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1585494945905-d35fcd49bb1e?auto=format&fit=crop&w=400&q=80" },
  { name: "Rubber Plant", price: 499, categories: ["Indoor","Air Purifying"], inStock: false, imageUrl: "https://images.unsplash.com/photo-1571636533857-1fd6a22c5a6e?auto=format&fit=crop&w=400&q=80" },
  { name: "Boston Fern", price: 349, categories: ["Indoor","Air Purifying","Hanging"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1581018405946-d7ec8ce635fd?auto=format&fit=crop&w=400&q=80" },
  { name: "Ficus Bonsai", price: 999, categories: ["Indoor","Bonsai","Decor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1519362287305-bfed19e8a10b?auto=format&fit=crop&w=400&q=80" },
  { name: "Tulsi Plant", price: 199, categories: ["Medicinal","Indoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1553492356-6f1f88bd9850?auto=format&fit=crop&w=400&q=80" },
  { name: "Cactus Mix", price: 349, categories: ["Succulent","Indoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1518843016377-48fdb63d9f3f?auto=format&fit=crop&w=400&q=80" },
  { name: "Hibiscus", price: 249, categories: ["Outdoor","Flowering"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1577218014534-0abeb72ec394?auto=format&fit=crop&w=400&q=80" },
  { name: "Bougainvillea", price: 299, categories: ["Outdoor","Flowering","Decor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1550686041-0815f8dfe40b?auto=format&fit=crop&w=400&q=80" },
  { name: "Pothos Golden", price: 259, categories: ["Indoor","Air Purifying","Hanging"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1565635960425-e27b44a26cbc?auto=format&fit=crop&w=400&q=80" },
  { name: "ZZ Plant", price: 799, categories: ["Indoor","Low Maintenance"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1563291408-e195bd5d1f5e?auto=format&fit=crop&w=400&q=80" },
  { name: "Christmas Cactus", price: 399, categories: ["Succulent","Flowering"], inStock: false, imageUrl: "https://images.unsplash.com/photo-1589987605537-569a74f4f740?auto=format&fit=crop&w=400&q=80" },
  { name: "Syngonium", price: 249, categories: ["Indoor","Air Purifying"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1602227410890-a906d0ce6c50?auto=format&fit=crop&w=400&q=80" },
  { name: "Croton", price: 299, categories: ["Indoor","Outdoor","Decor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1574918610083-82a7479ebf0e?auto=format&fit=crop&w=400&q=80" },
  { name: "Lucky Bamboo", price: 349, categories: ["Indoor","Feng Shui","Water Plant"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1551218625-cf205a7e277d?auto=format&fit=crop&w=400&q=80" },
  { name: "Orchid", price: 699, categories: ["Indoor","Flowering","Decor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1582938017230-8fb325ca2fef?auto=format&fit=crop&w=400&q=80" },
  { name: "Anthurium", price: 549, categories: ["Indoor","Flowering"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1576760736103-d587f668ffff?auto=format&fit=crop&w=400&q=80" },
  { name: "Neem Plant", price: 299, categories: ["Medicinal","Outdoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1543952590-9be7de26884f?auto=format&fit=crop&w=400&q=80" },
  { name: "Lavender", price: 399, categories: ["Outdoor","Flowering","Aromatic"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=400&q=80" },
  { name: "Rose Plant", price: 349, categories: ["Outdoor","Flowering"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80" },
  { name: "Marigold", price: 149, categories: ["Outdoor","Flowering"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1597191518347-413b6558ac70?auto=format&fit=crop&w=400&q=80" },
  { name: "Gerbera Daisy", price: 249, categories: ["Indoor","Flowering"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1557111839-4f7e813561f5?auto=format&fit=crop&w=400&q=80" },
  { name: "Kalanchoe", price: 299, categories: ["Succulent","Flowering"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1600849873062-0af4ee0d2194?auto=format&fit=crop&w=400&q=80" },
  { name: "Chrysanthemum", price: 249, categories: ["Outdoor","Flowering"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1559556736-02ca88dfbe20?auto=format&fit=crop&w=400&q=80" },
  { name: "Gardenia", price: 499, categories: ["Indoor","Flowering","Aromatic"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1476598188603-ce2d4aefd40d?auto=format&fit=crop&w=400&q=80" },
  { name: "Mint", price: 149, categories: ["Medicinal","Herb"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1572458986778-46a7d6c8b819?auto=format&fit=crop&w=400&q=80" },
  { name: "Basil", price: 199, categories: ["Medicinal","Herb","Indoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1600238984431-2dd19b30d4ae?auto=format&fit=crop&w=400&q=80" },
  { name: "Parsley", price: 249, categories: ["Herb","Indoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1607290817806-36cbb6635968?auto=format&fit=crop&w=400&q=80" },
  { name: "Rosemary", price: 299, categories: ["Herb","Medicinal","Aromatic"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1584982892714-f4884243b82c?auto=format&fit=crop&w=400&q=80" },
  { name: "Thyme", price: 199, categories: ["Herb","Indoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1600238333484-d218cbbd96fc?auto=format&fit=crop&w=400&q=80" },
  { name: "Oregano", price: 249, categories: ["Herb","Indoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1598004178730-fda41dbb0b53?auto=format&fit=crop&w=400&q=80" },
  { name: "Bay Leaf Plant", price: 349, categories: ["Medicinal","Herb","Outdoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1582835316172-cc41aa9ef22b?auto=format&fit=crop&w=400&q=80" },
  { name: "Curry Leaf Plant", price: 299, categories: ["Medicinal","Herb"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1619349504005-27c2eaf6e271?auto=format&fit=crop&w=400&q=80" },
  { name: "Papaya Plant", price: 399, categories: ["Fruit","Outdoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1621540238862-4af0638e7e02?auto=format&fit=crop&w=400&q=80" },
  { name: "Banana Plant", price: 499, categories: ["Fruit","Outdoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1571896350478-0e2bfe707a6a?auto=format&fit=crop&w=400&q=80" },
  { name: "Guava Plant", price: 349, categories: ["Fruit","Outdoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80" },
  { name: "Mango Plant", price: 799, categories: ["Fruit","Outdoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1602600469537-3fc556f22f48?auto=format&fit=crop&w=400&q=80" },
  { name: "Apple Plant", price: 899, categories: ["Fruit","Outdoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1585536741409-869041bc04a6?auto=format&fit=crop&w=400&q=80" },
  { name: "Pomegranate Plant", price: 699, categories: ["Fruit","Outdoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1601001124666-5d48e035a14f?auto=format&fit=crop&w=400&q=80" },
  { name: "Lemon Plant", price: 249, categories: ["Fruit","Outdoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1592297904644-bc7ddcf01db9?auto=format&fit=crop&w=400&q=80" },
  { name: "Orange Plant", price: 349, categories: ["Fruit","Outdoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1583248860395-372b6085ef1b?auto=format&fit=crop&w=400&q=80" },
  { name: "Grapes Vine", price: 599, categories: ["Fruit","Outdoor","Climbing"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1528821154947-a6071c2420d7?auto=format&fit=crop&w=400&q=80" },
  { name: "Strawberry Plant", price: 399, categories: ["Fruit","Outdoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1582454305573-9281e600b00f?auto=format&fit=crop&w=400&q=80" },
  { name: "Blueberry Plant", price: 899, categories: ["Fruit","Outdoor"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1592923381530-a4a956b6eeae?auto=format&fit=crop&w=400&q=80" },
  { name: "Pineapple Plant", price: 999, categories: ["Fruit","Outdoor","Tropical"], inStock: true, imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" }
];

export default plants;

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
