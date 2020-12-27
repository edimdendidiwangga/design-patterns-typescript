/*

ojek1   ojek2   ojek3   ojek4
            app
    penumpang1  penumpang2

*/
namespace Mediator {
    interface IProduct {
        name: string;
        sell(): void;
    }
    
    interface IMediator {
        registerProduct(product: IProduct): void;
        setAvailableStatus(status: Boolean): void;
        isAvailable(): Boolean;
    }
    
    class Product implements IProduct {
        constructor(public name: string, public mediator: IMediator) {}

        sell(): void {
            if (this.mediator.isAvailable()) {
                this.mediator.setAvailableStatus(false);
                console.log(`produk ${this.name} berhasil dijual`);
            } else {
                console.log('produk ini belum dijual harus didaftarkan terlebih dahulu');
            }
        }
    }
    
    class ProductMediator implements IMediator {
        product?: Product;
        status: Boolean = false;
        
        registeredProduct(): void {
            if (this.status) {
                console.log(this.product);
            } else {
                console.log('tidak ada produk yang dijual');
            }
        }

        registerProduct(product: Product): void {
            if (this.status) {
                console.log('tidak bisa mendaftarkan produk, karena masih ada produk yang belum terjual');
            } else {
                this.product = product;
                this.status = true;
                console.log('produk berhasil didaftarkan');
            }
        }

        setAvailableStatus(status: Boolean): void {
            this.status = status;
        }

        isAvailable(): Boolean {
            return this.status;
        }
    }

    const mediator = new ProductMediator();
    const product1 = new Product('Sabun', mediator);
    const product2 = new Product('Sampoo', mediator);

    mediator.registerProduct(product1);
    mediator.registerProduct(product2);

    product1.sell();
    product2.sell();

    mediator.registeredProduct();
    mediator.registerProduct(product2);
    mediator.registeredProduct();
    product2.sell();
    mediator.registeredProduct();


    
}
