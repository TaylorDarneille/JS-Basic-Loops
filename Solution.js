
// 1. Get Even
for(let i =0;i<=200;i+=2){
  console.log(i);
}


//2.  Excited Kitten
const sayings = ["...human...why you taking pictures of me?...","..the catnip made me do it...", "meow?","...why does the red dot always get away..."];
for(let i=0;i<10;i++){
  console.log("Love me, pet me! HSSSSSS!")
  if(i%2===0){
    console.log(sayings[Math.floor(Math.random()*4)])
  }

//3. Thermostat
let currentTemp = Math.floor(Math.random()*100)+1;
const desiredTemp = 72;
console.log(`The current temp is ${currentTemp}F`)
while(currentTemp!==desiredTemp){
  if (currentTemp>desiredTemp){
    currentTemp--
    console.log(`The current temp is ${currentTemp}F`)
  } else{
    currentTemp++;
    console.log(`The current temp is ${currentTemp}F`);
  }
}

//4. Fizzbuzz
for(let i=1;i<=100;i++){
  if(i%15===0){
    console.log('FizzBuzz')
  } else if(i%5===0){
    console.log('Buzz');
  } else if (i%3===0){
    console.log('Fizz')
  } else{
    console.log(i)
  }
}

//5. What's my number?

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
for (person in phoneBook){
  if(phoneBook[person] === '333-333-3333'){
    console.log(person);
  }
}
