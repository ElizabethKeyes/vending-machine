

export class Snack {

  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgURL = data.imgURL
  }

  get ListTemplate() {
    return `
    <div class="col-3 mt-4 mx-2">
      <div class="card bg-dark text-light">
        <img
          src="${this.imgURL}"
          class="my-img">
        <p class="ms-2">${this.name}<br>$${(this.price).toFixed(2)}</p>
        <button onclick="app.snacksController.buy('${this.name}')" class="btn btn-info">Buy</button>
      </div>
    </div>
    `
  }

}