import { appState } from "../AppState.js";


class SnacksService {
  buy(name) {
    console.log('buying', name);
    let purchasedItem = appState.snacks.find(s => s.name == name)
    if (appState.money >= purchasedItem.price) {
      appState.money -= purchasedItem.price
      if (purchasedItem.name == 'Mystery Item') {
        window.alert("Congratulations! You've won $5!")
        appState.money += 5
        let remainingSnacks = appState.snacks.filter(s => s.name !== purchasedItem.name)
        appState.snacks.filter(s => s.name !== purchasedItem.name)
        appState.snacks = remainingSnacks
      }
      if (purchasedItem.name !== 'Mystery Item') {
        window.alert("Your item is being dispensed, thank you!")
        let remainingSnacks = appState.snacks.filter(s => s.name !== purchasedItem.name)
        appState.snacks = remainingSnacks
      }
    } else {
      window.alert("Please insert more quarters!")
    }


  }
}

export const snacksService = new SnacksService()