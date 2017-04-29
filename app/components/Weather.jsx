'use strict';
// import { browserHistory } from 'react-router';

const React           = require("react");
const WeatherForm     = require("WeatherForm");
const WeatherMessage  = require("WeatherMessage");
const ErrorModal      = require("ErrorModal");
const darkSky         = require("darkSky");

const Weather = React.createClass({
    /* ====== REACT METHODS ====== */
    // If you DON'T USE ES6, you set the initial state with getInitialState method
    getInitialState () {
        return {
           isLoading: false,
           errorMessage: undefined
        }
    },
    // if there is any location already set up in the query string
    // (shoudl happen when clicking the example places)
    componentDidMount () {
        var location = this.props.location.query.location;
        
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = "#/"
        }
    },
    
    // if the location query comes as a prop from another component (like the Nav form)
    // the search won't trigger as it's not a value of the state object.
    // To make it trigger you need to listen to the event when new props come to the component
    componentWillReceiveProps ( newProps ) {
        var location = newProps.location.query.location;
        
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = "#/"
        }
    },
    
    /* ====== USER METHODS ====== */
    handleSearch (location) {
        var _self = this;
        
        // All props of the state should be initially set to something.
        _self.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });
        
        darkSky.getTemp(location)
            .then( temp => {
                // console.log(temp);
                _self.setState({
                    isLoading: false,
                    location: location,
                    temp: parseInt(temp.data.currently.temperature).toString()
                })
            })
            .catch( err => {
                console.log('Clientside error at Weather.jsx: ', err);
                // console.warn('type of err.response', typeof err.message);
                if (err.message) {
                    _self.setState({
                      isLoading: false,
                      errorMessage: err.message
                    });
                }
            });
    },
    
    /* ====== THE RENDER METHOD ====== */
    render () {
        // attribues added in the getInitialState method can be access with this.state.propertyName
        // Additionally, if a property added to this.state will be change using this.setState, 
        // React will re-render the component to reflect the new value
        // USING ES6 Destructuring
        let {isLoading, location, temp, errorMessage} = this.state;
        
        // renderMessage displays differenet content based on
        // different state parameters
        function renderMessage () {
            if ( isLoading ) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={ location } temp = { temp } />
            }
        }
        
        function renderError () {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={ errorMessage }/>
                );
            }
        }
        
        return ( 
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={ this.handleSearch } />
                {/* The renderMessage() function conditionally loads content */}
                { renderMessage() }
                { renderError() }
            </div>
        );
    }
});


module.exports = Weather;