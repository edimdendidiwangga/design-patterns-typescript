namespace Observer {
    interface Subject {
        attach(observer): void;
        detach(observer): void;
        notify(): void;
    }

    interface Observer {
        name: string;
        update(subject: Subject): void;
    }

    class PromoSubject implements Subject {
        public isPromo: Boolean = false;
        private observers: Observer[] = [];

        attach(observer: Observer): void {
            const isExist: Boolean = this.observers.indexOf(observer) !== -1;
            if (isExist) {
                return console.log(`observer ${observer.name} sudah ada`);
            }
            this.observers.push(observer);
            console.log(`observer ${observer.name} berhasil ditambahkan`);
        }

        detach(observer: Observer): void {
            const observerIndex = this.observers.indexOf(observer);
            if (observerIndex === -1) {
                return console.log(`observer ${observer.name} tidak ditemukan`);
            }
            this.observers.splice(observerIndex, 1);
            console.log(`observer ${observer.name} berhasil dihapus`);
        }

        notify(): void {
            for(const observer of this.observers) {
                observer.update(this);
            }
        }

        setPromo(status: Boolean): void {
            this.isPromo = status;
            this.notify();
        }
    }

    class Product implements Observer {
        constructor(public name: string) {}

        update(subject: Subject): void {
            if (subject instanceof PromoSubject && subject.isPromo) {
                console.log(`product ${this.name} telah ditayangkan ke toko online sebagai product promo`);
            }
        }
    }

    const promo = new PromoSubject();
    const baju = new Product('baju');
    const celana = new Product('celana');
    const topi = new Product('topi');

    promo.attach(baju)
    promo.attach(celana)
    promo.attach(topi)


    promo.setPromo(true);
    promo.detach(topi)
    console.log(promo);
    
}