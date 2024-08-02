// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.
import { useState } from "react";
export default function Home() {
  const[listaTenis, setProdutos] = useState([
    {id: 1, nome: 'Produto A', preco: 'R$100,00'},
    {id: 2, nome: 'Produto B', preco: 'R$150,00'},
    {id: 3, nome: 'Produto C', preco: 'R$200,00'}
    ]);
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