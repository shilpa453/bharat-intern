let Celsius=document.getElementById('Celsius');
let Fahrenheit=document.getElementById('Fahrenheit');

function cf(){
    let output=(parseFloat(Celsius.value) * 9/5 ) + 32;
    Fahrenheit.value=parseFloat(output.toFixed(2));
}
function fc(){
    let output=(parseFloat(Fahrenheit.value) - 32 ) * 5/9;
    Celsius.value=parseFloat(output.toFixed(2));
}
