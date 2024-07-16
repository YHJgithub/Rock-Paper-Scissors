// 创建一个函数随机返回“rock”、“paper”或“scissors”
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// 创建一个函数获取用户输入并返回
function getHumanChoice() {
  let human = prompt("What do you want? Rock, Paper or Scissors?");
  return human;
}

// 声明玩家和电脑的得分变量
let humanScore = 0;
let computerScore = 0;

// 创建一个函数进行一轮游戏
function playRound(humanChoice, computerChoice) {
  let human = humanChoice.toLowerCase();
  let compute = computerChoice.toLowerCase();
  let resultDiv = document.querySelector("#result");

  if (human === compute) {
    console.log("平局");
  } else if (
    (human === "rock" && compute === "scissors") ||
    (human === "scissors" && compute === "paper") ||
    (human === "paper" && compute === "rock")
  ) {
    resultDiv.textContent = `你赢了，${humanChoice}战胜${computerChoice}`;
    humanScore++;
  } else {
    resultDiv.textContent = `你输了，${computerChoice}战胜${humanChoice}`;
    computerScore++;
  }
}

document.querySelector("#rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

document.querySelector("#scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

document.querySelector("#paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

// 开始游戏
playGame();
