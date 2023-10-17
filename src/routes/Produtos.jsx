import { } from 'react';
import { Link } from 'react-router-dom';
import { GrFormEdit as EditarProduto } from 'react-icons/gr';
import { RiDeleteBin2Fill as ExcluirProduto } from 'react-icons/ri';
import {ListaProdutos} from '../components/ListaProdutos';
import './Produtos.css'
import InserirProduto from './InserirProduto';



export default function Produtos() {
  
  return (
    <>
      <section className='pedidos_geral'>
        <div className='lista_de_produtos'>
            <h1>Lista de Produtos</h1>
            <table>
              <thead>
                <tr>
                  <th> ID </th>
                  <th> Nome </th>
                  <th> Descrição </th>
                  <th> Preço </th>
                  <th> Editar / Excluir</th>
                </tr>
              </thead>
              <tbody>
                {ListaProdutos.map((item,indice) =>(
                  <tr key={indice}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.desc}</td>
                    <td>{item.valor}</td>
                    <td>
                      {' '}
                      
                      
                      <Link to={`/editar/produtos/${item.id}`}>
                        <EditarProduto />
                      </Link>{' '}


                      <Link to={`/excluir/produtos/${item.id}`}>
                        <ExcluirProduto />
                      </Link>{' '}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
        </div>  
        <div className='Inserir_pedido_produtos'>
          <InserirProduto/> 
        </div>
      </section>

      
    </>
  );
}







