
let input = document.querySelector("input")
let result = document.querySelector(".result")
let h2 = document.querySelector("h2")
let h3 = document.querySelector("h3")



    let handleButton =()=>{
        result.innerHTML = ''
        if(!input.value){
            h3.style = "display:block"
        h3.innerHTML = 'Please insert a value'
        }else{
            for(let i = 1 ; i<11 ; i++){
                result.innerHTML += input.value + 'x' + i + '=' + i*input.value + '<br>'
            }
            input.value=''
        }
        

    }

    