/* globals Foundation, $ */
'use strict';

var React = require("react");


var ErrorModal = React.createClass({
    /* ====== REACT METHODS ====== */
    
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
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>Some Title</h4>
                <p>Our Error Message</p>
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