// AMAL AMCHTAL TA: MATEEN KAZIA

// part1 

for(var i = 0; i <= 200;i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

console.log("----------------------");

// part2 

const randomRes = ["...human...why you taking pictures of me?...", 
"...the catnip made me do it...", 
"meow?", "...why does the red dot always get away..." ]

for(var i = 0; i < 10;i++){
    console.log("Love me, pet me! HSSSSSS!");
    if (i % 2 == 0){
        var randIndex = Math.floor(Math.random() * randomRes.length);
        console.log(randomRes[randIndex]);
    }
}

console.log("----------------------");
// part3 
var currentTemp = Math.floor(Math.random() * 100);
const desiredTemp = 70;
var isDesiredTemp = false;
console.log("The current temperature is: " + currentTemp + "F");

while(!isDesiredTemp){
    if (desiredTemp === currentTemp){
        isDesiredTemp = true;
    }else if(currentTemp < desiredTemp){
        currentTemp++;
        console.log("The current temperature is now " + currentTemp + "F");
    }else{
        currentTemp--;
        console.log("The current temperature is now " +currentTemp + "F");
    }
}

console.log("----------------------");
// part4

var i = 1;
while(i <= 100){
  if(i % 3 == 0 && i % 5 == 0){
    console.log('fizzbuzz')
  }else if(i % 3 == 0){
    console.log('fizz')
  }else if(i % 5 == 0){
    console.log('buzz')
  }else{
    console.log(i)
  }
  i++;
}

console.log("----------------------");
// part5 
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

  for(var person in phoneBook){
      if(phoneBook[person] === "333-333-3333"){
          console.log(person)
      }
  }
