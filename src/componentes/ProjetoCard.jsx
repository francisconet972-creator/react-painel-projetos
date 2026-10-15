import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({ titulo, descricao, responsavel, status, tecnologias, destaque }) {
  return (
    <article className={`projeto-card ${destaque ? "destaque" : ""}`}>
      {destaque && <strong className="tag-destaque">Projeto em destaque</strong>}
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p className="responsavel"><strong>Responsável:</strong> {responsavel}</p>
      
      <div className="status-container">
        <StatusBadge status={status} />
      </div>

      <div className="tecnologias-container">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag key={tecnologia} nome={tecnologia} />
        ))}
      </div>
    </article>
  );
}

export default ProjetoCard;