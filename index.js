let answer = document.getElementById("answer")
let message = document.getElementById("message")
let number =  Math.floor(Math.random() * 101)


answer.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        if(answer.value > number){
            message.textContent = 'ur guess is higher'
        }else if(answer.value < number){
            message.textContent = 'ur guess is smaller'
        }else{
            answer.style.display = 'none'
            message.textContent = 'u won'
        }
    }
})
