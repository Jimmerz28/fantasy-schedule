import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { fetchPosts } from "./Actions";
import store from "./Store";

const mapStateToProps = state => {
    return {
        events: state.events
    }
}

class App extends Component {

    componentDidMount() {
        store.dispatch(fetchPosts());
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(App);
