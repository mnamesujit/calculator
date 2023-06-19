
const input = document.querySelector("#input")
const output = document.querySelector("#output")
const keyContainer = document.querySelector(".keyboard")

let val = []
let operator
let currNum = []


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
        // checking if user clicks on backspace
        if(currObj.innerText === 'Z'){
            backSpace()
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

        console.log(currNum)    
    }
    console.log("global: ",val)
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

const backSpace = () => {
    console.log("backspace")
    console.log(input.value)
    let temp = input.value
    input.value = temp.slice(0, -1)
    currNum = currNum.slice(0, -1)
    console.log(temp)

}
