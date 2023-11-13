type User = {
    nome: string
    idade: number
    ocupacao: string
    salario?: number
}

export function showUser(usuario: User): void {

    console.log(`
    nome: ${usuario.nome}
    idade: ${usuario.idade}
    Ocupação: ${usuario.ocupacao}
    Salario: ${usuario.salario ? `R$ ${usuario.salario}` : "N/A"}
    `)

}