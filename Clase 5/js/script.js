let numbers = []
document.addEventListener("DOMContentLoaded", function(){

    let mountSpan = document.getElementById("mountOfNumbers")
    let mountInput = document.getElementById("mount")
    let primeUl = document.getElementById("primeUl")
    let evenUl = document.getElementById("evenUl")
    let oddUl = document.getElementById("oddUl")

    document.getElementById("form").addEventListener("submit", function(e){

        e.preventDefault()

        mount = mountInput.value
        RandomNumbers(mount)
        mountInput.value = ""

        mountSpan.innerText = mount

        for (let i = 0; i < numbers.length; i++) {
            PrimeNumbers(numbers[i], i)
            EvenNumbers(numbers[i], i)
            OddNumbers(numbers[i], i)
        }
        document.getElementById("firstNumber").innerText = numbers[0]
        document.getElementById("lastNumber").innerText = numbers[numbers.length - 1]
        document.getElementById("sum").innerText = numbers[0] + numbers[numbers.length - 1] 
    })
})


function RandomNumbers(mount){
    numbers = []
    for (let i = 0; i < mount; i++) {
        newNumber = Math.floor(Math.random() * 100 + 1)
        numbers.push(newNumber)
    }
    ShowNumbers()
}
function ShowNumbers(){
    document.getElementById("numbers").innerHTML = ""
    for (let i = 0; i < numbers.length; i++) {
        let num = document.createElement("div")
        num.innerText = numbers[i]
        document.getElementById("numbers").appendChild(num)
    }
}
function PrimeNumbers(number, index){
    let divMount = 0
    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            divMount++
            if(divMount > 2){
                break
            }
        }
    }
    if(divMount == 2){
        primeUl.innerHTML = ""
        let li = document.createElement("li")
        li.innerText = `El numero ${number} es primo y esta en el index: ${index}`
        primeUl.appendChild(li)
    }
}
function EvenNumbers(number, index){
    if(number % 2 == 0){
        evenUl.innerHTML = ""
        let li = document.createElement("li")
        li.innerText = `El numero ${number} es par y esta en el index: ${index}`
        evenUl.appendChild(li)
    }
}
function OddNumbers(number, index){
    if(number % 2 != 0){
        oddUl.innerHTML = ""
        let li = document.createElement("li")
        li.innerText = `El numero ${number} es impar y esta en el index: ${index}`
        oddUl.appendChild(li)
    }
}