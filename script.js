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

  if (human === compute) {
    console.log("平局");
  } else if (
    (human === "rock" && compute === "scissors") ||
    (human === "scissors" && compute === "paper") ||
    (human === "paper" && compute === "rock")
  ) {
    console.log(`你赢了，${humanChoice}战胜${computerChoice}`);
    humanScore++;
  } else {
    console.log(`你输了，${computerChoice}战胜${humanChoice}`);
    computerScore++;
  }
}

// 创建一个函数进行5轮游戏
function playGame() {
  // 进行5轮游戏
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // 最终宣布胜者
  if (humanScore > computerScore) {
    console.log(`最终你赢了，你有${humanScore}分，电脑有${computerScore}分`);
  } else if (humanScore < computerScore) {
    console.log(`最终你输了，你有${humanScore}分，电脑有${computerScore}分`);
  } else {
    console.log(`最终平局，你有${humanScore}分，电脑有${computerScore}分`);
  }
}

// 开始游戏
playGame();
