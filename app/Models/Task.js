import { generateId } from "../Utils/GenerateId.js";

export default class Task {
  constructor(data) {
    this.title = data.title || "Task"
    this.listId = data.listId;
    this.id = data.id || generateId();
    
  }

  get Template(){
    return /*html*/`
    <div class="col-12 border">
      <h3>${this.title} 
        <button class="text-danger close mt-1 float-right" onclick="app.taskController.delete('${this.id}')">
          <span>&times;</span>
        </button>
      </h3>
    </div>
    `
  }

}
