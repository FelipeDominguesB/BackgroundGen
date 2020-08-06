var $inputcor = document.querySelector(".color1");
var $inputcor2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");


$inputcor.addEventListener('input', MudarCorPrimaria, false);
$inputcor2.addEventListener('input', MudarCorPrimaria, false);

function MudarCorPrimaria()
{
    body.style.background = "linear-gradient(to right, " + $inputcor.value + ", " + $inputcor2.value + ")";
    console.log(this.value);
}

