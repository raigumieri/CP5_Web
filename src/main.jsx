import {} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Login from './routes/Login.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import Sobre from './routes/Sobre.jsx';
import Error from './routes/Error.jsx';
import ExcluirProduto from './routes/ExcluirProduto.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import Pedido from './routes/Pedido.jsx';
import EditarPedido from './routes/EditarPedido.jsx';
import ExcluirPedido from './routes/ExcluirPedido.jsx';


  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,


      children:[
        {path: '/', element: <Home /> },
        {path: '/home', element: <Home /> },
        {path: '/produtos', element: <Produtos /> },
        {path: '/sobre', element: <Sobre /> },
        {path: '/login', element: <Login /> },
        {path: '/editar/produtos/:id', element: <EditarProduto /> },
        {path: '/excluir/produtos/:id', element: <ExcluirProduto /> },
        {path: '/pedido', element: <Pedido /> },
        {path: '/editar/pedido/:id', element: <EditarPedido /> },
        {path: '/excluir/pedido/:id', element: <ExcluirPedido /> },
        
      ]
      
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
  
)
