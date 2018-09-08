import "./App.css";

import React, { Component } from "react";
import { connect } from "react-redux";

import {
    addFavorite,
    addTag,
    fetchPosts,
    filterFavs,
    removeFavorite,
    removeTag,
    selectEvent
} from "./Actions";
import store from "./Store";
import Dialog from "./components/Dialog";
import EventList from "./components/EventList";
import Nav from "./components/Nav";
import RelatedEvents from "./components/RelatedEvents";
import TagList from "./components/Tags";
import dialogPolyfill from './polyfills';
import { chosenEvent, eventDays, filteredEvents, relatedEvents } from "./selectors";

const mapStateToProps = state => {

    const { tags, favorites, filter } = state;

    return {
        tags,
        favorites,
        filter,
        dialogEvent: chosenEvent(state),
        events: filteredEvents(state),
        relatedEvents: relatedEvents(state),
        days: eventDays(state)
    };
};

class App extends Component {
    componentDidMount() {
        store.dispatch(fetchPosts());

        dialogPolyfill.registerDialog(this.eventDialog);
    }

    get eventDialog(): HTMLDialogElement {
        const eventDialog = document.querySelector('dialog');

        return eventDialog;
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
        store.dispatch(selectEvent(id));
        this.eventDialog.showModal();
    }

    onHideDialog = () => {
        this.eventDialog.close();
    }

    render() {

        const relatedEvents = this.props.relatedEvents.length > 0 && (
            <RelatedEvents>
                <EventList
                    events={ this.props.relatedEvents }
                    onFav={ this.onFav }
                    onEventClick={ () => console.info("clicked") }
                    favs={ this.props.favorites }
                />
            </RelatedEvents>
        );

        return (
            <div>
                <Dialog
                    show={this.props.showDialog}
                    event={this.props.dialogEvent}
                    relatedEvents={relatedEvents}
                    onClose={this.onHideDialog}
                />
                <main className="app">
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
                        onEventClick={this.onShowDialog}
                    />
                </main>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(App);
