let PASSWORD = "071120061";

function login() {
  let input = document.getElementById("pass").value;

  if (input === PASSWORD) {
    document.getElementById("panel").style.display = "block";
  } else {
    alert("Wrong password");
  }
}

function save() {
  let data = {
    name: document.getElementById("name").value,
    place: document.getElementById("place").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value
  };

  localStorage.setItem("activity", JSON.stringify(data));
  alert("Saved. Refresh main page.");
}