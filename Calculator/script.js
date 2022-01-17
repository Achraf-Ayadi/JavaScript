let resultarea = document.getElementById("resultarea");
let buttonsarea = document.getElementById("buttonsarea");

let zahl1= 0;
let zahl2=null;
let aktuellezahl = 1;
let operator = " ";

CreateCalculator();

function CreateCalculator(){

    Createbutton(7);
    Createbutton(8);
    Createbutton(9);
    Createbutton("+");

    Createbutton(4);
    Createbutton(5);
    Createbutton(6);
    Createbutton("-");

    Createbutton(1);
    Createbutton(2);
    Createbutton(3);
    Createbutton("*");

    Createbutton(0);
    Createbutton("C");
    Createbutton("=");
    Createbutton("/");


}

function Createbutton(zahl){

    let btn = document.createElement("button");
    btn.value= zahl;
    let t = document.createTextNode(zahl);
    btn.appendChild(t);
    buttonsarea.appendChild(btn);

    btn.addEventListener("click", function (){


        if(this.value  =="/" ||
            this.value =="*" ||
            this.value =="+" ||
            this.value =="-"  ){
                operator = this.value;
                aktuellezahl= 2;
                zeigen();
                return;
            }
    
        if(this.value =="="){
    
    
            rechnen();
            zeigen();
            return;
            
        }
    
        if(this.value=="C"){
            aktuellezahl=1;
            zahl1=0;
            zahl2=null;
            operator="";
            zeigen();
            return;
    
    
        }
        if(aktuellezahl ==1){
            zahl1= (zahl1*10)+(this.value*1);
    
        }
        if(aktuellezahl ==2){
            zahl2= (zahl2*10)+(this.value*1);
    
        }
        zeigen();
    
    })


}
function zeigen(){
    if (zahl1 == null){
        resultarea.innerHTML = "&nbsp"; }
        else{
            resultarea.innerHTML = zahl1 + "" + operator ;
        }
    if (zahl2 != null){

        resultarea.innerHTML += zahl2;
    }
}

function rechnen(){

    switch(operator){
        case "+":
            zahl1 = zahl1 + zahl2;
        break
        case "-":
            zahl1 = zahl1 - zahl2;
        break
        case "*":
            zahl1 = zahl1 * zahl2;
        break
        case "/":
            zahl1 = zahl1 / zahl2;
        break
    }
    zahl2 = null;
    operator ="";
    aktuellezahl = 1;

}

