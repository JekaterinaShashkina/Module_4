import './style.css';
import { PassangerCar, Truck, Gas } from './modules/car';
import { Station } from './modules/station';

const open = document.querySelector('.open');
const car = document.querySelector('.car');

const testArray = {
  passangerCar: [
    ['Opel', 'Crossland', 45],
    ['Opel', 'Grandland X', 53],
    ['Mazda', 'cx-5', 55],
    ['BMW', 'M5', 68],
    ['BMW', 'X5', 80],
    ['BMW', 'X5d', 80, 'diesel'],
    ['BMW', 'X3', 65],
    ['BMW', '5', 66],
  ],
  truck: [
    ['MAN', 'TGS', 400],
    ['MAN', 'TGX', 300],
    ['Mercedes-Benz', 'Actros', 450],
    ['Mercedes-Benz', 'Actros L', 650],
    ['Volvo', 'FH16', 700],
    ['Volvo', 'FM', 700],
    ['Volvo', 'FMX', 540],
  ],
  gas: [
    ['Honda', 'CR-V', 80],
    ['Hyundai', 'Solaris', 45],
    ['Honda', 'Civic', 40],
    ['Toyota', 'RAV4', 60],
    ['Subaru', 'Outback', 55],
    ['Mazda', 'CX-9', 50],
  ],
};

const getTestCar = () => {
  const random = Math.random();
  const listCar =
    random < 0.5
      ? testArray.passangerCar
      : random > 0.5 && random < 0.8
      ? testArray.truck
      : testArray.gas;
  const randomCar = listCar[Math.floor(Math.random() * listCar.length)];
  return random < 0.5
    ? new PassangerCar(...randomCar)
    : random > 0.5 && random < 0.8
    ? new Truck(...randomCar)
    : new Gas(...randomCar);
};

const station = new Station(
  [
    {
      type: 'petrol',
      count: 3,
      speed: 5,
    },
    {
      type: 'diesel',
      count: 2,
      speed: 20,
    },
    {
      type: 'gas',
      // speed: 10,
    },
  ],
  '.app',
);

open.addEventListener('click', () => {
  station.init();
  console.log(station);
  open.remove();
  car.style.display = 'block';
  car.addEventListener('click', () => {
    station.addCarQueue(getTestCar());
  });
});
