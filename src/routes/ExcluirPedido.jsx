import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import './ExcluirProduto.css'


export default function ExcluirPedido (){
            
    const { id } = useParams();
    const navigate = useNavigate();
          
    const recPedidoListaByid = ListaPedidos.filter((item) => item.id == id);
            
    const [pedido] = useState({
        id: recPedidoListaByid[0].id,
        nome: recPedidoListaByid[0].nome,
        quant: recPedidoListaByid[0].quant,
        valor: recPedidoListaByid[0].valor,
    });
            
        const handleExclude = (event) => {
            event.preventDefault();
            let indice;
            ListaPedidos.forEach((item, index) => {
            if (item.id == pedido.id) {
                indice = index;
            }
            });
            ListaPedidos.splice(indice, 1);
            navigate('/pedido');
        };
          
        return (
            <section className='excluir_geral'>
              <div className='container'>
                <h1> Excluir Pedido </h1>
                <div>
                  <p>Nome : {pedido.nome}</p>
                  <p>Quant : {pedido.quant}</p>
                  <p>Valor : {pedido.valor}</p>
                </div>
                <div>
                  
                  <button onClick={handleExclude} >
                    EXCLUIR
                  </button>
                  
                  <button onClick={() => navigate('/pedidos')}>
                    CANCELAR
                  </button>
                </div>
              </div>
            </section>
          );
}
    