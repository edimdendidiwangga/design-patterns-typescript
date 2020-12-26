namespace FactorySolution {
    interface Logistic {
        qty: number;
        deliver(): void;
    }

    class Truck implements Logistic {
        constructor(public qty: number) {}

        deliver(): void {
            console.log(`Send ${this.qty} with truck`);  
        }
    }

    class Ship implements Logistic {
        constructor(public qty: number) {}

        deliver(): void {
            console.log(`Send ${this.qty} with Ship`);
        }
    }

    type LogisticType = {
        type: string;
        qty: number;
    }

    interface Factory {
        create(options: LogisticType): Logistic;
    }

    class LogisticFactory implements Factory {
        public create(options: LogisticType): Logistic {
            if (options.type === 'deliver_by_land') {
                return new Truck(options.qty);
            } else if (options.type === 'deliver_by_sea') {
                return new Ship(options.qty);
            }
            throw new Error('class not exist');
        }
    }

    const logistic = new LogisticFactory();

    const byLand = logistic.create({ type: 'deliver_by_land', qty: 20 });
    console.log(byLand.deliver());
    
}