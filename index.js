let inputTask = document.getElementById("input-task");
//let listItems = document.getElementById("list-items");
let listItemAdded = document.getElementById("list-items-added");
let clearItem = document.getElementById("clear-button");

inputTask.addEventListener("change", (e) => {
  let task = e.target.value;
  addNewItem(e.target, task);
});

function addNewItem(target, task) {
  console.log("added", task);
  let listItem = document.createElement("li");
  listItem.className = "notDone";
  listItem.innerHTML = `${task}`;
  listItemAdded.append(listItem);
  target.value = "";
}

listItemAdded.addEventListener("click", (e) => {
  //e.preventDefault();
  let task = e.target;
  if (task.value == 0) toggle(task);
});

function toggle(task) {
  if (task.className == "notDone") task.className = "markDone";
  else task.className = "notDone";
  console.log(task, "after toggle");
}

clearItem.addEventListener("click", (e) => {
  listItemAdded.innerHTML = ``;
});
