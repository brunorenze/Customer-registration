export let clientes = [
                { id: '1', nome: "Philipe", idade: 49, telefone: 123456,},
                {id: '2',nome: "Bruno", idade: 18, telefone: 123789 },
                {id: '3', nome: "Alex", idade: 98, telefone: 963258 }]


export const alterarCliente = (id, nome, idade, telefone) => {
    let clienteAEditar = clientes.find(cliente => cliente.id === id)

    clienteAEditar.nome = nome
    clienteAEditar.idade = idade
    clienteAEditar.telefone = telefone

    return clienteAEditar

}
export const deletarCliente = (id) => {
    clientes = clientes.filter(cliente => cliente.id !== id)

}