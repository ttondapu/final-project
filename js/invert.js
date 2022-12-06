var bit = true

document.querySelector("#invert").addEventListener("click", function() {
    if (bit) {
        // var divs = Array.from(document.querySelectorAll("*:not(.square)"));
        // for (var i = 0; i < divs.length; i++){
        //     console.log(divs[i]);
        //     divs[i].style.filter="invert(100%)";
        document.getElementById("body").style.background = "radial-gradient(farthest-corner at bottom right,#FFFFFF,#808080)";
        document.querySelector("header").style.filter= "invert(100%)";
        document.querySelector("footer").style.filter= "invert(100%)";
        document.querySelector("body").style.color = "black";
        var divs = document.querySelectorAll("img")
        for (var i = 0; i < divs.length; i++){
            divs[i].style.border = "2px solid black";
        }


        bit = false;
        document.getElementById("invert").innerHTML = "Dark Mode"
    }

    else {
        bit = true;
        document.getElementById("invert").innerHTML = "Light Mode"
        location.reload();
    }
});

