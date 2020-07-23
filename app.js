let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreboardDiv = document.querySelector('.scoreboard');
const resultP = document.querySelector('.result > p');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

const getComputerChoice = () => {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const convertToWord = (letter) => {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
};

const win = (userChoice, computerChoice) => {
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();
  const userChoiceDiv = document.getElementById(userChoice);
  userScore += 1;
  computerScoreSpan.innerHTML = computerScore;
  userScoreSpan.innerHTML = userScore;
  resultP.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(
    computerChoice,
  )}${smallCompWord}. You win!`;
  userChoiceDiv.classList.add('green-glow');
  setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 350);
};

const lose = (userChoice, computerChoice) => {
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();
  const userChoiceDiv = document.getElementById(userChoice);
  computerScore += 1;
  computerScoreSpan.innerHTML = computerScore;
  userScoreSpan.innerHTML = userScore;
  resultP.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(
    computerChoice,
  )}${smallCompWord}. You lost...`;
  userChoiceDiv.classList.add('red-glow');
  setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 350);
};

const draw = (userChoice, computerChoice) => {
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();
  const userChoiceDiv = document.getElementById(userChoice);
  resultP.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(
    computerChoice,
  )}${smallCompWord}. It's a draw!`;
  userChoiceDiv.classList.add('yellow-glow');
  setTimeout(() => userChoiceDiv.classList.remove('yellow-glow'), 350);
};

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
    default:
  }
};

const main = () => {
  rockDiv.addEventListener('click', () => game('r'));
  paperDiv.addEventListener('click', () => game('p'));
  scissorsDiv.addEventListener('click', () => game('s'));
};

main();
