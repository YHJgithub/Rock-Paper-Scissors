// 创建一个函数随机返回“rock”、“paper”或“scissors”
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// 声明玩家和电脑的得分变量
let humanScore = 0;
let computerScore = 0;

// 创建一个函数进行一轮游戏
function playRound(humanChoice, computerChoice) {
  let human = humanChoice.toLowerCase();
  let compute = computerChoice.toLowerCase();
  let resultDiv = document.querySelector("#result");
  let scoreDiv = document.getElementById("score");

  if (human === compute) {
    resultDiv.textContent = "平局";
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

  scoreDiv.innerText = `你: ${humanScore} - 电脑: ${computerScore}`;

  // 判断是否有一方达到5分
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      resultDiv.innerText = `游戏结束！你赢了，最终得分 你: ${humanScore} - 电脑: ${computerScore}`;
    } else {
      resultDiv.innerText = `游戏结束！你输了，最终得分 你: ${humanScore} - 电脑: ${computerScore}`;
    }
    // // 重置得分
    humanScore = 0;
    computerScore = 0;
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
