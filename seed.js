require("dotenv").config();
require("./config/database");

const Item = require("./models/item");

(async function () {
  await Item.deleteMany({});
  const items = await Item.create([
    { itemName: "T-Shirt", description: "A Bright Green Shirt", price: 15.95 },
    { itemName: "Jeans", description: "Blue Jeans", price: 35.95 },
    {
      itemName: "Baseball Cap",
      description: "A black baseball cap",
      price: 25.95,
    },
    { itemName: "Socks", description: "Red long socks", price: 9.95 },
  ]);

  console.log(items);

  process.exit();
})();
