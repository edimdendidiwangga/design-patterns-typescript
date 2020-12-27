namespace AddObjectProblem { // biar gak perlu nambah/ngubah object di banyak tempat
    class Product {

        constructor(
            public name: string,
            public price: number
        ) {}

        getProduct() {
            return {
                name: this.name,
                price: this.price
            }
        }
    }

    const productA = new Product('product A', 5000);
    console.log(productA.getProduct());

    const productAFromImport = (<any>Object).assign(productA.getProduct(), { tax: 10000 });
    productAFromImport.price += 20000;
    console.log(productAFromImport);

    const productAFromExport = (<any>Object).assign(productA.getProduct(), { tax: 20000 });
    productAFromExport.price += 40000;
    console.log(productAFromExport);
}