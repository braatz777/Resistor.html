let op = Number(document.getElementById("1 or 2"))
if(op == 1){
    window.location.href = "CalculoDeCores.html"
}
if(op == 2){
    window.location.href = "DivisãoDeTensão.html"
}
else{
    alert("Informe a Operação!")
}
function calcular(){
    let vin = Number(document.getElementById("Vin").value)
    let vout = Number(document.getElementById("Vout").value)
    let R1 = Number(document.getElementById("R1").value)
    let R2 = Number(document.getElementById("R2").value)
    let res
    if(vin == ""){
        res = "Vin = " +vout * ((R1 + R2) / R2)
    }
    if(vout == ""){
        res = "Vout = " + vin * (R2 / (R1 + R2))
    }
    if(R1 == ""){
        res = "R1 = " + R2 * ((vin / vout) - 1)
    }
    if(R2 == ""){
        res = "R2 = " + R1 / ((vin / vout) - 1)
    }
    document.getElementById("res").innerHTML = "Resultado: " + res
}
function cores(){

}