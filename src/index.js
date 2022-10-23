document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector("form");
  let tasks = document.querySelector("#tasks");
  let item = document.querySelector("input[type=text]")



  function test(event) {

    event.preventDefault()

    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.addEventListener('click', deleteItem);
    btn.textContent = "x";
    li.textContent = item.value;
    li.appendChild(btn);
    tasks.appendChild(li);

    form.reset();
  }

  form.addEventListener('submit', test)

  function deleteItem(e) {

    e.target.parentNode.remove();
  }

});
