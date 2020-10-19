import { ProxyState } from "../AppState.js"
import {listService} from "../Services/ListService.js"
import { taskService } from "../Services/taskService.js";

//TODO Don't forget to render to the screen after every data change.

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
