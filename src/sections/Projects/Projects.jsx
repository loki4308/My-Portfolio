import styles from './ProjectsStyles.module.css';
import stdPro from '../../assets/stdProject .png';
import chatApp from '../../assets/chatProject.png';
import weatherApp from '../../assets/weather.png';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={stdPro}
          link="https://github.com/loki4308/Student-Identification-System.git"
          h3="Student Management"
          
        />
        <ProjectCard
          src={chatApp}
          link="https://github.com/loki4308/Student-Identification-System.git"
          h3="Chatting Box"
          
        />
        <ProjectCard
          src={weatherApp}
          link="https://github.com/loki4308/Weather-Application.git"
          h3="Weather Application"
          
        />
        
      </div>
    </section>
  );
}

export default Projects;
