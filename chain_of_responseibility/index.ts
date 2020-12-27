/*
- nama < 20
- harga < 1 jt
- berat < 5 kg
*/

namespace COOR {
    class Product {
        
        constructor(
            private name: string,
            private price: number,
            private weight: number
        ) {}

        validate() {
            if (this.name.length > 20) {
                return 'nama harus dibawah 20 karakter';
            }
            if (this.price > 1000000) {
                return 'harga harus dibawah 1 jt';
            }
            if (this.weight > 5) {
                return 'berat harus dibawah 5 kg';
            }
            return this;
        }
    }

    const product = new Product('Sabun', 250000, 7);
    console.log(product.validate());
    
}