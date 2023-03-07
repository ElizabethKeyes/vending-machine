import { appState } from "../AppState.js";


class SnacksService {
  buy(name) {
    console.log('buying', name);
    let purchasedItem = appState.snacks.find(s => s.name == name)
    if (appState.money >= purchasedItem.price) {
      appState.money -= purchasedItem.price
      if (purchasedItem.name == 'Mystery Item') {
        window.alert("Congratulations! You've won $3!")
        appState.money += 3
      }
      if (purchasedItem.name !== 'Mystery Item') {
        window.alert("Your item is being dispensed, thank you!")
      }
    } else {
      window.alert("Please insert more quarters!")
    }


  }
}

export const snacksService = new SnacksService()