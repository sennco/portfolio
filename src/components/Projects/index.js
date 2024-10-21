// import { ReactComponent as SvgLogo } from '../../media/svg/Logo.svg';
import styles from "./project.module.css";
import ProjectsCard from "../ProjectCard";

function Projects() {
  return (
    <>
      <div id="projects" className={styles.anchor}></div>
    
    <div className={styles.container}>
      <div className={styles.title_section}>
        <h1 className={styles.title}>&lt;Projetos/&gt;</h1>
        <span />
      </div>

      <div className={styles.card_container}>
        <ProjectsCard
          title="Portifólio"
          image="background_portfolio"
          desc="Site pessoal criado com React, usando typewriter."
          repo="https://github.com/sennco/portfolio"
          link="https://senco.dev.br"
        />
        <ProjectsCard
          title="Buscador de CEP"
          image="busca_cep"
          desc="Site feito com consumo da API dos correios, trazendo endereço completo do CEP digitado.  aplicação valida o formato do CEP para garantir que ele seja válido antes de fazer a requisição. "
          repo="https://github.com/sennco/buscador_cep"
          link="https://buscador-cep.senco.dev.br/"
        />
        <ProjectsCard
          title="Newsletter Tailwind"
          image="news"
          desc="Site feito com Js e Tailwind para praticar o Framework CSS."
          repo="https://github.com/sennco/tailwind-newsletter"
          link="https://tailwind-newsletter.senco.dev.br/"
        />
      </div>
    </div>
    </>
  );
}

export default Projects;
