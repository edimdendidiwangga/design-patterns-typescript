namespace DecoratorSolution {
    interface IProduct {
        getProduct(): any;
    }

    class Product implements IProduct {
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

    abstract class ProductDecorator implements IProduct {
        
        constructor(protected product: Product) {

        }

        abstract getProduct(): any;
    }

    class ProductImportDecorator extends ProductDecorator {
        getProduct() {
            return {
                name: this.product.name,
                price: this.product.price + 20000,
                tax: 10000
            }
        }
    }

    class ProductExportDecorator extends ProductDecorator {
        getProduct() {
            return {
                name: this.product.name,
                price: this.product.price + 40000,
                tax: 10000
            }
        }
    }

    const productA = new Product('product A', 5000);
    console.log(productA.getProduct());

    const productAFromImport = new ProductImportDecorator(productA);
    console.log(productAFromImport.getProduct());

    const productAFromExport = new ProductExportDecorator(productA);
    console.log(productAFromExport.getProduct());
    
}

