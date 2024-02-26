import emoji from "emojis-list";

export const questionsConfig = [
    {
      title: "How was your week overall?",
      options: [
        { icon: emoji[1753], label: "Ok" },
        { icon: emoji[1754], label: "Good" },
        { icon: emoji[1755], label: "Great" },
      ],
    },
    {
      title: "How was your day overall?",
      options: [
        { icon: emoji[1753], label: "Ok" },
        { icon: emoji[1756], label: "Good" },
        { icon: emoji[1758], label: "Great" },
        { icon: emoji[2996], label: "The best" },
      ],
    },
    {
      title: "Let's try 5 icons?",
      options: [
        { icon: emoji[2801], label: "Just" },
        { icon: emoji[2802], label: "Some" },
        { icon: emoji[2803], label: "Random" },
        { icon: emoji[2801], label: "Labels" },
        { icon: emoji[2802], label: "Here" },
      ],
    },
  ]