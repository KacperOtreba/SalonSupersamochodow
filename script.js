samochody = [ 
    {
        "marka": "McLaren",
        "model": "765LT Spider",
        "konieMech": "765 KM",
        "cena": 2000000,
        "img": "img/765LT.png"
    },
    {
        "marka": "Ferrari",
        "model": "SF90 Stradale",
        "konieMech": "780 KM",
        "cena": 2200000,
        "img": "img/stradale.png"
    },
    {
        "marka": "Koenigsegg",
        "model": "Gemera",
        "konieMech": "1724 KM",
        "cena": 6400000,
        "img": "img/gemera.png"
    },
    {
        "marka": "Aston Martin",
        "model": "DBX",
        "konieMech": "550 KM",
        "cena": 1300000,
        "img": "img/dbx.png"
    },
    {
        "marka": "Bugatti",
        "model": "W16 Mistral",
        "konieMech": "1600 KM",
        "cena": 24000000,
        "img": "img/mistral.png"
    },
    {
        "marka": "Ferrari",
        "model": "Portofino M",
        "konieMech": "620 KM",
        "cena": 1400000,
        "img": "img/portofino.png"
    },
    {
        "marka": "Aston Martin",
        "model": "Vantage",
        "konieMech": "426 KM",
        "cena": 600000,
        "img": "img/vantage.png"
    },
    {
        "marka": "Lamborghini",
        "model": "Huracan STO",
        "konieMech": "640 KM",
        "cena": 1100000,
        "img": "img/sto.png"
    },
    {
        "marka": "Lamborghini",
        "model": "Urus Performante",
        "konieMech": "666 KM",
        "cena": 2000000,
        "img": "img/urus.png"
    },
    {
        "marka": "Koenigsegg",
        "model": "Jesko",
        "konieMech": "1600 KM",
        "cena": 12800000,
        "img": "img/jesko.png"
    },
    {
        "marka": "McLaren",
        "model": "Senna",
        "konieMech": "800 KM",
        "cena": 4300000,
        "img": "img/senna.png"
    },
    {
        "marka": "Bugatti",
        "model": "Chiron Pur Sport",
        "konieMech": "1500 KM",
        "cena": 13500000,
        "img": "img/chiron.png"
    }
]


function Wybor(){
    var select = document.getElementById("cars");
    var value = select.value;

    switch (value){
        case "all":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++) divs[i].style.display = "block";
            break

        case "koenigsegg":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("koenigsegg")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "bugatti":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("bugatti")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "lamborghini":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("lamborghini")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "mclaren":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("mclaren")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "astonmartin":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("astonmartin")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "ferrari":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("ferrari")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break
        }
}

function WczytajDane(index){
    sessionStorage.setItem("marka", samochody[index].marka);
    sessionStorage.setItem("model", samochody[index].model);
    sessionStorage.setItem("konieMech", samochody[index].konieMech);
    sessionStorage.setItem("cena", samochody[index].cena);
    sessionStorage.setItem("img", samochody[index].img);
    location.href = "platnosc.html";
}

function OdczytajDane(){
    var marka = sessionStorage.getItem("marka");
    var model = sessionStorage.getItem("model");
    var konieMech = sessionStorage.getItem("konieMech");
    var cena = sessionStorage.getItem("cena");
    var img = sessionStorage.getItem("img");
    
    document.getElementById("marka").innerHTML = "Marka: ".concat(marka);
    document.getElementById("model").innerHTML = "Model: ".concat(model);
    document.getElementById("konieMech").innerHTML = "Moc silnika: ".concat(konieMech);
    document.getElementById("cena").innerHTML = "Cena: ".concat(cena).concat(" PLN");
    document.getElementById("img").src = img;
}

function Wroc(){location.href = "index.html";}

function Potwierdz(){

    var FPlatnosci = document.querySelector('input[name = "formaPlatnosci"]:checked');
    var dane = document.getElementsByName("dane");
    var breaker = false;
    var check = undefined;

    if (FPlatnosci == null){
        breaker = true;
        check = 0;
    }
    
    for (var i = 0; i < dane.length; i++){
        if (dane[i].value == null || dane[i].value == "" && check == undefined) {
            breaker = true;
            check = 1;
        }
    }

    var cenaDodatkow = 0;
    var dodatki = document.getElementsByName("dodatki");
    for(var i = 0; i < dodatki.length; i++){
        if (dodatki[i].checked) cenaDodatkow += parseInt(dodatki[i].value);
    }
    sessionStorage.setItem("cenaDodatkow", cenaDodatkow);
    if (breaker) {
        if (check == 0) {
            alert("Proszę wybrać formę płatności!");
        }
        else if (check == 1) {
            alert("Proszę wypełnić dane osobowe!");
        }
        else if (check == undefined) {
            alert("Nie wiem jak ci się to udało");
        }
    } 
    else {
        location.href = "potwierdzeniezakupu.html";
    }
}

function Zakup(){
    var marka = sessionStorage.getItem("marka");
    var model = sessionStorage.getItem("model");
    var img = sessionStorage.getItem("img");
    var sumaCen = sessionStorage.getItem("cena");
    var cenaDodatkow = sessionStorage.getItem("cenaDodatkow");
    sumaCen = parseInt(sumaCen) + parseInt(cenaDodatkow)

    var date = new Date();
    var dzien = date.getDate();
    var miesiac = date.getMonth() + 1;
    var rok = date.getFullYear();
    
    dzien += 7 + Math.floor(Math.random() * 7);
    if (dzien >= 31){
        dzien %= 31;
        miesiac += 1;
        if (dzien == 0) dzien += 1;
    }
    
    var wiadomosc = "Dziękujemy za zakup samochodu ".concat(marka).concat(" ").concat(model);
    var czasOczekiwania = "Przewidywany czas odbioru: ".concat(dzien).concat(".").concat(miesiac).concat(".").concat(rok);
    var zaplata = "Końcowa cena: ".concat(sumaCen).concat(" PLN");
    document.getElementById("wiadomosc").innerHTML = wiadomosc;
    document.getElementById("dostawa").innerHTML = czasOczekiwania;
    document.getElementById("zaplata").innerHTML = zaplata;
    document.getElementById("img").src = img;
}

function FPlatnosci(){
    if(document.getElementById("naRaty").checked){
        document.getElementById("raty").style.display = "initial";
        document.getElementById("ratyLabel").style.display="initial";
    }
    else{
        document.getElementById("raty").style.display = "none";
        document.getElementById("ratyLabel").style.display = "none";
    }
}