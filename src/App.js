import React from "react";
import "./App.sass";

let quote = {};

async function updateQuote(data) {
	await fetch("https://api.quotable.io/random")
		.then((response) => response.json())
		.then((data) => console.log(data));
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: quote.content,
		};
	}

	componentDidMount() {
		updateQuote();
		this.setState(quote);
		console.log(quote);
	}
	render() {
		return (
			<div id="root">
				<div id="quote-box">
					<div id="text">Quote Text{updateQuote}</div>
					<div id="author">Quote author{this.state.content}</div>
					<div id="quoteFooter">
						<a
							id="tweet-quote"
							href="https://twitter.com/intent/tweet?text=Hello%20world"
							target="_top"
						>
							<img
								id="icon"
								alt="twitter icon"
								src="https://www.pinclipart.com/picdir/big/138-1388876_2017-intertech-americas-corp- white-twitter-bird-transparent.png"
							/>
						</a>
						<div id="new-quote">
							<button onClick={updateQuote}>NEW QUOTE</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
