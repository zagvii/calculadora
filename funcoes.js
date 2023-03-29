function apagar(){

    if (document.getElementById("historico").style.visibility == "hidden" && document.form.input.value != ""){
        document.form.input.value = "";
    } else if (document.getElementById("historico").style.visibility == "visible" && document.form.input.value != ""){
        document.form.input.value = "";
    } else if (document.getElementById("historico").style.visibility == "visible" && document.form.input.value == ""){
        document.getElementById("historico").value = "";
        document.getElementById("historico").style.visibility = "hidden";
    }
}

function equal(){
        
    var calculo = document.form.input.value;

    if(calculo != ''){
        try {
            expressao = eval(calculo);
            historico = calculo;
            visibilidade = "visible";
            cor = "inherit";
    
            eval(calculo); 
    
        } catch (e) {
            expressao = "ERRO";
            historico = " - ";
            visibilidade = "hidden";
            cor = "red";
    
        } finally {
            document.getElementById("historico").style.visibility = visibilidade;
            document.getElementById("historico").textContent = historico;
            document.getElementById('input').style.color = cor;
            document.form.input.value = expressao;
    
            setTimeout(myTimer, 4000);
            function myTimer() {
                document.getElementById('input').style.color = 'black';
            }
        }
    }   
}

function escuro(){
    var background = document.getElementById("background");
    var especiais = document.getElementsByName("especiais");
    
    background.style.backgroundColor = "#27182E";

    especiais.forEach(function(element) {
        element.style.backgroundColor = "#383B53";

        element.addEventListener(
            "mouseover",
            (event) => {
                event.target.style.boxShadow = "0px 0px 6px 2px rgba(0,0,0,0.5) inset";
            },
            false,
        );
        element.addEventListener(
            "mouseout", 
            (event) => {
                event.target.style.boxShadow = "0px 0px 0px inset";
            },
            false,
        );

        element.style.color = "white";
    });

    document.getElementById("moon").style.display = "none";
    document.getElementById("sun").style.display = "block";
}

function claro(){
    var background = document.getElementById("background");
    var especiais = document.getElementsByName("especiais");
    
    background.style.backgroundColor = "#D4D6B9";

    especiais.forEach(function(element) {
        element.style.backgroundColor = "#D1CAA1";
        element.style.color = "white";
    });

    document.getElementById("sun").style.display = "none";
    document.getElementById("moon").style.display = "block";
}
