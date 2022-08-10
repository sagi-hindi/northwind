import { Component } from "react";
import "./Suggestions.css";

interface SuggestionsProps {
    header: string;
	
}

interface SuggestionsState {
    suggestions: string;
	
}

class Suggestions extends Component<SuggestionsProps, SuggestionsState> {

    public constructor(props: SuggestionsProps) {
        super(props);
        this.state = {
            suggestions: ""
			
        };
    }

    private makeSuggestions = () => {
        this.setState({suggestions: "hello world! - CranBerries",})

    }

    public render(): JSX.Element {
        return (
            <div className="Suggestions Box">
                <p>
                {this.props.header}
                {/* <button onClick={this.makeSuggestions.bind(this)}>Suggest Products</button> */}
                <button onClick={this.makeSuggestions}>Suggest Products</button>
                <span>Suggestions: {this.state.suggestions}</span>
                </p>
				
            </div>
        );
    }
}

export default Suggestions;
