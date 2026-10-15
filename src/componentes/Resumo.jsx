function Resumo({ total, concluidos, emDesenvolvimento }) {
  return (
    <div className="resumo-painel">
      <div className="resumo-card">
        <h3>Total de Projetos</h3>
        <p>{total}</p>
      </div>
      <div className="resumo-card">
        <h3>Concluídos</h3>
        <p>{concluidos}</p>
      </div>
      <div className="resumo-card">
        <h3>Em Desenvolvimento</h3>
        <p>{emDesenvolvimento}</p>
      </div>
    </div>
  );
}

export default Resumo;