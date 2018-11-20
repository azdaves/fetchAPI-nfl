document.getElementById("getData").addEventListener("click", getData);

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
