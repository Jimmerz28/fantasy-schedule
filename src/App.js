import "./App.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { min, max, format, parse, isSameDay } from "date-fns";

import { fetchPosts } from "./Actions";
import store from "./Store";

const mapStateToProps = state => {
    return {
        ...state
    };
};

type State = {
    selectedDate: Date,
    selectedType: String,
    minDate: Date,
    maxDate: Date
};

class App extends Component<State> {
    state = {
        selectedDate: Date.now(),
        selectedType: "",
        minDate: Date.now(),
        maxDate: Date.now()
    };

    componentDidMount() {
        store.dispatch(fetchPosts());
    }

    componentDidUpdate(prevProps) {
        if (this.props.dates.length !== prevProps.dates.length) {
            const maxDate = format(max(this.props.dates), "YYYY-MM-dd");
            const minDate = format(min(this.props.dates), "YYYY-MM-dd");

            this.setState({
                minDate,
                maxDate,
                selectedDate:
                    this.state.selectedDate < min(this.props.dates)
                        ? minDate
                        : format(this.state.selectedDate, "YYYY-MM-dd")
            });
        }
    }

    onDateChange = event => {
        this.setState({ selectedDate: event.target.value });
    };

    render() {
        return (
            <main>
                <form>
                    <input
                        type="date"
                        max={this.state.maxDate}
                        min={this.state.minDate}
                        value={this.state.selectedDate}
                        onChange={this.onDateChange}
                    />
                    <select>
                        {this.props.tags.map(tag => (
                            <option key={tag}>{tag}</option>
                        ))}
                    </select>
                </form>
                <ul>
                    {this.props.events
                        .filter(event => {
                            const parsed = parse(
                                event["Start Date & Time"],
                                "MM/dd/yyyy hh:mm aaa",
                                new Date()
                            );

                            return isSameDay(parsed, this.state.selectedDate);
                        })
                        .map(event => (
                            <li key={event["Game ID"]}>
                                <p>{event["Title"]}</p>
                                <p>{event["Location"]}</p>
                                <p>{event["Event Type"]}</p>
                                <p>{event["Start Date & Time"]}</p>
                            </li>
                        ))}
                </ul>
            </main>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(App);
