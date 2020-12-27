namespace CORSolution {
    class Product {
        
        constructor(
            private name: string,
            private price: number,
            private weight: number
        ) {}
    }

    interface Handler {
        setNext(handler: Handler): Handler;
        handle(request: any): any;
    }

    abstract class AbstractProductHandler implements Handler {
        private nextHandler: Handler | null = null;

        public setNext(handler: Handler): Handler {
            this.nextHandler = handler;
            return handler;
        }

        handle(request: any): any {
            if (this.nextHandler) {
                return this.nextHandler.handle(request);
            }

            return request;
        }
    }

    class ProductNameHandler extends AbstractProductHandler {
        handle(request: any): any {
            if (request.name.length > 20) {
                return 'nama harus dibawah 20 karakter'; 
            }

            return super.handle(request);
        }
    }

    class ProductPriceHandler extends AbstractProductHandler {
        handle(request: any): any {
            if (request.price > 1000000) {
                return 'harga harus dibawah 1 jt';
            }

            return super.handle(request);
        }
    }

    class ProductWeightHandler extends AbstractProductHandler {
        handle(request: any): any {
            if (request.weight > 5) {
                return 'berat harus dibawah 5 kg';
            }

            return super.handle(request);
        }
    }

    const product1 = new Product('A', 300000, 7);
    const product2 = new Product('B', 1200000, 2);
    const product3 = new Product('C', 250000, 4);

    const nameHandler = new ProductNameHandler();
    const priceHandler = new ProductPriceHandler();
    const weightHandler = new ProductWeightHandler();

    nameHandler.setNext(priceHandler).setNext(weightHandler);

    console.log(nameHandler.handle(product1));
    console.log(nameHandler.handle(product2));
    console.log(nameHandler.handle(product3));
}