import { appState } from "../AppState.js";


export class SnacksController {
  constructor() {
    console.log('SnacksController accessed');
    console.log(appState.snacks);
  }
}