import React from "react";
import "./App.sass";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "",
		};
	}

	updateQuote = () => {
		fetch("https://api.quotable.io/random")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ ...data });
			});
	};

	componentDidMount() {
		this.updateQuote();
	}

	render() {
		return (
			<div id="root">
				<div id="quote-box">
					<div id="text">{this.state.content}</div>
					<div id="author">{this.state.author}</div>
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
							<button onClick={this.updateQuote}>NEW QUOTE</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
