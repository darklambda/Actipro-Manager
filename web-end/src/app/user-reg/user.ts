export class User {
    constructor(
        public name: string,
        public email: string,
        public password: number,
        public permission: string,
        public enterprise: string,
        public rut: string
    ){ }
}