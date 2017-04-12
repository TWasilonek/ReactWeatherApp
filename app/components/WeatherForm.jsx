var React = require("react");

var WeatherForm = React.createClass({
    /* ====== REACT METHODS ====== */
    
    /* ====== USER METHODS ====== */
    onFormSubmit (e) {
        e.preventDefault();
        
        let location = this.refs.location.value;
        
        if ( location.length > 0 ) {
            this.refs.location.value = '';
            // onSearch has been added as a property of this component in Weather.jsx
            this.props.onSearch( location );
        }
    },
    /* ====== THE RENDER METHOD ====== */
    render () {
       return (
            <div>
                <form method="POST" onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="Enter city name" ref="location"/>
                    <button className="button expanded hollow" type="submit">Get Weather</button> 
                </form>
            </div>
        );
    } 
});


module.exports = WeatherForm;