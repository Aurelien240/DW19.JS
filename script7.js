document.getElementById("SOMME_boutton").addEventListener("click", change)
function change(){

    document.getElementById("body").style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}


