import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import './ExcluirProduto.css'


export default function ExcluirProduto (){
        
        const { id } = useParams();
        const navigate = useNavigate();
      
        const recProdutoListaByid = ListaProdutos.filter((item) => item.id == id);
        
        const [produto] = useState({
          id: recProdutoListaByid[0].id,
          nome: recProdutoListaByid[0].nome,
          desc: recProdutoListaByid[0].desc,
          valor: recProdutoListaByid[0].valor,
        });
        
        const handleExclude = (event) => {
          event.preventDefault();
          let indice;
          ListaProdutos.forEach((item, index) => {
            if (item.id == produto.id) {
              indice = index;
            }
          });
          ListaProdutos.splice(indice, 1);
          navigate('/produtos');
        };
      
        return (
          <section className='excluir_geral'>
            <div className='container'>
              <h1>Excluir Produto</h1>
              <div>
                <p>Nome : {produto.nome}</p>
                <p>Desc : {produto.desc}</p>
                <p>valor : {produto.valor}</p>
              </div>
              <div>
                
                <button onClick={handleExclude} >
                  EXCLUIR
                </button>
                
                <button onClick={() => navigate('/produtos')}>
                  CANCELAR
                </button>
              </div>
            </div>
          </section>
        );
}
