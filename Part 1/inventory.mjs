// Part 1: Named Exports and Imports: Named Exports and Imports: Create an inventory management system for an online store, practicing the use of named exports and imports.

// Implement inventory.mjs, exporting named functions: addItem that adds an item by name to the inventory array, removeItem that removes an item by name from the inventory array, listItems that logs all item names currently in the inventory.

//Implement storeManager.mjs that imports the functions from inventory.mjs to demonstrate adding a few items, removing an item, and then listing the remaining items in the inventory.

const inventory = [];

export function addItem(item) {
     if (inventory.indexOf(item) !== -1) {
          throw new Error("Item is already being tracked in the inventory");
     } else {
          inventory.push(item);
     }
}

export function removeItem(item) {
     const itemIdx = inventory.indexOf(item);
     if (itemIdx !== -1) {
          inventory.splice(itemIdx, 1);
     } else {
          throw new Error("No item to delete");
     }
}

export function listItems() {
     for (let i = 0; i < inventory.length; i++) {
          console.log(i + 1, inventory[i]);
     }
}

//_________________________________________________________________________________________________________________________________________________________________________________________
