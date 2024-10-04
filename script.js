let num1
let num2
let operator = [
  function add(num1, num2) {
    return num1 + +num2
  },
  function subtract(num1, num2) {
    return num1 - +num2
  },
  function multiply(num1, num2) {
    return num1 * +num2
  },
  function divide(num1, num2) {
    return num1 / +num2
  },
]
let currentOperator
let displayValue
let display = document.querySelector('.display')

function addToDisplay(displayValue) {
  display.textContent = displayValue
}

function clearCalculator() {
  displayValue = ''
  num1 = ''
  num2 = ''
  currentOperator = ''
  addToDisplay(displayValue)
}

function operate(num1, num2) {
  let result = operator[currentOperator](num1, num2)
  displayValue = result
  num1 = result
  addToDisplay(displayValue)
  return result
}

let button = document.querySelectorAll('button')
console.log(`button is ${button}`)

document.addEventListener('click', (e) => {
  if (
    e.target.matches('.digit') ||
    e.target.matches('.operator') ||
    e.target.matches('#equal')
  ) {
    if (
      currentOperator &&
      !e.target.matches('#equal') &&
      e.target.matches('.digit')
    ) {
      num2 ? (num2 += e.target.textContent) : (num2 = e.target.textContent)
      console.log(`num2 is ${num2}`)
    }
    if (e.target.matches('.operator') && currentOperator && num2) {
      num1 = operate(num1, num2)
      currentOperator = e.target.id
      console.log(`currentOperator is ${currentOperator}`)
      num2 = ''
      console.log(`num1 is ${num1}`)
    } else if (e.target.matches('.operator')) {
      num1 = +displayValue
      currentOperator = e.target.id
      console.log(`num1 is ${num1}`)
      console.log(`currentOperator is ${currentOperator}`)
    }
    if (!currentOperator && num1) clearCalculator()
    if (e.target.matches('#equal')) {
      console.log('clicked!')
      operate(num1, num2)
      num2 = ''
      currentOperator = ''
    } else {
      displayValue
        ? (displayValue += e.target.textContent)
        : (displayValue = e.target.textContent)
      addToDisplay(displayValue)
    }
  }
  if (e.target.matches('#clear')) {
    clearCalculator()
  }
})
