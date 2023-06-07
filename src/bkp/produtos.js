export let produtos = [{id: 1, descricao: 'mesa', preco: 50 },
                       {id: 2, descricao: 'sofa', preco: 100 },
                       {id: 3, descricao: 'cadeiraa', preco: 20}]


export const alterarProduto = (id, descricao, preco) => {
    let produtoEditar = produtos.find(produto => produto.id === id)

    produtoEditar.descricao = descricao
    produtoEditar.preco = preco
    

    return produtoEditar
}                 

export const deletarProduto = (id) => {
    produtos = produtos.filter(produto => produto.id !== id)
}