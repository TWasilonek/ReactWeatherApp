'use strict';

var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
    /* ====== REACT METHODS ====== */
    // If you DON'T USE ES6, you set the initial state with getInitialState method
    getInitialState () {
        return {
           isLoading: false
        }
    },
    
    /* ====== USER METHODS ====== */
    handleSearch (location) {
        var _self = this;
    
        _self.setState({
            isLoading: true
        });
        
        openWeatherMap.getTemp(location).then(function(temp) {
            _self.setState({
                isLoading: false,
                location: location,
                temp: temp
            }, function (err) {
                _self.setState({
                   isLoading: false
                });
                console.log(err);
            });
        });
    },
    
    /* ====== THE RENDER METHOD ====== */
    render () {
        // attribues added in the getInitialState method can be access with this.state.propertyName
        // Additionally, if a property added to this.state will be change using this.setState, 
        // React will re-render the component to reflect the new value
        // USING ES6 Destructuring
        let {isLoading, location, temp} = this.state;
        
        // renderMessage displays differenet content based on
        // different state parameters
        function renderMessage () {
            if ( isLoading ) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={ location } temp = { temp } />
            }
        }
        
        return ( 
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={ this.handleSearch } />
                {/* The renderMessage() function conditionally loads content */}
                { renderMessage() }
            </div>
        );
    }
});


module.exports = Weather;