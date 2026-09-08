let data = JSON.parse(localStorage.getItem("activity"));

if (!data) {
  data = {
    name: "Walk and Talk Session",
    place: "Pune University Rd, Ganeshkhind, Pune",
    date: "18/07/2026",
    time: "4:00 PM"
  };
}

document.getElementById("name").innerText = "Activity: " + data.name;
document.getElementById("place").innerText = "Place: " + data.place;
document.getElementById("date").innerText = "Date: " + data.date;
document.getElementById("time").innerText = "Time: " + data.time;