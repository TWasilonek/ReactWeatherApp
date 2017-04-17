/* globals Foundation, $ */
'use strict';

var React = require("react");


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
    // componentDidMount() is invoked immediately after a component is mounted
    componentDidMount () {
        // create the modal
        var modal = new Foundation.Reveal($('#error-modal'));
        // show the modal
        modal.open();
    },
    /* ====== USER METHODS ====== */
    
    /* ====== THE RENDER METHOD ====== */
    render () {
        var {title, message} = this.props;
        return (
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
    }
});


module.exports = ErrorModal;