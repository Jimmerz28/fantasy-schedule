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
import EventList from "./components/EventList";
import Nav from "./components/Nav";
import TagList from "./components/Tags";
import { filteredEvents } from "./selectors";

const mapStateToProps = state => {

    const { tags, favorites, filter } = state;

    return {
        tags,
        favorites,
        filter,
        events: filteredEvents(state),
        days: state.events.reduce((acc, event) => {
            acc.push(event.day);
            return acc;
        }, [])
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

    render() {
        return (
            <main>
                <div className="tag">
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
                />
            </main>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(App);
