import Project from "../models/Project.js";
import Tarea from "../models/Tareas.js";

export const resolvers = {
    Query : {
        hello: function(){
            return "Hola Mundo!"
        },
        // o podriasmos simplificar el codigo 
        // projects: async() => await Project.find();
        projects: async () =>  {
            const projects = await Project.find();
            return projects
        },
        project: async (_,{_id}) => {
            const project = await Project.findById(_id)
            return project
        },
        tareas: async () => {
            const tareas = await Tarea.find();
            return tareas
        },
        tarea: async (_,{_id}) => {
            const tarea = await Tarea.findById(_id);
            return tarea
        }
    },
    Mutation : {
        createProject : async (_, {name, description}) => {
            const project = new Project({
                name,
                description
            })
            const saveProject = await project.save()
            return saveProject
        },
        createTarea : async (_, {title, projectId}) => {
            const projectFound = await Project.findById(projectId);
            if(!projectFound) throw new Error('project not found')
            
            const tarea = new Tarea({
                title,
                projectId
            })
            const saveTarea =  await tarea.save();
            return saveTarea
        },
        deleteProject : async (_, {_id}) => {
            const deletedProject = await Project.findByIdAndDelete(_id);

            await Tarea.deleteMany({ projectId: deletedProject._id});

            if(!deletedProject) throw new Error('project not found')
            return deletedProject
        },
        deleteTarea : async (_, {_id}) => {
            const deletedTarea = await Tarea.findByIdAndDelete(_id);
            if(!deletedTarea) throw new Error('Tarea not found')
            return deletedTarea
        },
        updateProject : async (_, args) => {
           const updatedProject = await Project.findByIdAndUpdate(args._id, args, {
            new: true,
           });
           if(!updatedProject) throw new Error('Project not found');
           return updatedProject
        },
        updateTarea : async (_, args) => {
            const updatedTarea = await Tarea.findByIdAndUpdate(args._id, args, {
             new: true,
            });
            if(!updatedTarea) throw new Error('task not found');
            return updatedTarea
         }
    },
    Project : {
        tareas: async (parent) => await Tarea.find({projectId: parent._id}),
    },
    Tarea : {
        project: async(parent) => await Project.findById(parent.projectId),
    }
}