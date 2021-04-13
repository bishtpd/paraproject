function makepara(){
var inputs = [];
for(var i = 1; i<=6 ; i++)
{
    inputs.push(document.getElementById("textbox"+i).value);
}
inputs.join(". ");
document.getElementById("showpara").innerHTML = inputs.join(". ");
}
