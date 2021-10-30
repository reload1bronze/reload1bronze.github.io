const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "See the line where the sky meets the sea. It calls me.",
    author: "Moana (Moana)",
  },
  {
    quote: "Our fate lives within us; you only have to be brave enough to see it.",
    author: "Merida (Brave)",
  },
  {
    quote: "No matter how your heart is grieving, if you keep on believing, the dream that you wish will come true.",
    author: "Cinderella (Cinderella)",
  },
  {
    quote: "Love is putting someone else's needs before yours.",
    author: "Olaf (Frozen)",
  },
  {
    quote: "Anyone can be anything!",
    author: "Judith (Zootopia)",
  },
  {
    quote: "A single grain of rice can tip the scale. One man may be the difference between victory and defeat.",
    author: "The emperor (Mulan)",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;
