const quotes = [
    {
      quote:"일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다.",
      author:"-짐 론"
    },
    {
        quote:"신뢰의 이유는 안전하거나 확실해서가 아니라, 위험을 감수할 용의가 있어서이다.",
        author:"-미상"
    },
    {
    quote:"기다리는 사람에게 좋은 일이 생기지만, 찾아나서는 사람에게는 더 좋은 일이 생긴다.",
    author:"-하운드"
    },
    {
    quote:"열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
    author:"-윈스턴 처칠"
    },
    {
    quote:"추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다",
    author:"-월트 디즈니"
    }
];

const ranQuote = quotes[Math.floor(parseInt(Math.random()*quotes.length))].quote
const ranAuthor = quotes[Math.floor(parseInt(Math.random()*quotes.length))].author

const quoteEl = document.querySelector("#quote")
const authorEl = document.querySelector("#author")

quoteEl.innerText=`${ranQuote}`
authorEl.innerText=`${ranAuthor}`
console.log(quoteEl)
