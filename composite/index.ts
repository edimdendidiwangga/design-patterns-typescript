/*
    Computer
        PC
            Case
            Motherboard
            Processor's Fan
        Laptop
            Asus ROG
            Lenovo Thinkpad Tseries
        Peripheral
            HDD
                Seagate 1TB
                WD 1 TB
            SSD
            Memory RAM
                DDR 2
                DDR 3
            Keyboard
                Mechanical
                    Keychron
                    Tecware
                Standard
                    Logitec
*/

class Category {
    children: any[] = [];

    constructor(public name: string) {
    }
}

const computer = new Category('Computer');
computer.children = [
    new Category('PC').children = [
        new Category('Case'),
        new Category('Motherboard'),
    ],
    new Category('Laptop').children = [
        new Category('Asus ROG'),
    ],
]
console.log(JSON.stringify(computer, null, 4));
