const contenedor = document.getElementById("container-requests");

document.addEventListener("DOMContentLoaded", () => {
  addRequests();
});

function addRequests() {
  fetch("http://127.0.0.1:5500/db/db.json")
    .then((info) => {
      console.log(info);
    })
    .then((data) => {
      return data.txt
    });
}
