namespace Strategy {
    interface NumericConverter {
        convertNumber(numnber: number): void;
    }

    class NumberConvertion {
        constructor(private strategy: NumericConverter) {}

        execute(num: number): void {
            this.strategy.convertNumber(num);
        }
    }

    class NumberToCurrency implements NumericConverter {
        convertNumber(num: number): void {
            console.log(num.toLocaleString('id-ID', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'IDR'
            }));
            
        }
    }

    class NumberToDecimalSeparator implements NumericConverter {
        convertNumber(num: number): void {
            console.log(num.toLocaleString('id-ID', {
                minimumFractionDigits: 2
            }));
        }
    }

    class NumberToDate implements NumericConverter {
        convertNumber(num: number): void {
            console.log(new Date(num * 1000).toUTCString());
        }
    }

    const mataUang = new NumberConvertion(new NumberToCurrency);
    mataUang.execute(1000000);

    const decimal = new NumberConvertion(new NumberToDecimalSeparator);
    decimal.execute(500000000);

    const date = new NumberConvertion(new NumberToDate);
    date.execute(2000000);
}