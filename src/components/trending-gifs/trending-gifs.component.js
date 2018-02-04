import React, { Component } from "react";
import Proptypes from "prop-types";
import "./trending-gifs.styles.css";
import GifDisplay from "./../gif-display/gif-display.component";

class TrendingGifs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrendingVisible: true,
        }
    }

    toggleVisibilityOfTrending() {
        this.setState({
            isTrendingVisible: !this.state.isTrendingVisible
        });
    }

    render() {
        return <div className="trending">
            {
                (this.props.trendingGifs.length > 0
                    && this.state.isTrendingVisible
                )
                ? <div className="trending__grid">
                    {
                        this.props.trendingGifs.map((gif, index) => {
                            return <div className="trending__item" key={index}>
                                <GifDisplay gif={gif} />
                            </div>
                        })
                    }
                </div>
                : ""
            }
            <span
                className="trending__show-hide"
                onClick={this.toggleVisibilityOfTrending.bind(this)}
            >
            {
                (this.state.isTrendingVisible)
                ? "hide trending"
                : "show trending"
            }
            </span>
        </div>
    }
}

TrendingGifs.prototypes = {
    trendingGifs: Proptypes.array
}

export default TrendingGifs;