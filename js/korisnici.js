var firebaseUrl2 = 'https://wd-bookstore-default-rtdb.firebaseio.com/korisnici.json';

var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == 4) {
    if (this.status == 200) {
      var korisnici = JSON.parse(request.responseText)

      //  console.log(korisnici);

      var tbody = document.getElementById('allName');

      for (let id in korisnici) {
        var korisnik = korisnici[id];
        //  console.log(korisnik)

        var tr = document.createElement('tr');
        tr.id = "id";


        var ime = document.createElement("ime");
        ime.innerText = korisnik['ime'];

        var prezime = document.createElement("prezime");
        prezime.innerText = korisnik['prezime'];

        var adresa = document.createElement("adresa");
        adresa.innerText = korisnik['adresa'];

        var telefon = document.createElement("telefon");
        telefon.innerText = korisnik['telefon'];

        var email = document.createElement("email");
        email.innerText = korisnik['email'];


        var a = document.createElement('a');
        a.innerText = "Edit";
        a.classList.add("edit");

        a.addEventListener('click', function() {
          window.location = "edit.html";
        });

        tr.appendChild(document.createElement("td")).append(ime);
        tr.appendChild(document.createElement("td")).append(prezime);
        tr.appendChild(document.createElement("td")).append(adresa);
        tr.appendChild(document.createElement("td")).append(telefon);
        tr.appendChild(document.createElement("td")).append(email);
        tr.appendChild(document.createElement("td")).append(a);
        tbody.appendChild(tr);

      }

    }
  }
};

request.open('GET', firebaseUrl2);
request.send();

function toggleLogin() {
  document.querySelector(".overlay").classList.toggle("open");
}
