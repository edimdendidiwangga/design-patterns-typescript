namespace BuilderSolution {

    // cara 1
    class User {
        public name: string = '';
        public username: string = '';
        public password: string = '';
        public email: string = '';
        public phone: string = '';

        getDetails() {
            return `${this.name} username = ${this.username}`;
        }
    }

    class UserBuilder {
        private user: User;

        constructor() {
            this.user = new User();
        }

        setName(value: string) {
            this.user.name = value;
            return this;
        }

        setUsername(value: string) {
            this.user.username = value;
            return this;
        }

        setPassword(value: string) {
            this.user.password = value;
            return this;
        }

        setEmail(value: string) {
            this.user.email = value;
            return this;
        }

        setPhone(value: string) {
            this.user.phone = value;
            return this;
        }

        build() {
            return this.user;
        }
    }

    const user1 = new UserBuilder()
        .setName('Edim')
        .setUsername('edimdend')
        .build();
    const user2 = new UserBuilder()
        .setName('Edim')
        .setUsername('edimdend')
        .setPhone('08988888')
        .build();

    console.log(user1);
    console.log(user2);

    // cara 2
    class User2 {
        public name: string;
        public username: string;
        public password: string;
        public email: string;
        public phone: string;

        constructor({ name = '', username = '', password = '', email = '', phone = ''} = {}) {
            this.name = name;
            this.username = username;
            this.password = password;
            this.email = email;
            this.phone = phone;
        }

        getDetails() {
            return `${this.name} username = ${this.username}`;
        }
    }
    
    const user3 = new User2({ name: 'Budi', username: 'budi123' });
    console.log(user3);
    
}