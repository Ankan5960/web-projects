const qoute=document.querySelector('#qoute')
const author=document.getElementById('author')
const btn=document.getElementById('new-qoute')

const arr=[{
    qoute: `'Three can keep a secret, if two of them are dead.'`,
    author:`"Benjamin <br> Franklin"`
}, {
    qoute: `'Tis better to have loved and lost than never to have loved at all.'`,
    author:`"Alfred Lord <br> Tennyson"`
}, {
    qoute: `'Three can keep a secret, if two of them are dead.'`,
    author:`"Alfred Lord <br> Tennyson"`
}, {
    qoute: `'To be or not to be, that is the question.'`,
    author:`"William <br> Shakespeare"`
}, {
    qoute:`'Go ahead, make my day.'`,
    author:`"Harry Callahan"`
}, {
    qoute:`'He travels the fastest who travels alone.'`,
    author:`"Rudyard Kipling"`
}, {
    qoute:`'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.'`,
    author:`"Martin Luther King"`
}, {
    qoute:"'If at first you don't succeed, try, try again.'",
    author:`"W. E. Hickson"`
}, {
    qoute:`'If you are going through hell, keep going.'`,
    author:`"Winston Churchill"`
}, {
    qoute:`'If you want something done right, do it yourself.'`,
    author:`"Charles-Guillaume Étienne"`
}
]
btn.addEventListener('click', function(){
    let random= Math.floor(Math.random() * arr.length)
    qoute.innerText=arr[random].qoute;
    author.innerHTML=arr[random].author;
})