import _ from 'lodash';

document.getElementById("btn1").addEventListener("click", function() {
    const el = document.getElementById("header");
    el.innerHTML = "Hello from JS!"

    const listItems = ["test1", "test2", "test3"];
    const ul = document.getElementById("list");

    _.forEach(listItems, (item) => {
        const li = document.createElement("li");
        li.innerHTML = item;
        ul.appendChild(li);
    })
});
