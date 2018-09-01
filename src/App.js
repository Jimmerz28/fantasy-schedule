import "./App.css";

import React, { Component } from "react";
import {
    addFavorite,
    addTag,
    fetchPosts,
    filterFavs,
    hideDialog,
    removeFavorite,
    removeTag,
    showDialog
} from "./Actions";
import { chosenEvent, eventDays, filteredEvents } from "./selectors";

import Dialog from "./components/Dialog";
import EventList from "./components/EventList";
import Nav from "./components/Nav";
import TagList from "./components/Tags";
import { connect } from "react-redux";
import store from "./Store";

const mapStateToProps = state => {

    const { tags, favorites, filter } = state;

    return {
        tags,
        favorites,
        filter,
        showDialog: state.dialog.show,
        dialogEvent: chosenEvent(state),
        events: filteredEvents(state),
        days: eventDays(state)
    };
};

class App extends Component {
    componentDidMount() {
        store.dispatch(fetchPosts());
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

    // @NOTE: Check if we can replace this with the native .showModal() API, however,
    // will need a polyfill since support is shitty on mobile
    onShowDialog = (id) => {
        store.dispatch(showDialog(id));
    }

    onHideDialog = () => {
        store.dispatch(hideDialog());
    }

    render() {
        return (
            <main className="app">
                <Dialog
                    show={this.props.showDialog}
                    event={this.props.dialogEvent}
                    onClose={this.onHideDialog}
                />
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
                    showDialog={this.onShowDialog}
                />
            </main>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(App);
