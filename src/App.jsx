import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Secao from "./components/Secao";
import Resumo from "./components/Resumo";
import ProjetoCard from "./components/ProjetoCard";
import "./App.css";

function App() {
  const projetos = [
    {
      id: 1,
      titulo: "Sistema de Estoque",
      descricao: "Controle de produtos e movimentações em tempo real.",
      responsavel: "Ana",
      status: "Concluído",
      tecnologias: ["React", "Node.js", "PostgreSQL"],
      destaque: true
    },
    {
      id: 2,
      titulo: "App de Receitas",
      descricao: "Plataforma colaborativa para compartilhamento de receitas culinárias.",
      responsavel: "Carlos",
      status: "Em desenvolvimento",
      tecnologias: ["React", "JavaScript", "CSS"],
      destaque: false
    },
    {
      id: 3,
      titulo: "Plataforma de Cursos",
      descricao: "Ambiente virtual de aprendizagem com videoaulas e quizzes.",
      responsavel: "Beatriz",
      status: "Planejamento",
      tecnologias: ["React", "TypeScript", "Tailwind"],
      destaque: false
    },
    {
      id: 4,
      titulo: "Controle Financeiro Pessoal",
      descricao: "Aplicativo para gerenciar despesas, receitas e metas mensais.",
      responsavel: "Daniel",
      status: "Concluído",
      tecnologias: ["React", "Firebase", "Chart.js"],
      destaque: true
    },
    {
      id: 5,
      titulo: "Rede Social Pet",
      descricao: "Espaço dedicado para tutores compartilharem fotos e dicas sobre animais.",
      responsavel: "Elena",
      status: "Em desenvolvimento",
      tecnologias: ["React", "Node.js", "MongoDB"],
      destaque: false
    },
    {
      id: 6,
      titulo: "Dashboard de Clima",
      descricao: "Consulta de previsão do tempo integrada com APIs meteorológicas.",
      responsavel: "Felipe",
      status: "Planejamento",
      tecnologias: ["JavaScript", "HTML", "CSS"],
      destaque: false
    }
  ];

  const total = projetos.length;
  const concluidos = projetos.filter((projeto) => projeto.status === "Concluído").length;
  const emDesenvolvimento = projetos.filter((projeto) => projeto.status === "Em desenvolvimento").length;

  return (
    <div className="app-container">
      <Cabecalho />

      <main>
        <Secao titulo="Resumo Geral">
          <Resumo 
            total={total} 
            concluidos={concluidos} 
            emDesenvolvimento={emDesenvolvimento} 
          />
        </Secao>

        <Secao titulo="Projetos da Turma">
          <div className="projetos-grid">
            {projetos.map((projeto) => (
              <ProjetoCard
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                responsavel={projeto.responsavel}
                status={projeto.status}
                tecnologias={projeto.tecnologias}
                destaque={projeto.destaque}
              />
            ))}
          </div>
        </Secao>
      </main>

      <Rodape />
    </div>
  );
}

export default App;