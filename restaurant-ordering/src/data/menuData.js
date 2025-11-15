// src/data/menuData.js
import risotto from "../assets/risotto.jpg";
import salmon from "../assets/salmon.jpg";
import filet from "../assets/filet-mignon.jpg";
import lobster from "../assets/lobster.jpg";
import caprese from "../assets/caprese.jpg";
import lavaCake from "../assets/lava-cake.jpg";

const menuData = [
  {
    id: 1,
    name: "Wild Mushroom Risotto",
    description: "Creamy risotto with wild mushrooms and truffle oil.",
    price: 28.99,
    image: risotto
  },
  {
    id: 2,
    name: "Seared Salmon with Lemon Butter",
    description: "Fresh salmon seared and served with lemon butter sauce.",
    price: 34.50,
    image: salmon
  },
  {
    id: 3,
    name: "Filet Mignon with Red Wine Sauce",
    description: "Tender filet mignon with a classic red wine reduction.",
    price: 42.00,
    image: filet
  },
  {
    id: 4,
    name: "Lobster Thermidor",
    description: "Succulent lobster baked with creamy wine-herb cheese crust.",
    price: 55.75,
    image: lobster
  },
  {
    id: 5,
    name: "Caprese Salad",
    description: "Heirloom tomatoes, burrata, basil, and aged balsamic.",
    price: 15.99,
    image: caprese
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Warm molten chocolate cake served with vanilla ice cream.",
    price: 12.50,
    image: lavaCake
  }
];

export default menuData;
