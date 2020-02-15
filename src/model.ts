import { Interface } from 'readline'

export interface Pagination {
    first: number,
    skip: number
}

export interface FinalizadoraInput {
    id?: string,
    descricao: string
}

export interface ProdutoInput {
    id?: string,
    descricao: string,
    codigo: string,
    preco: number
}

export interface ClienteInput {
    id?: string,
    nome: string,
    telefone: string
}

export interface EnderecoInput {
    id?: string,
    logradouro: string,
    bairro: string,
    cidade: string,
    cep: string
}

export interface ItemInput {
    id?: string,
    idProduto: string,
    quantidade: 2,
    cancelado?: false
  }

export interface PagamentoInput {
    id?: string,
    valor: number,
    troco: number,
    idFinalizadora: string
  }
