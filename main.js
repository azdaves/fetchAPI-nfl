document.getElementById("getData").addEventListener("click", getData);
document.getElementById("getDui").addEventListener("click", getDui);

function getData() {
  fetch("http://nflarrest.com/api/v1/crime")
    .then(res => res.json())
    .then(data => {
      let output = "<h2>NFL Crimes</h2>";
      data.forEach(function(crime) {
        output += `
        <ul>
        <li>Category: ${crime.Category} </li>
        <li>Number Arrested: ${crime.arrest_count} </li>
        </ul>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function getDui() {
  fetch("http://nflarrest.com/api/v1/crime/topPlayers/DUI")
    .then(res => res.json())
    .then(data => {
      let output2 = "<h2>DUI List</h2>";
      data.forEach(function(DUI) {
        output2 += `
        <ul>
        <li>Name: ${DUI.Name} </li>
        <li>Number of Arrests: ${DUI.arrest_count} </li>
        </ul>
        `;
      });
      document.getElementById("output2").innerHTML = output2;
    });
}

