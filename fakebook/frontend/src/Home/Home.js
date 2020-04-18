// Libraries
import React, { Component } from "react";
// Components
import Head from "./Components/Head";
import Body from "./Components/Body";
import Composer from "./Components/Composer";
// CSS
import "./Styles/LightModeColors.css";
import "./Styles/DarkModeColors.css";
import "./Styles/Composer.css";
import "./Styles/Special.css";

export default class Home extends Component {
    state = { isComposerShown: false };

    showHideComposer = () => this.setState({ isComposerShown: !this.state.isComposerShown });

    render = () => (
        <div>
            <Head />
            <Body showHideComposer={this.showHideComposer} />
            {this.state.isComposerShown ? <Composer showHideComposer={this.showHideComposer} /> : null}
        </div>
    );
};