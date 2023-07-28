// console.log("scripworks")

uppercase.addEventListener("click",()=>{
    console.log("transforming to uppercase")
    imptext.value=imptext.value.toUpperCase();
})

lowercase.addEventListener("click",()=>{
    console.log("transforming to uppercase")
    imptext.value=imptext.value.toLowerCase();
})

removespace.addEventListener("click",()=>{
    console.log("rmove extra spac")
    imptext.value=imptext.value.replace(/\s+/g,' ').trim();
})
removespace.addEventListener("click",()=>{
    console.log("rmove extra line")
    imptext.value=imptext.value.replace(/\n+/g,'\n').trim();
})


imptext.addEventListener("input",() => {
  console.log("changed")
  charcount.innerText=imptext.value.length
  wordcount.innerText=imptext.value.trim().split(" ").length
}
)
// imptext.addEventListener("input", () => {
//     console.log("changed");
//     charcount.innerText = imptext.value.length;
//     wordcount.innerText = imptext.value.trim().split(" ").length;
    
//     // Perform sentiment analysis using TextBlob
//     const sentimentScore = TextBlob(imptext.value).sentiment.polarity;
//     const sentimentText = getSentimentText(sentimentScore);
//     document.getElementById("sentiment").innerText = sentimentText;
// });

// function getSentimentText(score) {
//     if (score > 0.2) {
//         return "Positive";
//     } else if (score < -0.2) {
//         return "Negative";
//     } else {
//         return "Neutral";
//     }
// }


// Rest of your existing code...

// // Function to perform sentiment analysis using TextBlob
// function performSentimentAnalysis(text) {
//     const blob = new TextBlob(text);
//     return blob.sentiment.polarity;
// }

// // Function to get sentiment label based on polarity score
// function getSentimentLabel(score) {
//     if (score > 0.2) {
//         return "Positive";
//     } else if (score < -0.2) {
//         return "Negative";
//     } else {
//         return "Neutral";
//     }
// }

// // Update sentiment result based on the provided text
// function updateSentimentResult(text) {
//     const sentimentScore = performSentimentAnalysis(text);
//     const sentimentLabel = getSentimentLabel(sentimentScore);
//     document.getElementById("sentimentResult").innerText = sentimentLabel;
// }

// // Listen for changes in the input text area for Text Analyzer
// imptext.addEventListener("input", () => {
//     console.log("changed");
//     charcount.innerText = imptext.value.length;
//     wordcount.innerText = imptext.value.trim().split(" ").length;

//     // Perform sentiment analysis for Text Analyzer textarea
//     const text = imptext.value;
//     updateSentimentResult(text);
// });

// // Listen for changes in the input text area for Sentiment Analysis
// si.addEventListener("input", () => {
//     console.log("sentence changed");

//     // Perform sentiment analysis for the specified sentence textarea
//     const text = si.value;
//     updateSentimentResult(text);
// });

// // Uppercase button click event
// document.getElementById("uppercase").addEventListener("click", () => {
//     const text = imptext.value;
//     imptext.value = text.toUpperCase();
//     updateSentimentResult(text.toUpperCase());
// });

// // Lowercase button click event
// document.getElementById("lowercase").addEventListener("click", () => {
//     const text = imptext.value;
//     imptext.value = text.toLowerCase();
//     updateSentimentResult(text.toLowerCase());
// });

// // Removespace button click event
// document.getElementById("removespace").addEventListener("click", () => {
//     const text = imptext.value;
//     imptext.value = text.replace(/\s+/g, ' ').trim();
//     updateSentimentResult(text.replace(/\s+/g, ' ').trim());
// });

// function updateSentimentResult(text, elementId) {
//     const sentimentScore = performSentimentAnalysis(text);
//     const sentimentLabel = getSentimentLabel(sentimentScore);
//     document.getElementById(elementId).innerText = sentimentLabel;
// }

// // Listen for changes in the input text area for Text Analyzer
// imptext.addEventListener("input", () => {
//     console.log("changed");
//     charcount.innerText = imptext.value.length;
//     wordcount.innerText = imptext.value.trim().split(" ").length;

//     // Perform sentiment analysis for Text Analyzer textarea
//     const text = imptext.value;
//     updateSentimentResult(text, "sentimentResult");
// });

// // Listen for changes in the input text area for Sentiment Analysis
// si.addEventListener("input", () => {
//     console.log("sentence changed");

//     // Perform sentiment analysis for the specified sentence textarea
//     const text = si.value;
//     updateSentimentResult(text, "sentimentResultSentence");
// });

// // Uppercase button click event
// document.getElementById("uppercase").addEventListener("click", () => {
//     const text = imptext.value;
//     imptext.value = text.toUpperCase();
//     updateSentimentResult(text.toUpperCase(), "sentimentResult");
// });

// // Lowercase button click event
// document.getElementById("lowercase").addEventListener("click", () => {
//     const text = imptext.value;
//     imptext.value = text.toLowerCase();
//     updateSentimentResult(text.toLowerCase(), "sentimentResult");
// });

// // Removespace button click event
// document.getElementById("removespace").addEventListener("click", () => {
//     const text = imptext.value;
//     imptext.value = text.replace(/\s+/g, ' ').trim();
//     updateSentimentResult(text.replace(/\s+/g, ' ').trim(), "sentimentResult");
// });

// Define a function to perform sentiment analysis using TextBlob
// function performSentimentAnalysis(text) {
//     const blob = new TextBlob(text);
//     return blob.sentiment.polarity;
// }

// // Function to get sentiment label based on polarity score
// function getSentimentLabel(score) {
//     if (score > 0.2) {
//         return "Positive";
//     } else if (score < -0.2) {
//         return "Negative";
//     } else {
//         return "Neutral";
//     }
// }

// // Function to update the sentiment display
// function updateSentimentDisplay(text) {
//     const sentimentScore = performSentimentAnalysis(text);
//     const sentimentLabel = getSentimentLabel(sentimentScore);
//     document.getElementById("sentiment").innerText = sentimentLabel;
// }

// // Listen for changes in the input text area
// document.getElementById("imptext").addEventListener("input", () => {
//     const text = document.getElementById("imptext").value;
//     const wordCount = text.trim().split(" ").length;
//     const charCount = text.length;

//     document.getElementById("wordcount").innerText = wordCount;
//     document.getElementById("charcount").innerText = charCount;

//     // Perform sentiment analysis and update sentiment display
//     updateSentimentDisplay(text);
// });

// // Uppercase button click event
// document.getElementById("uppercase").addEventListener("click", () => {
//     const text = document.getElementById("imptext").value;
//     document.getElementById("imptext").value = text.toUpperCase();
//     updateSentimentDisplay(text.toUpperCase()); // Update sentiment display after transformation
// });

// // Lowercase button click event
// document.getElementById("lowercase").addEventListener("click", () => {
//     const text = document.getElementById("imptext").value;
//     document.getElementById("imptext").value = text.toLowerCase();
//     updateSentimentDisplay(text.toLowerCase()); // Update sentiment display after transformation
// });

// // Removespace button click event
// document.getElementById("removespace").addEventListener("click", () => {
//     const text = document.getElementById("imptext").value;
//     document.getElementById("imptext").value = text.replace(/\s+/g, ' ').trim();
//     updateSentimentDisplay(text.replace(/\s+/g, ' ').trim()); // Update sentiment display after transformation
// });
