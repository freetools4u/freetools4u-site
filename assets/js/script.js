// Emoji mapping for basic text-to-emoji conversion
const emojiMap = {
    "happy": "😊",
    "sad": "😞",
    "love": "❤️",
    "heart": "💖",
    "star": "⭐",
    "fire": "🔥",
    "clap": "👏",
    "laugh": "😂",
    "cool": "😎",
    "thumb": "👍",
    "wink": "😉",
    "coffee": "☕",
    "sun": "🌞",
    "moon": "🌙",
    "earth": "🌍"
};

// Function to convert text to emojis
function convertTextToEmojis() {
    const inputText = document.getElementById('inputText').value;
    let convertedText = inputText;

    // Loop through emoji map and replace the text with corresponding emoji
    for (const [word, emoji] of Object.entries(emojiMap)) {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        convertedText = convertedText.replace(regex, emoji);
    }

    // Update output text area with converted emojis
    document.getElementById('outputText').value = convertedText;
}

// Function to copy the converted emojis to clipboard
function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Converted emojis copied to clipboard!');
}

// Event listeners for the buttons
document.getElementById('convertBtn').addEventListener('click', convertTextToEmojis);
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
