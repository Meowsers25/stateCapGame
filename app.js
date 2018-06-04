let state = document.getElementById('span1')
let stateBtn = document.getElementById('btn')
let submitBtn = document.getElementById('submit')
let finalAnswer = document.getElementById('capInput')
let text = document.getElementById('span2')
let correct = 'You are correct'
let properNoun = 'Proper noun, please....'

let arr = [
  "Rhode Island",
  "Massachusetts"
]

stateBtn.onclick = function () {
  let rando = Math.floor(Math.random() * 2)

  if(rando == 0) {
    state.innerHTML = arr[0]
  } else {
    state.innerHTML = arr[1]
  }
  
  finalAnswer.value = ''
  text.innerHTML = ''

submitBtn.onclick = function() {
  if (rando == 0 && finalAnswer.value == 'Providence') {
    text.innerHTML = correct
  } else if (rando == 0 && finalAnswer.value == 'providence') {
    text.innerHTML = properNoun
  } else if (rando == 1 && finalAnswer.value == 'Boston') {
    text.innerHTML = correct
  } else if (rando == 1 && finalAnswer.value == 'boston') {
    text.innerHTML = properNoun
  } else {
    text.innerHTML = 'Incorrect'
  }
}

}
