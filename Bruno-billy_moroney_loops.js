for (var i = 0; i < 201; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

const love = "Love me, pet me! HSSSSSS!"
const pictures = "...human...why you taking pictures of me?..."
const nip = "...the catnip made me do it..."
const meow = "meow?"
const red = "...why does the red dot always get away..."

const responses = [pictures, nip, meow, red]

for (var i = 1; i <= 10; i++){
    console.log(love)
    if (i % 2 == 0) {
        console.log(responses[Math.floor(Math.random() * 4)])
    }
}

let currentTemp = Math.floor(Math.random() * 100)
let desiredTemp = 69

console.log("The current temperature is " + currentTemp)
while (currentTemp != desiredTemp) {
    if (currentTemp < desiredTemp) {
        currentTemp++
        console.log("The current temperature is " + currentTemp)
    } else {
        currentTemp--
        console.log("The current temperature is " + currentTemp)
    }
}

for (var i = 1; i < 101; i++){
    if (i % 3 == 0){
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else if (i % 15 == 0) {
        console.log("Fizzbuzz")
    } else {
        console.log(i)
    }
}

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

  for (const number in phoneBook) {
      if (phoneBook[number] == "333-333-3333"){
          console.log(number)
      }
  }