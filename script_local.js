//Show New Quote
function newQuote() {
  //Pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get Qoutes from API
