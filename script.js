const form = document.getElementById("form");
const list = document.getElementById("list");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;

  const li = document.createElement("li");
  li.textContent = name + " - " + date;

  list.appendChild(li);

  form.reset();
});