const generateQuoteBtn = document.getElementById('quoteBtn');
const quoteOutput = document.getElementById('quoteOutput');
const authorOutput = document.getElementById('authorOutput');
generateQuoteBtn.addEventListener('click', generateQuote);
const quoteCard = document.getElementById('quoteCard');

// https://www.shopify.com/blog/motivational-quotes
const arrayOfQuotes = [
	{
		author: 'Albert Einstein',
		quote: 'We cannot solve problems with the kind of thinking we employed when we came up with them'
	},
	{
		author: ' Mark Twain',
		quote: 'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.'
	},
	{
		author: 'Eleanor',
		quote: 'When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.'
	},
	{
		author: 'Norman Vincent Peale',
		quote: 'When you change your thoughts, remember to also change your world.'
	},
	{
		author: 'Walter',
		quote: 'It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. '
	},
	{
		author: 'Diane McLaren',
		quote: 'Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.'
	},
	{
		author: 'Dale Carnegie',
		quote: 'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.'
	}
];

function generateQuote() {
    let random = Math.floor(Math.random() * arrayOfQuotes.length);
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
    authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;

	adjustCardHeight();
}

function adjustCardHeight() {
	// Set the card height to auto to fit the content
	quoteCard.style.height = 'auto';
  
	// After a brief delay, set the card height to its scrollHeight
	setTimeout(function () {
	  quoteCard.style.height = quoteCard.scrollHeight + 'px';
	}, 100);
  }