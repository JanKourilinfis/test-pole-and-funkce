var pole="1,2,5,1,1,4,3,5,1,4"
var znamky=pole.split(",")
var pocetJedna=0

var funkce=prompt("jakou funkci chcete provést?")

function vypisZnamek(znamky){
    for(var i=0; i<znamky.length;i++){
    console.log(znamky[i])
    }
}
 function spocitejPrumer(znamky){
    alert(Math.floor(znamky/10))
    return znamky
}
function pocetJednicek(znamky){
    for(var i=0; i<znamky.length;i++){
        alert(znamky.indexOf("1"))
    }
}


if(funkce==("vypis")){
vypisZnamek(znamky)
}

else if(funkce=="průměr"){
spocitejPrumer(znamky)
}

else if(funkce=="jedničky"){
pocetJednicek(znamky)
}