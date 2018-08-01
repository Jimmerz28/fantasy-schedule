import "./App.css";

import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "./Actions";
import store from "./Store";
import EventList from "./components/EventList";
import TagList from "./components/Tags";
import Nav from "./components/Nav";

const mapStateToProps = state => {
    return {
        ...state
    };
};

class App extends Component {
    componentDidMount() {
        store.dispatch(fetchPosts());
    }

    render() {
        return (
            <main>
                <TagList tags={this.props.tags} />
                <Nav days={this.props.days} />
                <EventList events={this.props.events} />
            </main>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(App);
