import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import {saveState} from "../Utils/LocalStorage.js"

//Public
class TaskService {
  constructor(){
    ProxyState.on("tasks", saveState)
  }

  create(rawTaskData){
    let tasks = ProxyState.tasks
    tasks.push(new Task(rawTaskData))
    ProxyState.tasks = tasks
    console.log(ProxyState.tasks);
  }
  delete(id){
    if(window.confirm("Are you sure you want to delete this task?")){
      ProxyState.tasks = ProxyState.tasks.filter(t=> t.id !=id)
    }
  }
}

export const taskService = new TaskService();
