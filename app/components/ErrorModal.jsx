/* globals Foundation, $ */
'use strict';

var React = require("react");
var ReactDOM = require("react-dom");
var ReactDOMServer = require('react-dom/server');


var ErrorModal = React.createClass({
    /* ====== REACT METHODS ====== */
    // In React without ES6 you need to use the getDefaultProps func
    getDefaultProps: function () {
        return {
            title: 'Error'
        };  
    },
    // Set the type of default props and define which are required
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    // componentDidMount() is invoked immediately after a component is mounted the first time
    componentDidMount () {
         // Rendering the contents of the component moved here
        var {title, message} = this.props;
        console.log('title: ',title, 'message: ', message);
        
        // create a variable containing the Component markup
        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{ title }</h4>
                <p>{ message }</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );
        
        // * Foundation fix - remove any hidden overlay bg created previously
        $('.reveal-ovarlay').remove();
        
        // Turn the modalMarkup to a string
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        // Add the string with our template to the modal html
        $(ReactDOM.findDOMNode(this)).html($modal);
        
        // create the modal
        var modal = new Foundation.Reveal($('#error-modal'));
        // show the modal
        modal.open();
    },
    /* ====== USER METHODS ====== */
   
    /* ====== THE RENDER METHOD ====== */
    render () {
        
        // Foundation manipulates the DOM of the modal too,
        // so I don't want to interfere with that.
        // Render just an empty div in the beginning, the rest of the stuff will
        // be renered when the 'componentDidMount' event is triggered
        return (
            <div>
            </div>
        );
    }
});


module.exports = ErrorModal;