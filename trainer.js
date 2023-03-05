var card = document.getElementById("card");

var b = document.getElementById("buttonStart");
var bb = document.getElementById("buttonStartDakuon");
var bbb = document.getElementById("buttonStartEverything");

var an = document.getElementById("buttonAnswer");
an.style.opacity = 0;
an.style.transition = "opacity 0s ease-in-out";
an.disabled = true;
var tex = document.getElementById("hiraganaText");

var hiraganaRomanized = [
    "a", "i", "u", "e", "o",
    "ka", "ki", "ku", "ke", "ko",
    "sa", "shi", "su", "se", "so",
    "ta", "chi", "tsu", "te", "to",
    "na", "ni", "nu", "ne", "no",
    "ha", "hi", "fu", "he", "ho",
    "ma", "mi", "mu", "me", "mo",
    "ya", "yu", "yo",
    "ra", "ri", "ru", "re", "ro",
    "wa", "wo", "n"
];

var hiragana = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や", "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "を", "ん"
];

var hiraganaRomanizedDakuon = [
    "ga", "gi", "gu", "ge", "go",
    "za", "ji", "zu", "ze", "zo",
    "da", "de", "do",
    "ba", "bi", "bu", "be", "bo",
    "pa", "pi", "pu", "pe", "po"
];

var hiraganaDakuon = [
    "が", "ぎ", "ぐ", "げ", "ご",
    "ざ", "じ", "ず", "ぜ", "ぞ",
    "だ", "で", "ど",
    "ば", "び", "ぶ", "べ", "ぼ",
    "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"
];

var hiraganaRomanizedCombo = [
    "kya", "kyu", "kyo",
    "sha", "shu", "sho",
    "cha", "chu", "cho",
    "nya", "nyu", "nyo",
    "hya", "hyu", "hyo",
    "mya", "myu", "myo",
    "rya", "ryu", "ryo",
    "gya", "gyu", "gyo",
    "ja", "ju", "jo",
    "bya", "byu", "byo",
    "pya", "pyu", "pyo"
];

var hiraganaCombo = [
    "きゃ", "きゅ", "きょ",
    "しゃ", "しゅ", "しょ",
    "ちゃ", "ちゅ", "ちょ",
    "にゃ", "にゅ", "にょ",
    "ひゃ", "ひゅ", "ひょ",
    "みゃ", "みゅ", "みょ",
    "りゃ", "りゅ", "りょ",
    "ぎゃ", "ぎゅ", "ぎょ",
    "じゃ", "じゅ", "じょ",
    "びゃ", "びゅ", "びょ",
    "ぴゃ", "ぴゅ", "ぴょ"
];

var toShow = [

];

var currentSymbol = null;


function showRandom()
{
    an.disabled = false;
    an.removeEventListener("click", showRandom);
    an.style.transition = "opacity 1s ease-in-out";
    if (toShow.length == 0)
    {
        tex.innerHTML = "Done!";
        an.style.opacity = 0;
        an.disabled = true;
        return;
    }
    var a = toShow[Math.floor(Math.random() * toShow.length)];
    currentSymbol = a;
    tex.innerHTML = a[0];
    an.style.opacity = 0;
    an.style.opacity = 1;
    card.style.opacity = 0;
    card.style.opacity = 1;
    toShow.splice(toShow.indexOf(a), 1);
    an.innerHTML = "Answer";
    an.addEventListener("click", showAnswer);
}

function showAnswer()
{
    if (currentSymbol == null)
        return;
    an.removeEventListener("click", showAnswer);
    an.innerHTML = "Next";
    tex.innerHTML = currentSymbol[1];
    an.addEventListener("click", showRandom);
}

b.addEventListener("click", function() {
    card.style.opacity = 1;
    var i = 0;
    toShow = [];
    hiraganaRomanized.forEach(a => {
        toShow.push([a,hiragana[i]]);
        i++;
    });

    showRandom();
});

bb.addEventListener("click", function() {
    card.style.opacity = 1;
    var i = 0;
    toShow = [];
    hiraganaRomanized.forEach(a => {
        toShow.push([a,hiragana[i]]);
        i++;
    });
    i = 0;
    hiraganaRomanizedDakuon.forEach(a => {
        toShow.push([a,hiraganaDakuon[i]]);
        i++;
    });

    showRandom();
});

bbb.addEventListener("click", function() {
    card.style.opacity = 1;
    var i = 0;
    toShow = [];
    hiraganaRomanized.forEach(a => {
        toShow.push([a,hiragana[i]]);
        i++;
    });
    i = 0;
    hiraganaRomanizedDakuon.forEach(a => {
        toShow.push([a,hiraganaDakuon[i]]);
        i++;
    });
    i = 0;
    hiraganaRomanizedCombo.forEach(a => {
        toShow.push([a,hiraganaCombo[i]]);
        i++;
    });


    showRandom();
});