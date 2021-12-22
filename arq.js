const buttons = document.querySelectorAll(".button");
const keypad = document.querySelector(".buttons");

const screen = document.querySelector(".screen");

const wrapper1 = document.querySelector(".wrapper");

const clickers = document.getElementsByName("theme");
const reseter = document.querySelector('.re');
const deleter = document.querySelector('.del');
const equaler = document.querySelector('.eq');
const body = document.body;
const cop = document.querySelector('.top');







clickers.forEach((e) => {

    e.addEventListener("click", () => {


        e.checked = true;

        if(e.value == "1"){


            screen.style.backgroundColor = 'hsl(224, 36%, 15%)';
            screen.style.borderColor = 'hsl(224, 36%, 15%)';
            screen.style.color = "white";
            buttons.forEach((e) => {e.style.color = 'hsl(221, 14%, 31%)';
               e.style.backgroundColor = 'hsl(30, 25%, 89%)';
               e.style.boxShadow = '0px 4px hsl(28, 16%, 65%)';
        
        })
        cop.style.color = 'hsl(0, 0%, 100%)';
        reseter.style.backgroundColor = 'hsl(225, 21%, 49%)';
        reseter.style.color = 'white';
        reseter.style.boxShadow = '0px 4px  hsl(224, 28%, 35%)';
        deleter.style.backgroundColor = 'hsl(225, 21%, 49%)';
        deleter.style.color = 'white';
        deleter.style.boxShadow = '0px 4px hsl(224, 28%, 35%)';
        equaler.style.backgroundColor = 'hsl(6, 63%, 50%)';
        equaler.style.color = 'white';
        equaler.style.boxShadow = '0px 4px hsl(6, 70%, 34%)';
        keypad.style.backgroundColor = 'hsl(223, 31%, 20%)';
        body.style.backgroundColor = 'hsl(222, 26%, 31%)';
        //radio.style.backgroundColor = 'hsl(223, 31%, 20%)';



            
        }
        else if(e.value == "2"){


            screen.style.backgroundColor = "hsl(0, 0%, 93%)";
            screen.style.borderColor = 'hsl(0, 0%, 93%)';
            screen.style.color = "black";
            buttons.forEach((e) => {e.style.color = 'hsl(60, 10%, 19%)';
               e.style.backgroundColor = 'hsl(30, 25%, 89%)';
               e.style.boxShadow = '0px 4px hsl(28, 16%, 65%)';
        
        })
        cop.style.color = 'hsl(60, 10%, 19%)';
        reseter.style.backgroundColor = 'hsl(225, 21%, 49%)';
        reseter.style.color = 'white';
        reseter.style.boxShadow = '0px 4px  hsl(224, 28%, 35%)';
        deleter.style.backgroundColor = 'hsl(225, 21%, 49%)';
        deleter.style.color = 'white';
        deleter.style.boxShadow = '0px 4px hsl(224, 28%, 35%)';
        equaler.style.backgroundColor = 'hsl(6, 63%, 50%)';
        equaler.style.color = 'white';
        equaler.style.boxShadow = '0px 4px hsl(6, 70%, 34%)';
        keypad.style.backgroundColor = 'hsl(0, 5%, 81%)';
        body.style.backgroundColor = 'hsl(0, 0%, 90%)';
        clickers.forEach((e) => {

            e.style.backgroundColor = 'hsl(0, 5%, 81%)';
            e.style.borderColor = 'hsl(0, 5%, 81%)';
            //e.children.style.backgroundColor = 'hsl(6, 63%, 50%)';
        })
        }

        else if(e.value == "3"){


            screen.style.backgroundColor = 'hsl(268, 71%, 12%)';
            screen.style.borderColor = 'hsl(268, 71%, 12%)';
            screen.style.color = 'hsl(52, 100%, 62%)';
            buttons.forEach((e) => {e.style.color = 'hsl(52, 100%, 62%)';
               e.style.backgroundColor = 'hsl(268, 47%, 21%)';
               e.style.boxShadow = '0px 4px hsl(290, 70%, 36%)';
        
        })


        cop.style.color = 'hsl(52, 100%, 62%)';
        reseter.style.backgroundColor = 'hsl(281, 89%, 26%)';
        reseter.style.color = 'white';
        reseter.style.boxShadow = '0px 4px hsl(285, 91%, 52%)';
        deleter.style.backgroundColor = 'hsl(281, 89%, 26%)';
        deleter.style.color = 'white';
        deleter.style.boxShadow = '0px 4px hsl(285, 91%, 52%)';
        equaler.style.backgroundColor = 'hsl(176, 100%, 44%)';
        equaler.style.color = 'black';
        equaler.style.boxShadow = '0px 4px hsl(177, 92%, 70%)';
        keypad.style.backgroundColor = 'hsl(268, 71%, 12%)';
        body.style.backgroundColor = 'hsl(268, 75%, 9%)';
        clickers.forEach((e) => {

            e.style.backgroundColor = 'hsl(268, 71%, 12%)';
            e.style.borderColor = 'hsl(268, 71%, 12%)';
            //e.children.style.backgroundColor = 'hsl(6, 63%, 50%)';
        })
        }

        

    })


})








let vala;
buttons.forEach((e) => e.addEventListener("click", () => {
    
    if(e.textContent == 'DEL'){

        if(screen.value != ""){
          let val = screen.value;

          let newVal = val.slice(0, val.length - 1);

          screen.value = newVal;

        }

        
    }

    else if(e.textContent == "RESET"){

        if(screen.value != ""){

            screen.value = "";

        }
    }

    else if(e.textContent == "+"){

        vala = screen.value;
        vala += "+";
        screen.value = "";
        
    }

    else if(e.textContent == "-"){

        vala = screen.value;
        vala += "-";
        screen.value = "";
    }
    else if(e.textContent == "/"){

        vala = screen.value;
        vala += "/";
        screen.value = "";
    }

    else if(e.textContent == "x"){

        vala = screen.value;
        vala += "x";
        screen.value = "";
    }

    


    else if(e.textContent == "="){

        if(vala.includes("+")){

            let firstOperand = vala.substring(0, vala.indexOf("+"));
            let secondOperand = screen.value;

            
            let temp = parseFloat(firstOperand) + parseFloat(secondOperand);

            //temp = temp.toFixed(3);

            screen.value = temp.toString();

            



        }

        else if(vala.includes("-")){

            let firstOperand = vala.substring(0, vala.indexOf("-"));
            let secondOperand = screen.value;

            
            let temp = parseFloat(firstOperand) - parseFloat(secondOperand);

            
           // temp = temp.toFixed(3);
            screen.value = temp.toString();

            



        }

        else if(vala.includes("/")){

            let firstOperand = vala.substring(0, vala.indexOf("/"));
            let secondOperand = screen.value;

            
            let temp = parseFloat(firstOperand) / parseFloat(secondOperand);

            
            temp = temp.toFixed(3);
            screen.value = temp.toString();

            



        }

        else if(vala.includes("x")){

            let firstOperand = vala.substring(0, vala.indexOf("x"));
            let secondOperand = screen.value;

            
            let temp = parseFloat(firstOperand) * parseFloat(secondOperand);

            //temp = temp.toFixed(3);

            screen.value = temp.toString();

            



        }

       

        

        

    }

    else{

        screen.value += e.textContent;

    }
    
    

    

}))

