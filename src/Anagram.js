import React from "react";
import compare from "./compare";

class Anagram extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			anagram: false
		}
	}
	onSubmit(event){
		event.preventDefault();
		const value1 = this.input1.value;
		const value2 = this.input2.value;
		if(compare(value1, value2)){
			// do something
			this.setState({anagram: true})
		} else{
			// do something
			this.setState({anagram: false})
		}
	}
	render() {
		return (
			<div className="anagram">
				<form onSubmit={event => this.onSubmit(event)}>
					<input type="text" placeholder="word 1" ref={element => this.input1 = element} />
					<br />
					<input type="text" placeholder="word 2"  ref={element => this.input2 = element} />
					<br />

					<button type="submit">Anagram</button>
				</form>

				<p>ANAGRAM TEST: {this.state.anagram?"True":"False"}</p>
			</div>
		);
	}
}

export default Anagram;
