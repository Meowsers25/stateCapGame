let stateBtn = document.getElementById('btn')
stateBtn.onclick = function () {

let arr = [
  'Alabama',	
  'Alaska',	
  'Arizona',	
  'Arkansas',	
  'California',	
  'Colorado',	
  'Connecticut',	
  'Delaware',	
  'Florida',	
  'Georgia',	
  'Hawaii',	
  'Idaho',	
  'Illinois',	
  'Indiana',	
  'Iowa',	
  'Kansas',	
  'Kentucky',	
  'Louisiana',	
  'Maine',	
  'Maryland',	
  'Massachusetts',	
  'Michigan',	
  'Minnesota',	
  'Mississippi',	
  'Missouri',	
  'Montana',	
  'Nebraska',	
  'Nevada',	
  'New Hampshire',	
  'New Jersey',	
  'New Mexico',	
  'New York',	
  'North Carolina',	
  'North Dakota',	
  'Ohio',	
  'Oklahoma',	
  'Oregon',	
  'Pennsylvania',	
  'Rhode Island',	
  'South Carolina',	
  'South Dakota',	
  'Tennessee',	
  'Texas',	
  'Utah',	
  'Vermont',	
  'Virginia',	
  'Washington',	
  'West Virginia',	
  'Wisconsin',	
  'Wyoming'	
]

let caps = [
  'Montgomery',
  'Juneau',
  'Phoenix',
  'Little Rock',
  'Sacramento',
  'Denver',
  'Hartford',
  'Dover',
  'Tallahassee',
  'Atlanta',
  'Honolulu',
  'Boise',
  'Springfield',
  'Indianapolis',
  'Des Moines',
  'Topeka',
  'Frankfort',
  'Baton Rouge',
  'Augusta',
  'Annapolis',
  'Boston',
  'Lansing',
  'St. Paul',
  'Jackson',
  'Jefferson City',
  'Helena',
  'Lincoln',
  'Carson City',
  'Concord',
  'Trenton',
  'Santa Fe',
  'Albany',
  'Raleigh',
  'Bismarck',
  'Columbus',
  'Oklahoma City',
  'Salem', 
  'Harrisburg',
  'Providence',
  'Columbia',
  'Pierre',
  'Nashville',
  'Austin',
  'Salt Lake City',
  'Montpelier',
  'Richmond',
  'Olympia',
  'Charleston',
  'Madison',
  'Cheyenne'
]

let state = document.getElementById('span1')
let submitBtn = document.getElementById('submit')
let finalAnswer = document.getElementById('capInput')
let text = document.getElementById('span2')
let correct = 'You are correct'
let properNoun = 'Proper noun, please....'
let rando = Math.floor(Math.random() * arr.length)

state.innerHTML = arr[rando]
  
  finalAnswer.value = ''
  text.innerHTML = ''

submitBtn.onclick = function() {
    if (finalAnswer.value === caps[rando]) {
      text.innerHTML = correct
    } else if (finalAnswer.value === caps[rando].toLowerCase()) {
      text.innerHTML = properNoun
    } else {
      text.innerHTML = "Incorrect, the answer is " + caps[rando]
    }
  }
}


