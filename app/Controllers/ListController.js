import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js";

function _drawLists() { 
  let lists = ProxyState.lists;
  let template = ""
  lists.forEach(l=> template += l.Template);
  document.getElementById("lists").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    ProxyState.on("lists", _drawLists)
    ProxyState.on("tasks", _drawLists)
    _drawLists();
  }

  create(e){
    e.preventDefault()
    let form = e.target
    let rawListData = {
      title: form.listTitle.value,
    }
    listService.create(rawListData)
    form.reset();
  }
  delete(id){
    listService.delete(id)
  }
}
