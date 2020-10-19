import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title || 'To-Do List';
    this.priority = data.priority;
    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template(){
    return /*html*/ `
    <div class="col-12 col-sm-4">
      <div class="card border shadow-lg">
        <div class="card-header bg-gray">
          <h3>${this.title}
          <button class="text-danger mt-1 close float-right" onclick="app.listController.delete('${this.id}')">
          <span>&times;</span>
        </button>
        </h3>
        </div>
        <div class="card-body">
          <form onsubmit="app.taskController.create(event, '${this.id}')">
              <div class="form-group">
                  <div class="d-flex justify-content-between">
                      <input type="text" id = "tasks" name="taskTitle" class="form-control" placeholder="Enter task here...">
                      <button type="submit" name="" id="" class="btn btn-dark">Add</button> 
                  </div>
              </div>
          </form>
          <div class="row">
              ${this.Tasks}
          </div>
        </div>
      </div>
  </div>
    `
  }

  get Tasks(){
    let template = ""
    let tasks = ProxyState.tasks.filter(t=>t.listId == this.id)
    tasks.forEach(t=> template += t.Template)
    return template
  }
}

