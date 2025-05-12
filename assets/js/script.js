document.addEventListener('DOMContentLoaded', function () { 
    const input = document.getElementById('inputText');
    const output = document.getElementById('outputText');
    const convertBtn = document.getElementById('convertBtn');
    const copyBtn = document.getElementById('copyBtn');

    const emojiMap = {
        "happy": ["😊", "😄", "😁", "😃"],
    "sad": ["😢", "😞", "😭", "🙁"],
    "love": ["❤️", "😍", "😘", "💕"],
    "laugh": ["😂", "🤣", "😆", "😹"],
    "angry": ["😠", "😡", "🤬"],
    "surprised": ["😲", "😯", "😮"],
    "cat": ["🐱", "😺", "😸"],
    "dog": ["🐶", "🐕", "🐩"],
    "lion": ["🦁"],
    "tiger": ["🐯", "🐅"],
    "cow": ["🐮", "🐄"],
    "pig": ["🐷", "🐖", "🐽"],
    "monkey": ["🐵", "🙈", "🙉", "🙊"],
    "rabbit": ["🐰", "🐇"],
     "bunny": ["🐰", "🐇"],
    "bear": ["🐻", "🐻‍❄️"],
    "panda": ["🐼"],
    "koala": ["🐨"],
    "elephant": ["🐘"],
    "horse": ["🐴", "🐎"],
    "sheep": ["🐑", "🐏"],
    "goat": ["🐐"],
    "deer": ["🦌"],
    "chicken": ["🐔", "🐤", "🐣"],
    "duck": ["🦆"],
    "frog": ["🐸"],
    "penguin": ["🐧"]
    "food": ["🍕", "🍔", "🍟", "🍩"],
    "computer": ["💻", "🖥️", "⌨️"],
    "phone": ["📱", "📞", "☎️"],
    "sun": ["☀️", "🌞"],
    "moon": ["🌙", "🌕"],
    "star": ["⭐", "🌟"],
    "party": ["🥳", "🎉", "🎊"],
    "music": ["🎵", "🎶", "🎧"],
    "sleep": ["😴", "💤"],
    "cool": ["😎", "🆒"],
    "fire": ["🔥", "💥"],
    "heart": ["❤️", "💓", "💖"],
    "clap": ["👏", "🙌"],
    "thumbs up": ["👍", "👌"],
    "thumbs down": ["👎"],
    "ok": ["👌", "👍"],
    "yes": ["👍", "✅"],
    "no": ["❌", "🙅"],
    "question": ["❓", "⁉️"],
    "idea": ["💡", "🧠"],
    "money": ["💰", "💵", "🤑"],
    "gift": ["🎁", "🛍️"],
    "ball": ["⚽", "🏀", "🏈", "⚾"],
    "car": ["🚗", "🚙", "🚘"],
    "bike": ["🚲", "🏍️"],
    "train": ["🚆", "🚂"],
    "airplane": ["✈️", "🛫", "🛬"],
    "ship": ["🚢", "🛳️"],
    "rocket": ["🚀"],
    "earth": ["🌍", "🌎", "🌏"],
    "tree": ["🌳", "🌲"],
    "flower": ["🌸", "🌹"],
    "rain": ["🌧️", "☔"],
    "snow": ["❄️", "⛄"],
    "wind": ["🌬️", "💨"],
    "lightning": ["⚡", "🌩️"],
    "coffee": ["☕", "🫖"],
    "tea": ["🍵", "🫖"],
    "beer": ["🍺", "🍻"],
    "wine": ["🍷"],
    "book": ["📚", "📖"],
    "pen": ["🖊️", "✏️"],
    "clock": ["⏰", "🕒"],
    "calendar": ["📅", "📆"],
    "camera": ["📷", "📸"],
    "movie": ["🎬", "🎥"],
    "tv": ["📺"],
    "game": ["🎮", "🕹️"],
    "gift": ["🎁", "🛍️"],
    "baby": ["👶"],
    "man": ["👨", "🧔"],
    "woman": ["👩", "👱‍♀️"],
    "family": ["👨‍👩‍👧", "👪"],
    "doctor": ["🧑‍⚕️"],
    "police": ["👮"],
    "teacher": ["🧑‍🏫"],
    "student": ["🧑‍🎓"],
    "artist": ["🧑‍🎨"],
    "chef": ["🧑‍🍳"],
    "engineer": ["🧑‍🔧", "👨‍🔧"],
    "construction": ["👷"],
    "pilot": ["👨‍✈️"],
    "scientist": ["🧑‍🔬"],
    "astronaut": ["🧑‍🚀"],
    "magician": ["🧙"],
    "king": ["🤴"],
    "queen": ["👸"],
    "zombie": ["🧟"],
    "alien": ["👽"],
    "robot": ["🤖"],
    "ghost": ["👻"],
    "devil": ["😈", "👿"],
    "angel": ["😇"],
    "handshake": ["🤝"],
    "pray": ["🙏"],
    "strong": ["💪"],
    "run": ["🏃"],
    "walk": ["🚶"],
    "dance": ["💃", "🕺"],
    "swim": ["🏊"],
    "medal": ["🥇", "🥈", "🥉"],
    "trophy": ["🏆"],
    "flag": ["🏳️", "🏴", "🚩"],
    "house": ["🏠", "🏡"],
    "building": ["🏢", "🏬"],
    "hospital": ["🏥"],
    "school": ["🏫"],
    "bank": ["🏦"],
    "money": ["💸", "💶", "💷"],
    "shopping": ["🛒", "🛍️"],
    "tools": ["🛠️", "🔧"],
    "warning": ["⚠️", "🚨"],
    "check": ["✅", "✔️"],
    "cross": ["❌", "✖️"],
    "up": ["⬆️"],
    "down": ["⬇️"],
    "left": ["⬅️"],
    "right": ["➡️"],
    "star": ["⭐", "🌟"],
    "sparkle": ["✨"],
    "bomb": ["💣"],
    "poop": ["💩"],
    "sleepy": ["😴", "😪"],
    "smile": ["🙂", "😊"],
    };

    // Handle multi-word phrases first
    function convertTextToEmoji(text) {
        let processedText = text.toLowerCase();

        // Replace phrases first
        Object.keys(emojiMap).forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
            if (processedText.includes(keyword)) {
                processedText = processedText.replace(regex, emojiMap[keyword].join(' '));
            }
        });

        // Split remaining words and handle unmatched
        const finalWords = processedText.split(' ').map(word => {
            const cleanWord = word.replace(/[^a-z]/gi, '');
            return emojiMap[cleanWord]?.join(' ') || word;
        });

        return finalWords.join(' ');
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
