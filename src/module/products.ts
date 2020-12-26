import Asus from './Asus';
import Macbook from './Macbook';

let asus = new Asus("Zenbook", true, true);
console.log(asus);

let mac = new Macbook("Macbook", false, false);
console.log(mac);
console.log(mac.a());
console.log(mac.b());

