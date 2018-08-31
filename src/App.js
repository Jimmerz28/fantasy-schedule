import "./App.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import {
    addFavorite,
    addTag,
    fetchPosts,
    filterFavs,
    removeFavorite,
    removeTag
} from "./Actions";
import store from "./Store";
import Dialog from "./components/Dialog";
import EventList from "./components/EventList";
import Nav from "./components/Nav";
import TagList from "./components/Tags";
import { eventDays, filteredEvents } from "./selectors";

const mapStateToProps = state => {

    const { tags, favorites, filter } = state;

    return {
        tags,
        favorites,
        filter,
        events: filteredEvents(state),
        days: eventDays(state)
    };
};

class App extends Component {
    componentDidMount() {
        store.dispatch(fetchPosts());
    }

    state = {
        showDialog: false,
        currentEvent: ""
    }

    onTagSelection = ({ target: { name, checked } }) => {
        if (checked) {
            store.dispatch(addTag(name));
        } else {
            store.dispatch(removeTag(name));
        }
    };

    onFav = ({ target: { id, checked } }) => {
        if (checked) {
            store.dispatch(addFavorite(id));
        } else {
            store.dispatch(removeFavorite(id));
        }
    };

    onFilterFavs = ({ target: { checked } }) => {
        store.dispatch(filterFavs(checked));
    };

    onShowDialog = (id) => {
        this.setState({
            showDialog: true,
            currentEvent: id
        });
    }

    render() {
        return (
            <main className="app">
                <Dialog show={this.state.showDialog} event={this.state.currentEvent} />
                <div className="tag -fav">
                    <label htmlFor="only-favs">Show Only Favorites</label>
                    <input
                        type="checkbox"
                        name="favs"
                        id="only-favs"
                        onChange={this.onFilterFavs}
                    />
                </div>
                <TagList
                    tags={this.props.tags}
                    onTagSelection={this.onTagSelection}
                    selectedTags={this.props.filter.tags}
                />
                <Nav days={this.props.days} />
                <EventList
                    events={this.props.events}
                    onFav={this.onFav}
                    favs={this.props.favorites}
                    showDialog={ this.onShowDialog }
                />
            </main>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(App);
