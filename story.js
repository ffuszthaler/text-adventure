const story = {
  currentScene: "introRoom",
  introRoom: {
    title: "Welcome to you prison",
    story:
      "You might have already realized but you stuck here, to escape you need to make the right decision or expect consequences! Are you ready?",
    choices: [
      {
        value: "Yes, I'm ready!",
        destination: "firstRoom",
      },
      {
        value: "Meh, think I'd rather stay here",
        destination: "deathRoom",
      },
    ],
    image: "A_cabin.png",
  },
  firstRoom: {
    title: "Welcome to the first room!",
    story:
      "Your first decision will be to guess the correct answer to my question. What is my name?",
    choices: [
      {
        value: "Francis",
        destination: "deathRoom",
      },
      {
        value: "Stevie",
        destination: "secondRoom",
      },
      {
        value: "Death",
        destination: "deathRoom",
      },
    ],
    image: "A_cabin.png",
  },
  secondRoom: {
    title: "Welcome to the second room!",
    story:
      "Congrats! - Your next decision will be to choose the correct item to open a jar of pickles.",
    choices: [
      {
        value: "Nothing, just your hands",
        destination: "deathRoom",
      },
      {
        value: "Knife",
        destination: "deathRoom",
      },
      {
        value: "Spoon",
        destination: "thirdRoom",
      },
    ],
    image: "A_cabin.png",
  },
  thirdRoom: {
    title: "Welcome to the third room!",
    story: "Good job! - The third decision is to shout the correct keyword.",
    choices: [
      {
        value: "Open sesame!",
        destination: "fourthRoom",
      },
      {
        value: "Open corn!",
        destination: "deathRoom",
      },
      {
        value: "Open the door!",
        destination: "deathRoom",
      },
    ],
    image: "A_cabin.png",
  },
  fourthRoom: {
    title: "Welcome to the fourth room!",
    story:
      "Almost at the end - Now imagine you have the ability to save either your best friend or your family! - which one will you choose?",
    choices: [
      {
        value: "Family",
        destination: "fifthRoom",
      },
      {
        value: "Best Friend",
        destination: "fifthRoom",
      },
    ],
    image: "A_cabin.png",
  },
  fifthRoom: {
    title: "Welcome to the fifth room!",
    story:
      "You are a monster, but I like you - Last decision, What am I eating at the moment?",
    choices: [
      {
        value: "Sesame",
        destination: "deathRoom",
      },
      {
        value: "Pickles with cutlery",
        destination: "finalRoom",
      },
      {
        value: "Nothing",
        destination: "deathRoom",
      },
    ],
    image: "A_cabin.png",
  },
  finalRoom: {
    title: "You did it! - You made the right calls, or did you?",
    story: "Go again?",
    choices: [
      {
        value: "Yes",
        destination: "introRoom",
      },
      {
        value: "No",
        destination: "deathRoom",
      },
    ],
    image: "A_cabin.png",
  },
  deathRoom: {
    title: "Wrong decision!",
    story: "You died - painfully and slow!",
    choices: [
      {
        value: "Wanna try again?",
        destination: "introRoom",
      },
    ],
    image: "A_cabin.png",
  },

  sword: {
    title: "You've saved us!",
    story:
      "Avarice the Angry Aardvark is defeated and Cute Puppistan is safe!!!! You're, like, so popular now.",
    defaultDestination: "attack",
  },
  candleStick: {
    title: "A candlestick, seriously?",
    story:
      "That's not even a real weapon. Avarice the Angry Aardvark easily defeated you. I really just don't understand why you would pick a candlestick over a sword.",
    image: "A_cabin.png",
    defaultDestination: "attack",
  },
  goHome: {
    title: "Back at home!",
    story:
      "Yes, you're back in comfort of your own home. Don't worry about it, someone else took care of the problem. No need to at all to feel guilty...",
    image: "video_game.png",
    defaultDestination: "attack",
    buttonText: "Let's try this again",
  },
};
