export default interface DAO_Interface {
   nomeDaTabela: String

    inserir(object: any): Boolean
    deletar(id: Number ): Boolean
    editar(id: Number ): Boolean
    buscar(id: Number) : any
    atualizar(object: any): Boolean

}