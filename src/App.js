import "./App.css";

import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts, addTag, removeTag, addFavorite, removeFavorite } from "./Actions";
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

    onTagSelection = ({target: {name, checked}}) => {
        if (checked) {
            store.dispatch(addTag(name));
        } else {
            store.dispatch(removeTag(name));
        }
    }

    onFav = ({target: { id, checked }}) => {
        if (checked) {
            store.dispatch(addFavorite(id));
        } else {
            store.dispatch(removeFavorite(id));
        }
    }

    render() {
        const days = this.props.events.reduce((acc, event) => {
            acc.push(event.day);
            return acc;
        }, []);

        return (
            <main>
                <TagList tags={this.props.tags} onTagSelection={this.onTagSelection} />
                <Nav days={days} />
                <EventList events={this.props.events} tags={this.props.filter} onFav={this.onFav}/>
            </main>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(App);
