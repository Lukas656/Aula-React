import React from "react";
import produtos from '../../data/produtos';
import './TabelaProdutos.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{

    function getLinhas(){
        return produtos.map((produto, i )=>{
            return(
                <tr className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome} </td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }
return(
    <div className="TabelaProdutos">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr
                >
            </thead>
            <tbody>
                {getLinhas()}
            </tbody>

        </table>
    </div>
)
} 