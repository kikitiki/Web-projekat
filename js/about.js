var firebaseUrl3 = "https://wd-bookstore-default-rtdb.firebaseio.com/knjige/" + window.location.search.split("=")[1] + ".json";


var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == 4) {
    if (this.status == 200) {
      var knjiga = JSON.parse(request.responseText);

      var div = document.createElement("div");
      div.classList.add('right');

      var slika = document.createElement("img");
      slika.src = knjiga["slika"];
      slika.classList.add('description');

      var opis = document.createElement("p");
      opis.innerHTML = "<strong>Descrption:</strong>" + knjiga['opis'];

      var autor = document.createElement('p');
      autor.innerHTML = "<strong>Author is:</strong>" + knjiga['autor'];

      var naziv = document.createElement('p');
      naziv.innerHTML = "<strong>Name of the book is:</strong>" + knjiga['naziv'];

      var brojStranica = document.createElement('p');
      brojStranica.innerHTML = "<strong>The number of the page is:</strong>" + knjiga['brojStranica'];

      var cena = document.createElement('p');
      cena.innerHTML = "<strong>The price is:</strong>" + knjiga['cena'];

      var jezik = document.createElement('p');
      jezik.innerHTML = "<strong>Language of the book is:</strong>" + knjiga['jezik'];

      var ISBN = document.createElement('p');
      ISBN.innerHTML = "<strong>The ISBN number is:</strong>" + knjiga['isbn'];

      var izdavackaKuca = document.createElement('p');
      izdavackaKuca.innerHTML = "<strong>Publishing House:</strong>" + knjiga['izdavackaKuca'];

      var godinaIzdavanja = document.createElement('p');
      godinaIzdavanja.innerHTML = "<strong>Year of publishing: </strong>" + knjiga['godinaIzdavanja'];

      var pismo = document.createElement('p');
      pismo.innerHTML = "<strong>Letter is: " + knjiga['pismo'];

      var povez = document.createElement('p');
      povez.innerHTML = "<strong>Connection type:</strong>" + knjiga['tipPoveza'];

      divProba = document.getElementById("zaSliku");
      divProba.classList.add("content");

      var change = document.createElement("button");
      change.innerHTML = "Change information about book";
      change.classList.add("editButton");

      change.addEventListener('click', function(e) {
        window.location = "editBooks.html";
      });

      divProba.appendChild(slika);
      divProba.appendChild(div);
      div.appendChild(autor);
      div.appendChild(naziv);
      div.appendChild(brojStranica);
      div.appendChild(cena);
      div.appendChild(jezik);
      div.appendChild(ISBN);
      div.appendChild(izdavackaKuca);
      div.appendChild(godinaIzdavanja);
      div.appendChild(pismo);
      div.appendChild(povez);
      div.appendChild(opis);
      div.appendChild(change);
    }
  }
}

request.open('GET', firebaseUrl3, true);
request.send();
