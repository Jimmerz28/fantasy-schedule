import "./App.css";

import React, { Component } from "react";
import { connect } from "react-redux";

import {
    addFavorite,
    addTag,
    fetchAll,
    filterFavs,
    removeFavorite,
    removeTag,
    selectEvent
} from "./Actions";
import storeConfig from "./Store";
import AllEvents from "./components/AllEvents";
import DaysList from "./components/DaysList";
import Dialog from "./components/Dialog";
import Favorite from "./components/Favorite";
import Nav from "./components/Nav";
import RelatedEvents from "./components/RelatedEvents";
import TagList from "./components/Tags";
import dialogPolyfill from './polyfills';
import { chosenEvent, eventDays, filteredEvents, relatedEvents } from "./selectors";

const { store } = storeConfig();

const mapStateToProps = state => {

    const { tags, favorites, filter, colors } = state;

    return {
        tags,
        colors,
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
        store.dispatch(fetchAll());

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
        const body = document.querySelector("body");
        body.classList.add("modal-open");

        store.dispatch(selectEvent(id));
        this.eventDialog.showModal();
    }

    onHideDialog = () => {
        const body = document.querySelector("body");
        body.classList.remove("modal-open");

        this.eventDialog.close();
    }

    render() {

        const relatedEvents = this.props.relatedEvents.length > 0 && (
            <RelatedEvents>
                <DaysList
                    events={ this.props.relatedEvents }
                    onFav={ this.onFav }
                    onEventClick={ () => console.info("clicked") }
                    favs={ this.props.favorites }
                    colors={this.props.colors}
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
                        <Favorite
                            onClick={this.onFilterFavs}
                            id="only-favs"
                            name="only-favs"
                            checked={this.props.filter.onlyFavs}
                        />
                    </div>
                    <TagList
                        tags={this.props.tags}
                        colors={this.props.colors}
                        onTagSelection={this.onTagSelection}
                        selectedTags={this.props.filter.tags}
                    />
                    <Nav days={this.props.days} />
                    <AllEvents>
                        <DaysList
                            events={this.props.events}
                            onFav={this.onFav}
                            favs={this.props.favorites}
                            onEventClick={this.onShowDialog}
                            colors={this.props.colors}
                        />
                    </AllEvents>
                </main>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(App);
