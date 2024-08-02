// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

export default function Home() {

  return (
    <div>
      <h1>Tenis em Promoção</h1>
      {
        listaProdutos.map((produto)=>
        <div key={produto.id}>
        <p>{produto.nome}</p>
        <p>{produto.preco}</p>
        <button onClick={()=> adicionarPedidos(produto)}>Selecionar</button>
        </div>
        )
      }
      {
      listaPedidos.map((produto)=>
        <div key={produto.id}>
        <p>{produto.nome}</p>
        <p>{produto.preco}</p>
        </div>
      )
}
</div>
  )
}