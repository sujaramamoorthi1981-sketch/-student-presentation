function analyzePresentation() {

    return {
        speakingSpeed: "125 WPM",

        fillerWords: 6,

        emotion: "Confident 😊",

        sentiment: "Positive",

        presentationScore: "87%",

        confidence: "84%",

        transcript:
`Good morning everyone.

Today I am going to present about Artificial Intelligence.

Artificial Intelligence is one of the most important technologies in the modern world.

It is used in healthcare, education, banking and many other fields.

AI helps computers learn from data and make intelligent decisions.

Thank you for listening to my presentation.`,

        suggestions: [
            "Your speaking speed is good. Try to maintain the same pace.",
            "Reduce filler words such as um, uh and like.",
            "Your confidence level is good.",
            "Try to increase your voice clarity during important points.",
            "Overall presentation performance is very good."
        ],

        keyPoints: [
            "Good introduction and topic explanation.",
            "Speaking speed is within a good range.",
            "Positive sentiment detected.",
            "Confidence level is 84%.",
            "Overall presentation score is 87%."
        ]
    };
}


module.exports = {
    analyzePresentation
};
