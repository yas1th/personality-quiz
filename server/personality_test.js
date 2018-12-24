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
      question: "How important is the gender of your partner?",
      category: "hard_fact",
      question_type: {
        type: "single_choice",
        options: ["not important", "important", "very important"]
      }
    },
    {
      question: "How important is the age of your partner to you?",
      category: "hard_fact",
      question_type: {
        type: "single_choice_conditional",
        options: ["not important", "important", "very important"],
        condition: {
          predicate: {
            exactEquals: ["${selection}", "very important"]
          },
          if_positive: {
            question: "What age should your potential partner be?",
            category: "hard_fact",
            question_type: {
              type: "number_range",
              range: {
                from: 18,
                to: 140
              }
            }
          }
        }
      }
    },
    {
      question: "Do any children under the age of 18 live with you?",
      category: "hard_fact",
      question_type: {
        type: "single_choice",
        options: ["yes", "sometimes", "no"]
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
      question:
        "Could you imagine having children with your potential partner?",
      category: "lifestyle",
      question_type: {
        type: "single_choice",
        options: ["yes", "maybe", "no"]
      }
    },
    {
      question: "How should your potential partner respond to this question?",
      category: "lifestyle",
      question_type: {
        type: "single_choice",
        options: ["yes", "maybe", "no"]
      }
    },
    {
      question: "What is your marital status?",
      category: "hard_fact",
      question_type: {
        type: "single_choice",
        options: ["never married", "separated", "divorced", "widowed"]
      }
    },
    {
      question: "How often do your drink alcohol?",
      category: "lifestyle",
      question_type: {
        type: "single_choice",
        options: [
          "never",
          "once or twice a year",
          "once or twice a month",
          "once or twice a week",
          "I'm drinking my 3rd mojito now, and it's only 11am"
        ]
      }
    },
    {
      question: "How often do you smoke?",
      category: "lifestyle",
      question_type: {
        type: "single_choice",
        options: ["never", "once or twice a year", "socially", "frequently"]
      }
    },
    {
      question: "What is your attitude towards drugs?",
      category: "lifestyle",
      question_type: {
        type: "single_choice",
        options: [
          "I'm completely opposed",
          "I've been know to dabble",
          "drugs enrich my life"
        ]
      }
    },
    {
      question: "You are looking for...",
      category: "lifestyle",
      question_type: {
        type: "single_choice",
        options: [
          "friendship",
          "a hot date",
          "an affair",
          "a short-term relationship",
          "a long-term relationship"
        ]
      }
    },
    {
      question: "Would you like to get married?",
      category: "lifestyle",
      question_type: {
        type: "single_choice",
        options: ["yes", "probably", "eventually", "no"]
      }
    },
    {
      question: "What is your ideal living arrangement?",
      category: "lifestyle",
      question_type: {
        type: "single_choice",
        options: [
          "cohabitation",
          "separate flat / room in the same building",
          "separate flats in the same area",
          "weekend-relationship",
          "long distance relationship"
        ]
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
      question: "When you're alone, do you get lonely quickly?",
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
      question: "Do you enjoy going on holiday by yourself?",
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
      question: 'I consciously take "me time"',
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
      question: "Should one keep little secrets from one's partner?",
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
    },
    {
      question:
        "If you were alone on a desert island, how long would you last before pleasuring yourself?",
      category: "passion",
      question_type: {
        type: "single_choice",
        options: [
          "less than a day",
          "one day",
          "one week",
          "one month",
          "I'd never do something like that"
        ]
      }
    },
    {
      question:
        "How often would you like to have sex with your prospective partner?",
      category: "passion",
      question_type: {
        type: "single_choice",
        options: [
          "every day",
          "a few times a week",
          "once a week",
          "every two weeks",
          "infrequently",
          "rarely"
        ]
      }
    },
    {
      question: "Do you like trying out new things in bed and experimenting?",
      category: "passion",
      question_type: {
        type: "single_choice",
        options: [
          "Yes, definitely!",
          "Now and then - why not?",
          "I'd give it a try",
          "I don't know",
          "Absolutely not"
        ]
      }
    },
    {
      question: "I can enjoy sex without love",
      category: "passion",
      question_type: {
        type: "single_choice",
        options: ["always", "often", "sometimes", "rarely", "never"]
      }
    },
    {
      question:
        "For me, a stable relationship is a prerequisite for really good sex",
      category: "passion",
      question_type: {
        type: "single_choice",
        options: ["always", "often", "sometimes", "rarely", "never"]
      }
    }
  ]
};

module.exports = data;
