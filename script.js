// ==========================================
// LOGIN
// ==========================================

function login() {

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    let message =
        document.getElementById("loginMessage");


    if (email === "" || password === "") {

        message.innerText =
            "Please enter email and password.";

        message.style.color = "#ef4444";

        return;
    }


    if (password.length < 4) {

        message.innerText =
            "Password must contain at least 4 characters.";

        message.style.color = "#ef4444";

        return;
    }


    localStorage.setItem(
        "presentationLogin",
        "true"
    );


    message.innerText =
        "Login successful!";

    message.style.color = "#22c55e";


    setTimeout(function () {

        window.location.href =
            "index.html";

    }, 700);

}



// ==========================================
// LOGOUT
// ==========================================

function logout() {

    localStorage.removeItem(
        "presentationLogin"
    );

    window.location.href =
        "login.html";

}



// ==========================================
// FILE NAME
// ==========================================

function showFileName() {

    let file =
        document.getElementById("audioFile").files[0];

    let fileName =
        document.getElementById("fileName");


    if (file) {

        fileName.innerText =
            "Selected: " + file.name;

    } else {

        fileName.innerText = "";

    }

}



// ==========================================
// ANALYZE PRESENTATION
// ==========================================

function analyzePresentation() {

    let file =
        document.getElementById("audioFile").files[0];


    if (!file) {

        alert(
            "Please upload an audio file first."
        );

        return;

    }


    document.getElementById("loading")
        .style.display = "block";


    setTimeout(function () {

        document.getElementById("loading")
            .style.display = "none";


        // SPEED

        document.getElementById("speed")
            .innerText = "125 WPM";


        // FILLER WORDS

        document.getElementById("filler")
            .innerText = "6";


        // EMOTION

        document.getElementById("emotion")
            .innerText = "Confident 😊";


        // SCORE

        document.getElementById("score")
            .innerText = "87%";


        // SENTIMENT

        document.getElementById("sentiment")
            .innerText = "Positive";


        document.getElementById("sentimentText")
            .innerText =
            "Your presentation has a positive tone.";


        document.getElementById("sentimentIcon")
            .innerText = "😊";


        // CONFIDENCE

        document.getElementById("confidence")
            .innerText = "84%";


        document.getElementById("confidenceBar")
            .style.width = "84%";


        // TRANSCRIPT

        document.getElementById("transcript")
            .innerText =

`Good morning everyone.

Today I am going to present about Artificial Intelligence.

Artificial Intelligence is one of the most important technologies in the modern world.

It is used in healthcare, education, banking and many other fields.

AI helps computers learn from data and make intelligent decisions.

Thank you for listening to my presentation.`;



        // SUGGESTIONS

        document.getElementById("suggestionList")
            .innerHTML = `

            <div class="suggestion">
                🎯 Your speaking speed is good.
                Try to maintain the same pace.
            </div>

            <div class="suggestion">
                🗣️ Reduce filler words such as
                "um", "uh" and "like".
            </div>

            <div class="suggestion">
                💪 Your confidence level is good.
                Maintain eye contact while presenting.
            </div>

            <div class="suggestion">
                🔊 Try to increase your voice
                clarity during important points.
            </div>

            <div class="suggestion">
                ⭐ Overall presentation performance
                is very good.
            </div>

        `;



        // KEY POINTS

        document.getElementById("keyPoints")
            .innerHTML = `

            <li>
                Good introduction and topic explanation.
            </li>

            <li>
                Speaking speed is within a good range.
            </li>

            <li>
                Positive sentiment detected.
            </li>

            <li>
                Confidence level is 84%.
            </li>

            <li>
                Overall presentation score is 87%.
            </li>

        `;


    }, 2000);

}



// ==========================================
// RECORD BUTTON
// ==========================================

let recording = false;


function startRecording() {

    let button =
        document.querySelector(".record-btn");

    let status =
        document.getElementById("recordStatus");


    if (!recording) {

        recording = true;


        button.innerText =
            "⏹️ Stop Recording";

        button.classList.add(
            "recording"
        );


        status.innerText =
            "🔴 Recording your speech... Click again to stop.";


    } else {

        recording = false;


        button.innerText =
            "🎙️ Record Speech";

        button.classList.remove(
            "recording"
        );


        status.innerText =
            "✅ Recording completed! You can now analyze it.";

    }

}



// ==========================================
// RESET
// ==========================================

function resetAnalysis() {

    document.getElementById("audioFile")
        .value = "";


    document.getElementById("fileName")
        .innerText = "";


    document.getElementById("speed")
        .innerText = "--";


    document.getElementById("filler")
        .innerText = "--";


    document.getElementById("emotion")
        .innerText = "--";


    document.getElementById("score")
        .innerText = "--";


    document.getElementById("sentiment")
        .innerText = "Not Analyzed";


    document.getElementById("sentimentText")
        .innerText =
        "Analyze your presentation to see the result.";


    document.getElementById("sentimentIcon")
        .innerText = "😊";


    document.getElementById("confidence")
        .innerText = "0%";


    document.getElementById("confidenceBar")
        .style.width = "0%";


    document.getElementById("transcript")
        .innerText =
        "Upload your presentation speech and click Analyze Presentation.";


    document.getElementById("suggestionList")
        .innerHTML = `

        <div class="suggestion">

            📌 Analyze your presentation to
            receive AI suggestions.

        </div>

    `;


    document.getElementById("keyPoints")
        .innerHTML = `

        <li>
            No analysis available yet.
        </li>

    `;


    document.getElementById("recordStatus")
        .innerText = "";

}



// ==========================================
// COPY TRANSCRIPT
// ==========================================

function copyTranscript() {

    let text =
        document.getElementById("transcript")
        .innerText;


    navigator.clipboard.writeText(text);


    alert(
        "Transcript copied successfully!"
    );

}