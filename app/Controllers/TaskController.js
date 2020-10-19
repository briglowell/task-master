import { taskService } from "../Services/TaskService.js";

//Public
export default class TaskController {

  create(e, listId){
    e.preventDefault()
    let form = e.target
    let rawTaskData = {
      title: form.taskTitle.value,
      listId: listId
    }
    taskService.create(rawTaskData)
    form.reset()
  }
  delete(id){
    taskService.delete(id)
  }
}
