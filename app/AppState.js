import { Snack } from "./Models/Snack.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])

  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack({ name: 'KitKat', price: 2, imgURL: 'https://i5.walmartimages.com/asr/442ac320-a8e2-46ee-927e-09c9c231ec1d.0fd17825d03ddc85b1658f7745caf7c4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' }),
    new Snack({ name: 'Airheads', price: 3.50, imgURL: 'https://i5.walmartimages.com/asr/99ba3cd5-0621-4609-b992-f544f2a8fb3c_1.20291b7fdacd346a80e4000e0fc93a0f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' }),
    new Snack({ name: 'Cheetos', price: 2.5, imgURL: 'https://images.albertsons-media.com/is/image/ABS/960156582-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available' }),
    new Snack({ name: 'Melted Popsicle', price: 1, imgURL: 'https://media.istockphoto.com/id/146059889/photo/red-melting-twin-popsicle-on-white-background.jpg?s=612x612&w=0&k=20&c=S7gT_40_S6RVp-KYM018lzpPj6buAUFHtYumMJFeVxE=' }),
    new Snack({ name: 'Frozen Popsicle', price: 5, imgURL: 'https://i5.walmartimages.com/asr/fb1319d7-5cd3-41d5-b277-fac8a0eb70ec.501cab102259061f93ea3fd2f5be71c0.jpeg' }),
    new Snack({ name: 'Mystery Item', price: 3, imgURL: 'https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80' })
  ]
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
