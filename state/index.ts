namespace State {
    interface IProduct {
        name: string;
        saveAsFeaturedProduct(): void;
    }

    class FeaturedProduct {
        constructor(private state: IProduct) {}

        setFeaturedProduct(state: IProduct): void {
            this.state = state;
        }

        getFeaturedProduct(): void {
            console.log(this.state);
        }

        publish(): void {
            this.state.saveAsFeaturedProduct();
        }
    }

    class FashionProduct implements IProduct {
        constructor(public name: string) {}

        saveAsFeaturedProduct(): void {
            console.log(`set produk ${this.name} sebagai product unggulan`);
        }
    }

    const baju = new FashionProduct('baju');
    const celana = new FashionProduct('celana');
    const keyboard = new FashionProduct('keyboard');

    const featuredProduct = new FeaturedProduct(baju);
    featuredProduct.publish();
    featuredProduct.getFeaturedProduct()

    featuredProduct.setFeaturedProduct(keyboard);
    featuredProduct.publish();
    featuredProduct.getFeaturedProduct()
}