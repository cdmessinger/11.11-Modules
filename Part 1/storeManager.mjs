import { addItem, removeItem, listItems } from "./inventory.mjs";

addItem("cheese");
addItem("bread");
addItem("coffee");
addItem("milk");
addItem("pasta");

listItems();

removeItem("milk");
listItems();
