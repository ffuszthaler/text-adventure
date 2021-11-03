const story = {
  currentScene: 'attack',
  attack: {
    title: 'Beginnings',
    story:
      "Once upon a time, the village of Cute Puppistan lived in peace. Until one day, it was attacked by Avarice the Angry Aardvark. The Premier of Cute Puppistan, said there's only one person who can save us hero",
    choices: [
      {
        value: "Yes, I'm ready to accept!",
        destination: 'battle'
      },
      {
        value: "Meh, think I'd rather just play video games instead.",
        destination: 'goHome'
      }
    ]
  },
  battle: {
    title: 'The epic battle for Cute Puppistan!',
    story: "It's Avarice the Angry Aardvark, he looks pretty scary...",
    choices: [
      {
        value: 'Attack him with a sword.',
        destination: 'sword'
      },
      {
        value: 'Attack him with a candlestick.',
        destination: 'candleStick'
      },
      {
        value: 'go to test cellar',
        destination: 'cellar'
      }
    ]
  },
  cellar: {
    title: 'Test question to test text input',
    story: 'this exists to test tmy text input implementation type a, b or c',
    choices: [
      {
        value: 'Answer1',
        inputValue: 'a',
        destination: 'sword'
      },
      {
        value: 'Answer2',
        inputValue: 'b',
        destination: 'goHome'
      },
      {
        value: 'Answer3',
        inputValue: 'c',
        destination: 'candleStick'
      }
    ],
    textInput: ''
  },
  sword: {
    title: "You've saved us!",
    story:
      "Avarice the Angry Aardvark is defeated and Cute Puppistan is safe!!!! You're, like, so popular now.",
    defaultDestination: 'attack'
  },
  candleStick: {
    title: 'A candlestick, seriously?',
    story:
      "That's not even a real weapon. Avarice the Angry Aardvark easily defeated you. I really just don't understand why you would pick a candlestick over a sword.",
    image: 'A_cabin.png',
    defaultDestination: 'attack'
  },
  goHome: {
    title: 'Back at home!',
    story:
      "Yes, you're back in comfort of your own home. Don't worry about it, someone else took care of the problem. No need to at all to feel guilty...",
    image: 'video_game.png',
    defaultDestination: 'attack',
    buttonText: "Let's try this again"
  }
<<<<<<< HEAD
}; // rewrite story

const startButton = document.getElementById('startGameButton');

startButton.addEventListener('click', () => {
  initGame();
});

const initGame = () => {
  const gameDiv = document.getElementById('game');

  let image;
  if (story[story.currentScene].image) {
    image = '<img id = "chapter_img"/>';
  } else {
    // if this is missing a wild undefiend appears
    image = '';
=======
} // rewrite story

const startButton = document.getElementById('startGameButton')

startButton.addEventListener('click', () => {
  initGame()
})

const initGame = () => {
  const gameDiv = document.getElementById('game')

  let image
  if (story[story.currentScene].image) {
    image = '<img id = "chapter_img"/>'
  } else {
    // if this is missing a wild undefiend appears
    image = ''
>>>>>>> fb46c5f6ef0cfc0e9d49d32da9c377699c37d9e8
  }

  // story[story.currentScene] - works a bit like an array
  gameDiv.innerHTML = `
<<<<<<< HEAD
    <h1>${story[story.currentScene].title}</h1>
    <p>${story[story.currentScene].story}</p>
    ${renderInput(story[story.currentScene].choices)}
    <button id="submitButton">Next</button>
    ${image}
  `

  if (story[story.currentScene].image) {
    document.querySelector('#chapter_img').src =
      'img/' + story[story.currentScene].image;
  }

  const button = document.getElementById('submitButton')
  button.addEventListener('click', chooseInput);
=======
        <h1>${story[story.currentScene].title}</h1>
        <p>${story[story.currentScene].story}</p>
        ${renderInput(story[story.currentScene].choices)}
        <button id="submitButton">Next</button>
        ${image}
    `

  if (story[story.currentScene].image) {
    document.querySelector('#chapter_img').src =
      'img/' + story[story.currentScene].image
  }

  const button = document.getElementById('submitButton')
  button.addEventListener('click', chooseInput)
>>>>>>> fb46c5f6ef0cfc0e9d49d32da9c377699c37d9e8
}

const renderInput = (choices) => {
  // choices is a array
<<<<<<< HEAD
  if (!choices) return '';

  // if this is missing a wild undefiend appears
  let input = '';
=======
  if (!choices) return ''

  // if this is missing a wild undefiend appears
  let input = ''
>>>>>>> fb46c5f6ef0cfc0e9d49d32da9c377699c37d9e8

  // 'id' from input and 'for' from label need to be the same value to 'connect' them
  for (let i = 0; i < choices.length; i++) {
    input += `
<<<<<<< HEAD
      <div>
        <input data-destination=${choices[i].destination} type='radio' id="decision-${i}" name='decision'/>
        <label for="decision-${i}">${choices[i].value}</label>
      </div>
    `
  }
  return input;
=======
            <div>
                <input data-destination=${choices[i].destination} type='radio' id="decision-${i}" name='decision'/>
                <label for="decision-${i}">${choices[i].value}</label>
            </div>
        `
  }
  return input
>>>>>>> fb46c5f6ef0cfc0e9d49d32da9c377699c37d9e8
}

const chooseInput = () => {
  const inputs = document.querySelectorAll('input')
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      // the chosen input defines the next scene
<<<<<<< HEAD
      story.currentScene = inputs[i].getAttribute('data-destination');
      initGame();
      return;
    }
  }
  // at the end of decision path - go back to start
  story.currentScene = story[story.currentScene].defaultDestination;
=======
      story.currentScene = inputs[i].getAttribute('data-destination')
      initGame()
      return
    }
  }
  // at the end of decision path - go back to start
  story.currentScene = story[story.currentScene].defaultDestination
>>>>>>> fb46c5f6ef0cfc0e9d49d32da9c377699c37d9e8
  initGame()
}
