var home = document.getElementById("home")
var serv = document.getElementById("services")
var products = document.getElementById("products")

var btnhome = document.getElementById("btnhome")
var btnserv = document.getElementById("btnserv")
var btnprod = document.getElementById("btnprod")

var homeclick = ()=> {
    home.style.opacity= "1"
    home.style.translate= "0"
    serv.style.opacity= "0"
    products.style.opacity= "0"
    setTimeout(() => {
        if(serv.style.opacity == "0") serv.style.translate= "100%"
        if(products.style.opacity == "0") products.style.translate= "100%"
    }, 1000);

    btnhome.style.color= "orange"
    btnserv.style.color= "black"
    btnprod.style.color= "black"
}
var servclick = ()=> {
    serv.style.opacity= "1"
    serv.style.translate= "0"
    home.style.opacity= "0"
    products.style.opacity= "0"
    setTimeout(() => {
        if(home.style.opacity == "0") home.style.translate= "100%"
        if(products.style.opacity == "0") products.style.translate= "100%"
    }, 1000);

    btnhome.style.color= "black"
    btnserv.style.color= "orange"
    btnprod.style.color= "black"
}
var productsclick = ()=> {
    products.style.opacity= "1"
    products.style.translate= "0"
    home.style.opacity= "0"
    serv.style.opacity= "0"
    setTimeout(() => {
        if(serv.style.opacity == "0") serv.style.translate= "100%"
        if(home.style.opacity == "0") home.style.translate= "100%"
    }, 1000);

    btnhome.style.color= "black"
    btnserv.style.color= "black"
    btnprod.style.color= "orange"
}
