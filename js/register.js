var registracija = document.getElementById('submitRegistration');
registracija.addEventListener('submit', function(e) {
  e.preventDefault();


  var ime = document.getElementById('name1').value.trim();
  var prezime = document.getElementById('lastName1').value.trim();
  var email = document.getElementById('email1').value.trim();
  var password = document.getElementById('password1').value.trim();
  var username = document.getElementById('username1').value.trim();
  var telefon = document.getElementById('telephone1').value.trim();
  var datumRodjenja = document.getElementById('date1').value.trim();
  var adresa = document.getElementById('address1').value.trim();
  var letters = /^[A-Za-z]+$/;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var phone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;


  if (email == '' || password == '' || username == '') {
    alert("Please enter the correct information");
  } else if (ime == '') {
    alert('Please enter the correct information');
  } else if (!letters.test(ime)) {
    alert('Please enter the correct information');
  } else if (prezime == '') {
    alert('Please enter the correct information');
  } else if (!letters.test(prezime)) {
    alert('Please enter the correct information');
  } else if (datumRodjenja == '') {
    alert('Please enter the correct information');
  } else if (telefon == '') {
    alert('Please enter the correct information');
  } else if (!phone.test(telefon)) {
    alert('Please enter the correct information');
  } else if (email == '') {
    alert('Please enter the correct information');
  } else if (!filter.test(email)) {
    alert('Invalid email');
  } else if (adresa == '') {
    alert('Please enter the correct information');
  } else {
    request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          var korisnici = JSON.parse(request.responseText);
          var ime = '';
          for (var id in korisnici) {
            var korisnik = korisnici[id];
            if (korisnik.email == email || korisnik.password == password || korisnik.username == username) {
              ime = korisnik.ime;
              alert("Izaberite sifru koja ne postoji ");
            } else {
              // window.alert('Uspesno ste obavili registraciju');
              window.location.replace('index.html');
            }

          }
        } else {
          alert("greska" + this.status);
        }
      }
    }
    var url1 = registracija.getAttribute('action');
    request.open('GET', url1);
    request.send();
  }
});

function toggleLogin() {
  document.querySelector(".overlay").classList.toggle("open");
}
