
let input = document.querySelector("input")
let result = document.querySelector(".result")
let numberInput = document.querySelector("#numberInput")


let handleButton = ()=>{
    result.innerHTML = ''
    if(!input.value){
        alert('Insert a value')
    }else{
        for (let i = 1 ; i < 11 ; i++){
            
            result.innerHTML += input.value + ' x ' + i + ' = ' + input.value*i +'<br>'
        }

    }
        numberInput.value = ''


}
    