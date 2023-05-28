
// 

//



function greetUser(){
  let name = prompt("What is your name?");
      if(name == ""){
      name = prompt("I really want to know your name, please!");
      }
      document.write("Hi, " + name + "We are happy to have you! Woof!");
      return name;
}

function userChoice(){
  let choice = prompt("Are you a dog or cat person?");
  if (choice === "dog") {
    alert("You have come to the right site!");
  }
  else if(choice === "cat") {
    alert("You should visit our sister site!");
  }
}
