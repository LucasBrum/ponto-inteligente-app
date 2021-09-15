import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class CadastroPf {
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public cpf: string,
        public cnpj: string
    ){}
}