import { ProjectsForm } from "../components/ProjectsForm"
import { ProjectsList } from "../components/ProjectsList"


export const Projects = () => {
  return (
    <div className="bg-zinc-900 rounded-md shadow-lg shadow-black p-8 h-4/5 w-3/5">
      <div className="flex justify-between gap-x-1">
      <ProjectsForm/>
        <ProjectsList/>
      </div>
    </div>
  )
}
