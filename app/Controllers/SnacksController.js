import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawSnacks() {
  let template = ``
  let snacks = appState.snacks
  snacks.forEach(s => template += s.ListTemplate)
  setHTML('shelf', template)
}



export class SnacksController {
  constructor() {
    _drawSnacks()
    appState.on('snacks', _drawSnacks)
  }

  buy(name) {
    snacksService.buy(name)
  }

}