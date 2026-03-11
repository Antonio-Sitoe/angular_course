import { IAddress } from "./address.interface";
import { IStatus } from "./status.interface";

export interface IUser {
  nome: string;
  email: string;
  senha: string;
  idade: number;
  endereco: IAddress;
  telefone: string;
  ativo: boolean;
  funcao: string;
  dataCadastro: string;
  status: IStatus;
}

export interface IUserForm {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  birthDate: string;
  state: number;
  musics: IMusic[];
}

export type IUserList = IUserForm[];
