var submitForm = document.getElementById('submitForm');
submitForm.addEventListener('submit', function(e) {
  e.preventDefault();

  var email = document.getElementById('txtEmail').value.trim();
  var password = document.getElementById('txtPassword').value.trim();
  //console.log(email);
  //console.log(password);

  if (email == '' || password == '') {
    alert("Please enter the correct information");
  } else {
    request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          var korisnici = JSON.parse(request.responseText);

          var ime = '';
          for (var id in korisnici) {
            var korisnik = korisnici[id];
            if (korisnik.email == email && korisnik.password == password) {
              ime = korisnik.ime;
              break;
            }
          }

          if (ime == '') {
            alert("Please enter the correct information");
          } else {
            window.location.replace("index.html");
          }


        } else {
          alert("Error: " + this.status);
        }
      }
    };

    var url = submitForm.getAttribute('action');
    request.open('GET', url);
    request.send();
  }

});


function toggleLogin() {
  document.querySelector(".overlay").classList.toggle("open");
}
