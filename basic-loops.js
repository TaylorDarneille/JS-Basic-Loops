//Write a for loop that will log only the even numbers in 0 through 200.

for (var i = 0; i <= 200; i+=2) {
    console.log(i)
  }
  
  
  // Excited Kitten
  // Write code that logs "Love me, pet me! HSSSSSS!" 10 times.
  
  // For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", "meow?", or "...why does the red dot always get away..." at random.
  
  catTalk = ['human why you take pictures','the catnip made me do it', 'meow?', 'why does the red dot always get away']
  
  for (let i = 0; i < 10; i++) {
    console.log("Love me, pet me! HSSS!");
    if (i % 2 === 0) {
    let x = Math.floor(Math.random() * 4)
    console.log(catTalk[x])
    }
  }
  
  // Thermostat
  // Declare a variable called currentTemp that stores the current temperature. Set this to a random whole number between 1 and 100.
  // Hint: Use Math.random then multiply by 100 - make sure to use floor or rnd to get a whole number
  
  let currentTemp = Math.floor(Math.random() * 100);
  // Declare a variable called desiredTemp that is the temperature in Fahrenheit, that you personally like to relax at. 
  let desiredTemp = 72;
  
  // Print out the current temperature is. For example:
  
  // The current temperature is 24F
  console.log('The current temperature is ' + currentTemp + 'F.' )
  
  // While the temperature is too low, add a degree to the current temperature. Every time you increase the temperature, print out the current temperature again. For example:
  // The current temperature is now 25F
  // While the temperature is too high, subtract a degree from the current temperature. Every time you decrease the temperature, print out the current temperature again.
  
  if (currentTemp < desiredTemp) {
    currentTemp ++
    console.log('The current temperature is now ' + currentTemp)
  } else if (currentTemp > desiredTemp) {
    currentTemp --
    console.log('The current temperature is now ' + currentTemp)
  }
  
  
  
  // Fizz Buzz
  // Write a javascript application that logs all numbers from 1 - 100.
  
  // If a number is divisible by 3 log "Fizz" instead of the number.
  
  // If a number is divisible by 5 log "Buzz" instead of the number.
  
  // If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
  
  for (var i = 1; i<= 100; i++) {
    if (i%15 === 0) {
      console.log('fizzbuzz')
    } else if (i%5 === 0) {
      console.log('buzz')
    } else if (i% 3 === 0) {
      console.log('fizz') 
    } else {
      console.log(i)
    }
  }
  
  
  
  // BONUS: What's My Number?
  // Have you learned about JavaScript objects yet? If you've got some bonus time, there's no time like the present!
  
  // Use a for...in loop to examine the phoneBook Object below and print out the names of all the people who share the phone number "333-333-3333".
  
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
  
  for(var number in phoneBook){
    if (phoneBook[number] === '333-333-3333') {
    console.log(number)
  }
  }