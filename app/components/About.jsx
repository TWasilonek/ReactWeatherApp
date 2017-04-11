const React = require("react");

// const About = React.createClass({
//     render: function () {
//         return ( 
//             <h3>About Component</h3>
//         );
//     }
// });


/* Stateless functional component */
/*
 * If you have a component that only renterds something to the screen,
 * without doing anything else, and without maintaining any state
 * there is a shorter syntax you can use.
*/
const About = (props) => {
    return ( 
        <div>
            <h1 className="text-center">About</h1>
            <div className="media-object">
                <div className="media-object-section">
                    <div className="thumbnail">
                      <img src="/images/react.svg" alt="React logo"/>
                    </div>
                </div>
                <div className="media-object-section">
                    <h4>React Weather App</h4>
                    <p>This is an app for getting weather from the Open Weather Maps website. It is based on the <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/">Complete React Web App Developer Course</a>, which I highly recommend for learning React.</p>
                </div>
            </div>
        </div>
    );
}


module.exports = About;