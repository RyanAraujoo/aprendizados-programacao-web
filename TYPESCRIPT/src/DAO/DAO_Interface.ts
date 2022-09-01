export default interface DAO_Interface<t>{ // esse <t> significa que a interface vai ser gerenciado por um tipo
   nomeDaTabela: String

    inserir(object: t): Boolean
    deletar(id: Number ): Boolean
    editar(id: Number ): t
    buscar(id: Number) : t
    atualizar(object: t): Boolean

}