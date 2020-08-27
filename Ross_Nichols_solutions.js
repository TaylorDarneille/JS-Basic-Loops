//Get Even 
//#1
console.log("Get Even")

for(i = 0; i <= 200; i += 2) {
  console.log(i)
}


//Excited Kitten
//#1 & 2
console.log("Excited Kitten")

for(i = 1; i <= 10; i++) {
  console.log("Love me, pet me! HSSSSSS!")
  var phrases = ["...human...why you taking pictures of me?...", "..the catnip made me do it...", "meow?","...why does the red dot always get away..."]
  var random = Math.floor(Math.random() * phrases.length)
  if(i % 2 === 0) {
    if (random === 0) {
      console.log(phrases[0])
    } else if (random === 1) {
      console.log(phrases[1])
    } else if (random === 2) {
      console.log(phrases[2])
    } else if (random === 3) {
      console.log(phrases[3])
    }
  }
}


//Thermostat
console.log("Thermostat")
//#1
var currentTemp = 1 + Math.floor(Math.random() * 101)


//#2
var desiredTemp = 68


//#3
console.log("The current temperature is " + currentTemp)


//#4

while(currentTemp < desiredTemp) {
  currentTemp += 1
  console.log("The current temperature is " + currentTemp + " degrees Farenheit")
}


//#5

while(currentTemp > desiredTemp) {
  currentTemp -= 1
  console.log("The current temperature is " + currentTemp + " degrees Farenheit")
}


//FIZZBUZZ
//#1
console.log('FizzBuzz')


for(i = 1; i <= 100; i++) {
  console.log(i)
}


//#2-4


for(i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}




//BONUS
console.log('Bonus')

var phoneBook = {
  "Abe": "111-111-1111",
  "Bob": "222-222-2222",
  "Cam": "333-333-3333",
  "Dan": "444-444-4444",
  "Ern": "555-555-5555",
  "Fry": "111-111-1111",
  "Gil": "222-222-2222",
  "Hal": "333-333-3333",
  "Ike": "444-444-4444",
  "Jim": "555-555-5555",
  "Kip": "111-111-1111",
  "Liv": "222-222-2222",
  "Mia": "333-333-3333",
  "Nik": "444-444-4444",
  "Oli": "555-555-5555",
  "Pam": "111-111-1111",
  "Qiq": "222-222-2222",
  "Rob": "333-333-3333",
  "Stu": "444-444-4444",
  "Tad": "555-555-5555",
  "Uwe": "111-111-1111",
  "Val": "222-222-2222",
  "Wil": "333-333-3333",
  "Xiu": "444-444-4444",
  "Yam": "555-555-5555",
  "Zed": "111-111-1111"
}

for(var person in phoneBook) {
  if(phoneBook[person] === "333-333-3333") {
    console.log(person)
  }
}