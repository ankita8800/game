function interested() {
  const user1 = prompt("Choose Stone, Paper, or Scissor").toLowerCase();

  const v1 = "stone";
  const v2 = "paper";
  const v3 = "scissor";

  // Display the user's choice
  if (user1 === v1) {
      document.getElementById("demo").innerHTML = "You chose Stone.";
  } else if (user1 === v2) {
      document.getElementById("demo").innerHTML = "You chose Paper.";
  } else if (user1 === v3) {
      document.getElementById("demo").innerHTML = "You chose Scissor.";
  } else {
      document.getElementById("demo").innerHTML = "Invalid choice.";
      return; 
  }

  
  const opponent = v2;

  // Game logic to determine the winner
  if (user1 === opponent) {
      document.getElementById("demo").innerHTML += "<br>It's a tie!";
  } else if (
      (user1 === v1 && opponent === v3) || // Stone beats Scissor
      (user1 === v2 && opponent === v1) || // Paper beats Stone
      (user1 === v3 && opponent === v2)    // Scissor beats Paper
  ) {
      document.getElementById("demo").innerHTML += "<br>You win!";
  } else {
      document.getElementById("demo").innerHTML += "<br>Opponent wins!";
  }
}

function not_interested() {
  document.getElementById("demo").innerHTML = "Maybe next time!";
}
