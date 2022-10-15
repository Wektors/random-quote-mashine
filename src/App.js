import React from "react";
import "./App.sass";

const randomColor = () => {
	let randomNum = Math.random() * 100 + 45;
	return "rgb(" + randomNum + ", " + randomNum + ", " + randomNum + ")";
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "",
			color: "rgb(25, 25, 25)",
		};
	}

	updateQuote = () => {
		fetch("https://api.quotable.io/random")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ ...data });
				this.setState({
					twitterLink:
						"https://twitter.com/intent/tweet?text=" +
						data.content.replace(/\s/gi, "%20"),
				});
				this.setState({
					color: randomColor(),
				});
			});
	};

	componentDidMount() {
		this.updateQuote();
	}

	render() {
		return (
			<div id="root">
				<div
					id="full"
					style={{
						backgroundColor: this.state.color,
					}}
				>
					<div id="quote-box">
						<div id="text">{this.state.content}</div>
						<div id="author">{this.state.author}</div>
						<div id="quoteFooter">
							<a id="tweet-quote" href={this.state.twitterLink} target="_top">
								<img
									id="icon"
									alt="twitter icon"
									src="https://www.pinclipart.com/picdir/big/138-1388876_2017-intertech-americas-corp- white-twitter-bird-transparent.png"
								/>
							</a>
							<div id="new-quote">
								<button
									onClick={this.updateQuote}
									style={{
										backgroundColor: this.state.color,
									}}
								>
									NEW QUOTE
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
