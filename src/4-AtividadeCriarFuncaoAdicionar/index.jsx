// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

import { useState } from "react";


export default function Home() {
const[listaTenis, setProdutos] = useState([
{id: 1, nome: 'Produto A', preco: 'R$100,00'},
{id: 2, nome: 'Produto B', preco: 'R$150,00'},
{id: 3, nome: 'Produto C', preco: 'R$200,00'}
]);

const [listaPedidos, setListaPedidos] = useState([])

const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos, objeto])
}

  return (
    <div>
        <h1>Tenis em Promoção</h1>
        {
 listaTenis.map((produto)=>
 <div key={produto.id}>
 <p>{produto.nome}</p>
 <p>{produto.preco}</p>
 </div>
 )
}
    </div>
   
  );
}