import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { useState } from 'react';
import './EditarProduto.css'



export default function EditarProduto() {
  
    const { id } = useParams ();
    const navigate = useNavigate();

    const recProdutoListaByid = ListaProdutos.filter((item) => item.id == id);

    const[produto, setProduto] =useState({
        id: recProdutoListaByid[0].id,
        nome: recProdutoListaByid[0].nome,
        desc: recProdutoListaByid[0].desc,
        valor: recProdutoListaByid[0].valor,
    });

    const handleSubmit = (event) =>{
        event.preventDefault();
        let indice;
        ListaProdutos.forEach((item, index) => {
            if (item.id == produto.id) {
                indice = index;
            }
        });

        ListaProdutos.splice(indice, 1, produto);
        navigate('/produtos');
    };

    const handleChange = (event) =>{
        const {name, value } = event.target;
        setProduto({...produto, [name]: value});
    };



  return (
    <section className='editar_geral'>
      <div className='titulo_editar'>
        <h1>EDITAR PRODUTOS</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>PRODUTO SELECIONADO</legend>
            <div>
              <input
                type="hidden"
                name="id"
                value={produto.id}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idNome">Nome do Produto:</label>
              <input
                type="text"
                name="nome"
                id="idNome"
                value={produto.nome}
                  
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição do Produto:</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                value={produto.desc}
                
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idValor">Valor do Produto:</label>
              <input
                type="text"
                name="valor"
                id="idValor"
                value={produto.valor}
                  
                onChange={handleChange}
              />
            </div>
            <div className='botao_editar'>
              <button type="subtmit" >EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
  </section>
  );
}

