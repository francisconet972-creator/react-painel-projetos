function StatusBadge({ status }) {
  let classeStatus = "";

  if (status === "Concluído") {
    classeStatus = "badge-concluido";
  } else if (status === "Em desenvolvimento") {
    classeStatus = "badge-desenvolvimento";
  } else if (status === "Planejamento") {
    classeStatus = "badge-planejamento";
  }

  return (
    <span className={`status-badge ${classeStatus}`}>
      {status}
    </span>
  );
}

export default StatusBadge;