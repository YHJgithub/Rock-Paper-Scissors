function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "Rock";
  } else if (num == 1) {
    return "Scissors";
  } else {
    return "Paper";
  }
}

function getHumanChoice() {
  let human = prompt("What do you want?", "Rock? Scissors? Paper?");
  return human;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    let human = humanChoice().toUpperCase();
    let compute = computerChoice().toUpperCase();
    if (human === compute) {
      console.log("平局");
    } else if (human === "ROCK" && compute === "SCISSORS") {
      console.log("你赢了，石头战胜剪刀");
      humanScore++;
    } else if (human === "ROCK" && compute === "PAPER") {
      console.log("你输了，布战胜石头");
      computerScore++;
    } else if (human === "SCISSORS" && compute === "ROCK") {
      console.log("你输了，石头战胜剪刀");
      computerScore++;
    } else if (human === "SCISSORS" && compute === "PAPER") {
      console.log("你赢了，剪刀战胜布");
      humanScore++;
    } else if (human === "PAPER" && compute === "ROCK") {
      console.log("你赢了，布战胜石头");
      humanScore++;
    } else if (human === "PAPER" && compute === "SCISSORS") {
      console.log("你输了，剪刀战胜布");
      computerScore++;
    } else {
      console.log("你输入的什么b玩意儿");
      console.log("只能输入上面那3个");
    }
  }

  playRound(getHumanChoice, getComputerChoice);
  playRound(getHumanChoice, getComputerChoice);
  playRound(getHumanChoice, getComputerChoice);
  playRound(getHumanChoice, getComputerChoice);
  playRound(getHumanChoice, getComputerChoice);

  return humanScore > computerScore
    ? console.log(`最终你赢了，你有${humanScore}分，电脑有${computerScore}分`)
    : console.log(`最终你输了，你有${humanScore}分，电脑有${computerScore}分`);
}

playGame();
