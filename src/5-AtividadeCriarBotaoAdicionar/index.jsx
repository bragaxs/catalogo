// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

import { useState } from "react";

const[listaPedidos, setListaPedidos] = useState([]);

const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos,objeto])
}
export default function Home() {
  return (
    <div>
       <h1>Tenis em Promoção</h1>
       {
 listaTenis.map((produto)=>
 <div key={produto.id}>
 <p>{produto.nome}</p>
 <p>{produto.preco}</p>
 <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar</button>
 </div>
 )
}
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
