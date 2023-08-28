import { Column } from './column';

export class Station {
  #queue = [];
  #filling = [];
  #ready = [];
  constructor(typeStation) {
    this.typeStation = typeStation;
  }

  init() {
    for (const optionStation of this.typeStation) {
      for (let i = 0; i < optionStation.count; i++) {
        this.#filling.push(new Column(optionStation.type, optionStation.speed));
      }
    }
    setInterval(() => {
      console.log(this);
      this.checkQueueToFilling();
    }, 2000);
  }

  checkQueueToFilling() {
    if (this.#queue.length) {
      for (let i = 0; i < this.#queue.length; i++) {
        for (let j = 0; j < this.#filling.length; j++) {
          if (
            !this.#filling[j].car &&
            this.#queue[i].typeFuel === this.#filling[j].type
          ) {
            this.#filling[j].car = this.#queue.splice(i, 1)[0];
            this.fillingGo(this.#filling[j]);
            break;
          }
        }
      }
    }
  }
  fillingGo(column) {
    const car = column.car;
    const start = column.car.needPetrol;
    const timerId = setInterval(() => {
      car.nowTank += column.speed;
      if (car.nowTank >= car.maxTank) {
        clearInterval(timerId);
        const total = car.nowTank - start;
        column.car = null;
        this.leaveClient({ car, total });
      }
    }, 1000);
  }

  leaveClient(car, total) {
    this.#ready.push(car);
    console.log(car.getTitle(), total);
  }
  addCarQueue(car) {
    this.#queue.push(car);
  }
}
