// get the li and div input elements
var btn    = document.querySelectorAll(".key li"),
  input    = document.querySelector(".input-value"),
  operator = document.querySelectorAll(".operator");

// I loop through the array to use all the information
for(var i = 0; i < btn.length; i++){
    document.onkeypress = function(event){
        var key = event.charCode;
        for(var e = 0; e <= 10; e++){
            if(key == (48+e)){
                input.innerHTML +=e;
            }
        }
        switch(key){
            case 42:
                input.innerHTML += "*";
                break;
            case 43:
                input.innerHTML += "+";
                break;
            case 45:
                input.innerHTML += "-";
                break;
            case 46:
                input.innerHTML += ".";
                break;
            case 47:
                input.innerHTML += "/";
                break;
            case 13:
            case 61:
                var equation = input.innerHTML;
                if(equation){
                    try{
                        input.innerHTML = eval(equation);
                    } catch (e){
                        alert('Error in expression');
                    }
                }
                break;
            case 67:
            case 99:
                input.innerHTML = "";
                break;
        }
    };
    btn[i].addEventListener('click', function(){
        var btnVal = this.innerHTML,
        inputVal = input.innerHTML;

        switch (btnVal){
            case "c":
                input.innerHTML = "";
                break;
            case "=":
                var equation = inputVal;
                
                if(equation){
                    try {
                        input.innerHTML = eval(equation);
                    } catch (e){
                        alert('Error in expression');
                    }
                }
                break;
            default:
                input.innerHTML += btnVal;
                break;
        }
    });
}