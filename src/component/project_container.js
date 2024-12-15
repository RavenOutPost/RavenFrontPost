
export const ProjectContainer = ({data}) => {
  const projectContent = (project, index) =>
   <div class='bg-white rounded-md shadow-md p-10 mt-4 '>
    <div class='text-2xl font-bold '>Projet {index+1}</div>
    <div class='flex flex-row gap-5'>
    <div>Position : {project['project-position']}</div>
    <div>Taille : {project['project-size']}</div>
    </div>
    <div>Inspiration :<img src={project['project-inspi']} alt='project-inspi'></img></div>
    <div>Emplacement :<img src={project['project-img-position']} alt='project-img-position'></img></div>
  </div>

  const buildContent = () => {
    let res = []
    for (let i = 0; i < nb; i++) {
      res.push(projectContent({
        "project-position" : data[`project-position-${i}`],
        "project-size" : data[`project-size-${i}`],
        "project-inspi" : data[`project-inspi-${i}`],
        "project-img-position" : data[`project-img-position-${i}`]
              
      }, i))
    }
    return res
  }

  const getNb = () => {
    let res = Object.keys(data).filter((e) => e.includes('project')).map((e) => parseInt(e.slice(-1)))
    return(Math.max(...res))
  }

  const nb = getNb()


  return(
    <div class='flex flex-col'>
     {buildContent()}
    </div>
  )
}