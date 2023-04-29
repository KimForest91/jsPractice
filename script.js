let apiQuotes = [];

//Show New Quote
function newQuote() {
  //Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get Qoutes from API

async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes[12]);
    newQuote();
  } catch (error) {
    //Catch Error Here
    alert(error);
    //console.log(apiQuotes);
  }
}

//On Load
getQuotes();


