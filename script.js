
const input = document.querySelector("#input")
const output = document.querySelector("#output")
const keyContainer = document.querySelector(".keyboard")

let val = []
let operator
let currNum = []

keyContainer.addEventListener("click", (e) => {
    currObj = e.target
    if(currObj.id == 'op'){
        
        if(currObj.innerText === 'C'){
            val = []
            operator = ''
            console.log("clearing:", val)
            return
        }
        if(currObj.innerText === '=')
        {
            console.log("calculating result")
            if(currNum!=null && currNum > 0){
                console.log("Current Num is: ", currNum)
                val.push(Number(currNum))
                currNum = []
            }
            // Calling Calculate function
            calCulate(val, operator)
            return
        }


        // Assigning Operator into operator var
        operator = currObj.innerText
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
}