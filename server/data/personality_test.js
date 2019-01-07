var data = {
  categories: ["hard_fact", "lifestyle", "introversion", "passion"],
  questions: [
    {
      question: "What is your gender?",
      category: "hard_fact",
      question_type: {
        type: "single_choice",
        options: ["male", "female", "other"]
      }
    },

    {
      question: "How should your potential partner respond to this question?",
      category: "lifestyle",
      question_type: {
        type: "single_choice",
        options: ["yes", "sometimes", "no"]
      }
    },

    {
      question: "Do you enjoy spending time alone?",
      category: "introversion",
      question_type: {
        type: "single_choice",
        options: [
          "most of the time",
          "often",
          "sometimes",
          "rarely",
          "not at all"
        ]
      }
    },

    {
      question: "How often do you think about sex?",
      category: "passion",
      question_type: {
        type: "single_choice",
        options: [
          "a few times a day",
          "daily",
          "a few times a week",
          "a few times a month",
          "rarely"
        ]
      }
    }
  ]
};

module.exports = data;
