import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner'

import { fetchQuotes } from '../actions';

import QuotesSingle from "./QuotesSingle";
import QuotesTwoPart from './QuotesTwoPart';





const KanyeQuotes = props => {
    console.log('CM')
    useEffect(() => {
        props.fetchQuotes();
    }, [])

    console.log('CJR')

    if (props.isFetching) {
        return <h2>Loading Jokes...</h2>

    }

    // const { joke } = props.KanyeQuotes;

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.kanyeQuotes.type === 'single' ?
                <QuotesSingle joke={props.kanyeQuotes.joke} /> :
                <QuotesTwoPart setup={props.kanyeQuotes.setup} deliver={props.kanyeQuotes.delivery} />
            }
            <div className="button">
                <button onClick={() => props.kanyeQuotes.QuotesSingle}>Grab Joke</button>
            </div>


        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        kanyeQuotes: state.kanyeQuotes,
        isFetching: state.isFetching,
        error: state.error

    };
};

export default connect(
    mapStateToProps,
    { fetchQuotes }
)(KanyeQuotes);

