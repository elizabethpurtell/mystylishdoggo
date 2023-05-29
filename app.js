
// 

//

// greet user and make them reply with a name, response on page when complete

function greetUser(){

  let name = prompt("Hello! Would you please tell me your name?");
      if(name == ""){
      name = prompt("I really want to know your name, please!");
      }
      document.write("Hi, " + name + "We are happy to have you! Woof!");
      return name;
}

// ask user to choose between cat or dog, separate responses for each

function userChoice(){

  let choice = prompt("Are you a dog or cat person?");
    if (choice === "dog") {
      alert("You have come to the right site!");
    }
    else if(choice === "cat") {
      alert("You should visit our sister site!");
    }
}

// guess todays discount amount and get a coupon code!- uses validation- until they guess 30
function guessDiscount(){

  let discountAmt = 30;

    let usersGuess = prompt("Guess todays Discount percent! (Between 10-50%)");
      document.write(typeof(usersGuess));

    while (usersGuess != discountAmt){
      usersGuess = prompt("Wrong! Guess again, percentage between 10 & 50");
    }
    document.write("Hi, dog lover!" + discountAmt + "CODE: 30%forDogLovers");
      return;
}

// user rate 1-5 dog bones, about how much they love dogs in costumes, then that number will display the same amount of pictures
function ratedogCostumes(){

  let rateNum = prompt("Please rate how much you love dogs in costumes! Rate between 1 & 5 dog bones.");

    for(let i = 0; i < rateNum; i++){
      document.write("<img src='css/images/square-images/mystylishdoggo_squareImg.jpg' alt='cute dog' style='height:80px;width:80px' />" + rateNum);
      }
}
