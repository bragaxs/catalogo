// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".

import { useState } from "react";

export default function Home() {

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
{
 listaTenis.map((produto)=>
 <div key={produto.id}>
 <p>{produto.nome}</p>
 <p>{produto.preco}</p>
 <button onClick={()=> removerPedido(produto.id)}>Remover</button>
 </div>
 )
}
    </div>
  );
}