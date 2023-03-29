function apagar(){

    if (document.getElementById("historico").style.visibility == "hidden" && document.form.input.value != " "){
        document.form.input.value = " ";
    } else if (document.getElementById("historico").style.visibility == "visible" && document.form.input.value != " "){
        document.form.input.value = " ";
    } else if (document.getElementById("historico").style.visibility == "visible" && document.form.input.value == " "){
        document.getElementById("historico").style.visibility = "hidden";
    }
}

function equal(){
        
    var calculo = document.form.input.value;

    if(calculo){
        try {
            expressao = eval(calculo);
            historico = calculo;
            visibilidade = "visible";
            cor = "inherit";
    
            eval(calculo); 
    
        } catch (e) {
            if (e instanceof SyntaxError) {
                expressao = "ERRO";
                historico = " - ";
                visibilidade = "hidden";
                cor = "red";
            }
    
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