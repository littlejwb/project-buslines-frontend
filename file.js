var mainListDiv = document.getElementById("header"),
mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function(){
  "use strict";
  mainListDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");
};

function getData() {
  var saida = document.getElementById("departure").value;
  var pontoFinal = document.getElementById("endpoint").value;
  var url = "http://localhost:8080/lines/" + saida + "/" + pontoFinal;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      var tableBody = document.getElementById("table-body");
      tableBody.innerHTML = "";

      var tableHead = document.getElementById("table-head");
      tableHead.innerHTML = "";

      tableHead.insertAdjacentHTML('afterbegin', `
      <tr>
        <th colspan="2">${saida} - ${pontoFinal}</th>
      </tr>
      `);

      data.forEach(bus_line => {
        tableBody.insertAdjacentHTML("beforeend", `
        <tr>
          <td>${bus_line.time}</td>
          <td>${bus_line.obs}</td>
        </tr>
        `);
      });
      document.getElementById('tabela').classList.remove('hidden');
      })
}