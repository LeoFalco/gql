import { client } from '../../src/graphql/client'

import * as query from '../../src/graphql/query'

export async function seed(): Promise<void> {
  const credito = {
    finalizadoraInput: {
      id: 'cjld2cjxh0000qzrmn831i7rn',
      descricao: 'Cartão de Cédito',
    },
  }

  const debito = {
    finalizadoraInput: {
      id: 'ck6gp97gt0001xkmcpptuq2tb',
      descricao: 'Cartão de Débito',
    },
  }

  const dinheiro = {
    finalizadoraInput: {
      id: 'cjld2cyuq0000t3rmniod1foy',
      descricao: 'Dinehiro',
    },
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const promisses: any[] = []

  promisses.push(
    client
      .mutate({
        mutation: query.INSERIR_FINALIZADORA,
        variables: credito,
      })
      .then(result => {
        console.log(result)
      }),
  )

  promisses.push(
    client
      .mutate({
        mutation: query.INSERIR_FINALIZADORA,
        variables: debito,
      })
      .then(result => {
        console.log(result)
      }),
  )

  promisses.push(
    client
      .mutate({
        mutation: query.INSERIR_FINALIZADORA,
        variables: dinheiro,
      })
      .then(result => {
        console.log(result)
      }),
  )

  const coca = {
    produtoInput: {
      id: 'ck6iaz8ky0000vkmcdrh9auxr',
      descricao: 'coca cola',
      codigo: '1',
      preco: 3.25,
    },
  }

  const batataRustica = {
    produtoInput: {
      id: 'ck6ifmhpr0000rkmc7w1oa6rx',
      descricao: 'Batata Rustica',
      codigo: '2',
      preco: 5.0,
    },
  }

  const lanche = {
    produtoInput: {
      id: 'ck6ie63v20000t0mchqmf10et',
      descricao: 'Lanche',
      codigo: '2',
      preco: 18.75,
    },
  }

  promisses.push(
    client
      .mutate({
        mutation: query.INSERIR_PRODUTO,
        variables: coca,
      })
      .then(result => {
        console.log(result)
      }),
  )

  promisses.push(
    client
      .mutate({
        mutation: query.INSERIR_PRODUTO,
        variables: lanche,
      })
      .then(result => {
        console.log(result)
      }),
  )

  promisses.push(
    client
      .mutate({
        mutation: query.INSERIR_PRODUTO,
        variables: batataRustica,
      })
      .then(result => {
        console.log(result)
      }),
  )

  const deneris = {
    clienteInput: {
      id: 'ck6idyuvt0000fsmc8qxp6feo',
      nome: 'Deneris Targuerian',
      telefone: '17 981938155',
    },
    enderecoInput: {
      id: 'ck6idz6jf0000fgmc4qygd3pb',
      logradouro: 'Sala do trono',
      bairro: 'Pedra do dragao',
      cidade: 'Terras do Rei',
      cep: '15110000',
    },
  }

  const leo = {
    clienteInput: {
      id: 'ck6ib9a3m0001iwmcd6sj0r0s',
      nome: 'Leo Falco',
      telefone: '17 981166175',
    },
    enderecoInput: {
      id: 'ck6ib98cv0000iwmcva59zrq6',
      logradouro: 'Rua A',
      bairro: 'Centro',
      cidade: 'Guapiaçu',
      cep: '15110000',
    },
  }

  promisses.push(
    client
      .mutate({
        mutation: query.INSERIR_CLIENTE,
        variables: deneris,
      })
      .then(result => {
        console.log(result)
      }),
  )

  promisses.push(
    client
      .mutate({
        mutation: query.INSERIR_CLIENTE,
        variables: leo,
      })
      .then(result => {
        console.log(result)
      }),
  )

  const atendimentoDeneris = {
    atendimentoInput: {
      id: 'ck6iexb0f0002g0mcn11ur1u3',
      idCliente: 'ck6ib9a3m0001iwmcd6sj0r0s',
    },
  }

  const cocaParaDeneris = {
    idAtendimento: 'ck6iexb0f0002g0mcn11ur1u3',
    itemInput: {
      id: 'ck6if4abv0001mcmcji580iva',
      idProduto: 'ck6iaz8ky0000vkmcdrh9auxr',
      quantidade: 2,
      cancelado: false,
    },
  }

  const lancheParaDeneris = {
    idAtendimento: 'ck6iexb0f0002g0mcn11ur1u3',
    itemInput: {
      id: 'ck6if4abv0001mcmcji580iva',
      idProduto: 'ck6iaz8ky0000vkmcdrh9auxr',
      quantidade: 2,
      cancelado: false,
    },
  }

  const batataRusticaParaDeneris = {
    idAtendimento: 'ck6iexb0f0002g0mcn11ur1u3',
    itemInput: {
      id: 'ck6ifncjw0000uomchtxo4vw1',
      idProduto: 'ck6ifmhpr0000rkmc7w1oa6rx',
      quantidade: 1,
      cancelado: false,
    },
  }

  const pagamentoNoDinheiroComTroco = {
    idAtendimento: 'ck6iexb0f0002g0mcn11ur1u3',
    pagamentoInput: {
      id: 'ck6ijfmos0000gomceyst06p0',
      valor: 10,
      troco: 5,
      idFinalizadora: 'cjld2cyuq0000t3rmniod1foy',
    },
  }

  const auditarAtendimento = {
    idAtendimento: 'ck6iexb0f0002g0mcn11ur1u3',
  }

  const confirmado = {
    idAtendimento: 'ck6iexb0f0002g0mcn11ur1u3',
    status: 'CONFIRMADO',
  }

  const emEntrega = {
    idAtendimento: 'ck6iexb0f0002g0mcn11ur1u3',
    status: 'EM_ENTREGA',
  }

  async function lancarAtendimento(): Promise<void> {
    await Promise.all(promisses) // aguardar todos os cadastro serem realizados

    console.log(atendimentoDeneris)
    const atendimentoAberto = await client.mutate({
      mutation: query.ABRIR_ATENDIMENTO,
      variables: atendimentoDeneris,
    })
    console.log(atendimentoAberto)

    console.log(cocaParaDeneris)
    const cocaLancada = await client.mutate({
      mutation: query.LANCAR_ITEM,
      variables: cocaParaDeneris,
    })
    console.log(cocaLancada)

    console.log(lancheParaDeneris)
    const lancheLancado = await client.mutate({
      mutation: query.LANCAR_ITEM,
      variables: lancheParaDeneris,
    })
    console.log(lancheLancado)

    console.log(batataRusticaParaDeneris)
    const batataLancada = await client.mutate({
      mutation: query.LANCAR_ITEM,
      variables: batataRusticaParaDeneris,
    })
    console.log(batataLancada)

    console.log(confirmado)
    const atendimentoCondirmado = await client.mutate({
      mutation: query.ALTERAR_STATUS,
      variables: confirmado,
    })
    console.log(atendimentoCondirmado)

    console.log(emEntrega)
    const atendimentoEmEntrega = await client.mutate({
      mutation: query.ALTERAR_STATUS,
      variables: emEntrega,
    })
    console.log(atendimentoEmEntrega)

    console.log(pagamentoNoDinheiroComTroco)
    const result = await client.mutate({
      mutation: query.LANCAR_PAGAMENTO,
      variables: pagamentoNoDinheiroComTroco,
    })
    console.log(result)

    const pagamentoNoCartao = {
      idAtendimento: 'ck6iexb0f0002g0mcn11ur1u3',
      pagamentoInput: {
        id: 'ck6ijimmz0000wcmc6ktf475q',
        valor: result.data.lancarPagamento.valorTotal - result.data.lancarPagamento.valorPago,
        idFinalizadora: 'cjld2cjxh0000qzrmn831i7rn',
      },
    }

    console.log(pagamentoNoCartao)
    const pagamentoNoCartaoLancado = await client.mutate({
      mutation: query.LANCAR_PAGAMENTO,
      variables: pagamentoNoCartao,
    })
    console.log(pagamentoNoCartaoLancado)

    console.log(auditarAtendimento)
    const atendimentoAuditado = await client.mutate({
      mutation: query.AUDITAR_EARQUIVAR,
      variables: auditarAtendimento,
    })
    console.log(atendimentoAuditado)
  }

  await lancarAtendimento()
}
