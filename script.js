
const input = document.querySelector("#input")
const output = document.querySelector("#output")
const keyContainer = document.querySelector(".keyboard")

let val = []
let operator
let currNum = []
let inputArr = []
input.value = inputArr

keyContainer.addEventListener("click", (e) => {
    currObj = e.target
    if(currObj.id == 'op'){

        // checking obj if user clicks on clear button
        if(currObj.innerText === 'C'){
            val = []
            operator = ''
            currNum = []
            input.value = [0]
            console.log("clearing:", val)
            return
        }
        // checking if user want result
        if(currObj.innerText === '=')
        {
            console.log("calculating result")
            if(currNum!=null && currNum > 0){
                console.log("Current Num is: ", currNum)
                inputState(val, operator, currNum)
                val.push(Number(currNum))
                currNum = []
            }
            // Calling Calculate function
            calCulate(val, operator)
            return
        }


        // Assigning Operator into operator variable
        operator = currObj.innerText
        inputState(currNum, operator, val)
        console.log("currNum", currNum)
        

        // checking if currNum is not null
        if(currNum!=null && currNum > 0){
            console.log("Current Num is on main: ", currNum)
            val.push(Number(currNum))
            currNum = []
            return
        }
    }
    else{
        currNum += currObj.innerText
        inputState(val, operator, currNum)
        inputArr.push(currNum)

        console.log(currNum)    
    }
    console.log("global: ",val)
    console.log("Input Arr is: " ,inputArr)
})


const calCulate = (val, operator) => {
    console.log("calculated")
    console.log(val)
    let firstNum = val[0]
    let nextNum = val[1]
    console.log(operator)
    nextNum = eval(`${firstNum} ${operator} ${nextNum}`)
    // Updating Next Number Value
    val[0] = nextNum
    val.pop()

    // Updating output onScreen
    output.innerText = nextNum
    console.log(nextNum)
    console.log(val)
    return
}

const inputState = (val, operator, currNum) =>{
    input.value = [val,operator, currNum].join("")
}