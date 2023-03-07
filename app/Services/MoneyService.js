import { appState } from "../AppState.js"


class MoneyService {
  constructor() {

  }
  add() {
    appState.money += .25
  }
}


export const moneyService = new MoneyService()