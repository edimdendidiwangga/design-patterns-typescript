/*                                 Store

            Product Type                       Price
Fashion(price)    Electronic(type)        Cheap   Expensive
*/

interface Price {
    name: string;
    sellPrice(): string;
}

class Cheap implements Price {
    public name: string = 'murah'
    
    sellPrice(): string {
        return `Jual harga ${this.name}`;
    }
}

class Expensive implements Price {
    public name: string = 'mahal'
    
    sellPrice(): string {
        return `Jual harga ${this.name}`;
    }
}

interface IProduct { // interface product
    name: string;
}

abstract class Product implements IProduct {
    constructor(public name: string, public price: Price) {
    }

    abstract sell(): void;
}

class Fashion extends Product {
    sell(): void {
        console.log(`Jual ${this.name} dengan harga ${this.price.sellPrice()}`);
    }
}

class Computer extends Product {
    sell(): void {
        console.log(`Jual ${this.name} dengan harga ${this.price.sellPrice()}`);
    }
}

// -------------------------------------
const fashionMurah = new Fashion('kemeja', new Cheap());
console.log(fashionMurah.sell());

const komputerMahal = new Computer('macbook pro', new Expensive());
console.log(komputerMahal.sell());
