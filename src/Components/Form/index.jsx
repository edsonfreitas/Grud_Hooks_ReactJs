export function Formulario({btnCadastrar, setNome, setIdade, setCidade, cadastrar, nome, idade, cidade}){
     
    return(
        <>
         <form action="">
            <input 
            type="text"
            value={nome}
             placeholder="Nome" 
             className="form-control" 
             onChange={e=> setNome(e.target.value)}
             />

            <input
             type="text" 
             value={idade}
             placeholder="Idade" 
             className="form-control"
             onChange={e=> setIdade(e.target.value)}
             />
             
            <input 
            type="text" 
            value={cidade}
            placeholder="Cidade" 
            className="form-control" 
            onChange={e=> setCidade(e.target.value)}
            />

            {
                btnCadastrar 
                ?
                <input 
                type="button" 
                value='Cadastrar' 
                className="btn btn-primary"
                onClick={cadastrar}
                />
                :
                <div>
                     <input type="button" value='Alterar' className="btn btn-secondary"/>
                     <input type="button" value='Excluir' className="btn btn-danger"/>
                     <input type="button" value='Cancelar' className="btn btn-success"/>
                </div>
            }

            
            
         </form>
        </>
    )
}