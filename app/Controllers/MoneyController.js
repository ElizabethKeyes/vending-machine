import { appState } from "../AppState.js";
import { setText } from "../Utils/Writer.js";
import { moneyService } from "../Services/MoneyService.js";

function _drawMoney() {
  setText('deposited-money', (appState.money).toFixed(2))
}

export class MoneyController {
  constructor() {
    _drawMoney()
    appState.on('money', _drawMoney)
  }

  add() {
    moneyService.add()
  }

}