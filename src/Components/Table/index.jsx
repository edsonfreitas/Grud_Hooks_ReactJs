//Componente Tabela

export function Tabela(){

    return(
        <>
         <table className="table">
            <thead>
                <tr>
                    <th>IdColuna</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Cidade</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody></tbody>
         </table>
        </>
    )
}