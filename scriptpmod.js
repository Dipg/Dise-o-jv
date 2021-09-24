var values = [15+'s',30+'s',45+'s',60+'s',2+'m',3+'m'];    //values to step to

// var input = document.getElementById('input'),
//    output = document.getElementById('output');

// input.oninput = function(){
//     output.innerHTML = values[this.value];
// };
// input.oninput(); //set default value

const sliderValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
const output = document.getElementById('output');


inputSlider.oninput = function(){
      let value = inputSlider.value;
      sliderValue.textContent =  values[this.value];

      
        if ( values[this.value]==15+'s') {
            sliderValue.style.left = (27) + "%";   
        } 
        else if (values[this.value]==30+'s') {
            sliderValue.style.left = (36) + "%";   
        }
        else if (values[this.value]==45+'s') {
            sliderValue.style.left = (41) + "%";  
        }

        else if (values[this.value]==60+'s') {
            sliderValue.style.left = (50) + "%";  
        }


        else if (values[this.value]==2+'m') {
            sliderValue.style.left = (60) + "%";  
        }


        else if (values[this.value]==3+'m') {
            sliderValue.style.left = (66) + "%";  
        }



      sliderValue.classList.add("show");
    }


inputSlider.onblur = (()=>{
      sliderValue.classList.remove("show");
    });


