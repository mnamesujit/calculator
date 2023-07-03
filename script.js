
const input = document.querySelector("#input")
const output = document.querySelector("#output")
const keyContainer = document.querySelector(".keyboard")

// Global variables declaretion that manages states globally
let val = []
let operator
let currNum = []

// Adding EvenentListener on click event
keyContainer.addEventListener("click", (e) => {
    // Assigning e.target to currObj
    currObj = e.target
    if((currObj.innerText).length > 2) return 

    // Checks if user hits backspace button
    if(currObj.id == 'backspace'){
        backSpace()
        return
    }

    // Checking if user press operator
    if(currObj.id == 'op'){

        // checking obj if user clicks on clear button
        if(currObj.innerText === 'C'){
            val = []
            operator = ''
            currNum = []
            output.innerText = 0
            input.value = [0]
            return
        }
        
        // checking if user want result
        if(currObj.innerText === '=')
        {
            if(currNum!=null && currNum > 0){
                // Updating state on input box
                inputState(val, operator, currNum)

                // updating input array
                val.push(Number(currNum))
                currNum = []
            }
            // Calling Calculate function
            if(val.length >1){
                calCulate(val, operator)
            }
            return
        }

        // Assigning Operator into operator variable
        operator = currObj.innerText
        if(val.length <=1){
            input.value = [...val, currNum, operator].join("")
        }

        // checking if currNum is not null
        if(currNum!=null && currNum > 0){
            val.push(Number(currNum))
            currNum = []
            return
        }
    }
    else{
        // if user wants to enter contegeous numbers or single number
        currNum += currObj.innerText

        // changing input box states
        inputState(val, operator, currNum)
    }
})

// Definition of calCulate function
const calCulate = (val, operator) => {
    let firstNum = val[0]
    let nextNum = val[1]

    // Evaluations of current statement
    nextNum = eval(`${firstNum} ${operator} ${nextNum}`)

    // Updating Next Number Value
    val[0] = nextNum
    val.pop()

    // Updating output onScreen
    output.innerText = nextNum
    return
}

// Definition of inputState function
const inputState = (val, operator, currNum) =>{
    input.value = [val,operator, currNum].join("")
}

// Definition of backSpace function
const backSpace = () => {
   
    let temp = input.value
    input.value = temp.slice(0, -1)
    currNum = currNum.slice(0, -1)
}
