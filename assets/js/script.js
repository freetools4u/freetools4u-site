document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('inputText');
    const output = document.getElementById('outputText');
    const convertBtn = document.getElementById('convertBtn');
    const copyBtn = document.getElementById('copyBtn');

    const emojiMap = {
        hello: "👋",
        love: "❤️",
        happy: "😊",
        sad: "😢",
        fire: "🔥",
        cool: "😎",
        smile: "😄",
        star: "⭐",
        heart: "💖",
        like: "👍",
        angry: "😡",
        laugh: "😂",
        cry: "😭",
        wow: "😲",
        party: "🎉"
    };

    function convertTextToEmoji(text) {
        return text.split(' ').map(word => {
            const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
            return emojiMap[cleanWord] || word;
        }).join(' ');
    }

    convertBtn.addEventListener('click', function () {
        const userInput = input.value;
        const emojiText = convertTextToEmoji(userInput);
        output.value = emojiText;
    });

    copyBtn.addEventListener('click', function () {
        output.select();
        document.execCommand('copy');
        alert('Copied to clipboard!');
    });
});
