let matches = 0;
let wins = 0;
let losses = 0;
let draws = 0;
let streak = 0;
let lives = 3;

const choices = ['rock', 'paper', 'scissors'];
const emojis = {
  rock: '✊',
  paper: '🖐',
  scissors: '✌️'
};

const emojiDisplay = document.querySelector('.emoji-display');
const resultDisplay = document.getElementById('round-result');
const heartsDisplay = document.querySelector('.hearts');

const statElements = {
  matches: document.getElementById('matches'),
  wins: document.getElementById('wins'),
  losses: document.getElementById('losses'),
  draws: document.getElementById('draws'),
  streak: document.getElementById('streak')
};

document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', () => {
    if (lives === 0) {
      resultDisplay.innerText = "💀 Game Over! Reload to play again.";
      return;
    }

    const userChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    emojiDisplay.innerText = emojis[computerChoice];
    matches++;

    console.log(computerChoice);
    

    if (userChoice === computerChoice) {
      resultDisplay.innerText = "🤝 It's a Draw!";
      draws++;
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      resultDisplay.innerText = "🎉 You Win!";
      wins++;
      streak++;
    } else {
      resultDisplay.innerText = "😞 You Lose!";
      losses++;
      streak = 0;
      lives--;
    }

    // Update stats
    statElements.matches.innerText = matches;
    statElements.wins.innerText = wins;
    statElements.losses.innerText = losses;
    statElements.draws.innerText = draws;
    statElements.streak.innerText = streak;

    // Update lives (hearts)
    heartsDisplay.innerText = "❤️".repeat(lives);

    // Show play again button
if (lives === 0) {
  document.getElementById('play-again').style.display = 'inline-block';
}

// Reset everything on play again
document.getElementById('play-again').addEventListener('click', () => {
  matches = 0;
  wins = 0;
  losses = 0;
  draws = 0;
  streak = 0;
  lives = 3;

  // Reset UI
  emojiDisplay.innerText = '❔';
  resultDisplay.innerText = 'Choose your move to start!';
  heartsDisplay.innerText = '❤️❤️❤️';

  // Reset stats display
  statElements.matches.innerText = matches;
  statElements.wins.innerText = wins;
  statElements.losses.innerText = losses;
  statElements.draws.innerText = draws;
  statElements.streak.innerText = streak;

  // Hide play again button
  document.getElementById('play-again').style.display = 'none';
});

  });
});
