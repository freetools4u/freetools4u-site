document.getElementById("convertBtn").addEventListener("click", function () {
    var inputText = document.getElementById("inputText").value;

    // Define emoji replacements
    const emojiDictionary = {
        love: "❤️",
        pizza: "🍕",
        happy: "😊",
        heart: "💖",
        thumbsUp: "👍",
        cat: "🐱",
        dog: "🐶",
        star: "⭐"
    };

    // Convert text to emojis
    var outputText = inputText.replace(/\b(love|pizza|happy|heart|thumbsUp|cat|dog|star)\b/gi, function (match) {
        return emojiDictionary[match.toLowerCase()] || match;
    });

    document.getElementById("outputText").value = outputText;
});

document.getElementById("copyBtn").addEventListener("click", function () {
    var outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Text copied to clipboard!");
});
