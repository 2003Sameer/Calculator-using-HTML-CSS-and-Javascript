
let input = document.querySelector(".ip-box");

let button = document.querySelectorAll('button');

let string = ""; /*empty string for storing result */

let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener("click",(e) => {
        if(e.target.innerHTML == "=") {
            string = eval(string);     /*input function "eval()" return everything by evaluating it mathematically */
            input.value = string;
        }

        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    });
});