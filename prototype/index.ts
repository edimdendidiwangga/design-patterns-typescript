namespace PrototypePattern {

    class User {
        constructor(
            public name: string,
            public username: string,
            public password: string,
            public email: string,
            public phone: string
        ) {}

        public clone(): this {
            const clone = (<any>Object).assign({}, this);
            return clone
        }
    }

    const user1 = new User('Edim', 'edimdend', 'edim4321', 'edim@mail.cm', '08512345');

    const user2 = user1.clone();
    user2.name = 'dudek'
    console.log(user2);
    
}