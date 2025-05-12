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
