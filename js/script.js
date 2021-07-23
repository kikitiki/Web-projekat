var firebaseUrl = 'https://wd-bookstore-default-rtdb.firebaseio.com/knjige.json';

var request = new XMLHttpRequest();
var value;

request.onreadystatechange = function() {
  if (this.readyState == 4) {
    if (this.status == 200) {
      var knjige = JSON.parse(request.responseText);

      // console.log(knjige);
      var main = document.getElementById('main');

      for (let id in knjige) {

        var knjiga = knjige[id];

        var dv = document.createElement('div');
        dv.classList.add('allSlika');


        var slika = document.createElement("img");
        slika.src = knjiga["slika"];

        slika.classList.add("img");
       
        var div1 = document.createElement('div');
        div1.setAttribute('id', 'style');

        var div2 = document.createElement('div');
        div2.id = id;
        div2.setAttribute('class', 'rating');
        for (var i = 1; i <= 5; i++) {
          var span = document.createElement('span');

          if (i <= knjiga['ocena']) {
              span.classList["add"]('active');
            }
            span.setAttribute('value', i);
            div2.appendChild(span);
          }


        var div3 = document.createElement('div');
        div3.setAttribute('class', 'ocene');

        var cena = document.createElement("p");
        cena.innerHTML = knjiga['cena'] + "din";
        cena.classList.add("naziv");

        var autor = document.createElement("p");
        autor.innerHTML = knjiga['autor'];
        autor.classList.add("naziv");
        autor.setAttribute('id', 'underline');



        var naziv = document.createElement("p");
        naziv.innerHTML = knjiga['naziv'];
        naziv.setAttribute("class", "naziv");
        naziv.setAttribute('id', 'naslov');


        var details = document.createElement("button");
        details.innerHTML = "Details";
        details.classList.add("button");

        var p = document.createElement('p');
        details.append(p);
        p.setAttribute('id', 'demo');


        slika.setAttribute("id", 'btn');


        slika.addEventListener('click', function(e) {
          location.href = "about.html?knjige=" + id;
        });

        var buy = document.createElement("button");
        buy.innerHTML = "Buy";
        buy.classList.add("button");
        buy.setAttribute('id', 'buy');

        buy.addEventListener('click', function() {
          window.location = "card.html";
        });



        main.appendChild(dv);
        dv.appendChild(slika);
        dv.appendChild(div1);
        div1.appendChild(autor);
        div1.appendChild(naziv);
        div1.appendChild(cena);
        // dv.appendChild(details);
        div1.appendChild(buy);
        

        div1.appendChild(div2);
       

        document.getElementById(id).addEventListener('click', function(e) {

          let action = 'add';
          for (const span of this.children) {
            span.classList[action]('active');
            if (span === e.target) action = 'remove';


          }
          console.log("Ocena je:" + e.target.getAttribute("value"));

        });

      }

    }
  }
}
request.open('GET', firebaseUrl);
request.send();

function toggleLogin() {
  document.querySelector(".overlay").classList.toggle("open");
}
