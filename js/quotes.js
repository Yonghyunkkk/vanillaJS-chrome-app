const quotes = [
    {
        quote: "Time is money.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        author: "Mark Twain",
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
    },
    {
        quote: "The opposite of love is not hate; it’s indifference.",
        author: "Elie Wiesel",
    },
    {
        quote: "Life is like a box of chocolates. You never know what you’re going to get.",
        author: "Forrest Gump",
    },
    {
        quote: "He that falls in love with himself will have no rivals.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan",
    },
    {
        quote: "If you judge people, you have no time to love them.",
        author: "Mother Teresa",
    },
    {
        quote: "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.",
        author: "Mark Twain",
    },
    {
        quote: "People are just as happy as they make up their minds to be.",
        author: "Abraham Lincoln",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;