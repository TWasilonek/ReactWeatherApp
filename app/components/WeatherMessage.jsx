const React = require("react");


// var WeatherMessage = (props) => {
//     // retrieve properties that has been added to the components (in Weather.jsx)
//     // USING ES6 Destructuring
//     let {location, temp} = props;
    
//     return (
//         <div>
//             <p>It's {temp} degrees in {location} </p>
//         </div>
//     );  
// };

/* The same as above can be used without defining the 'props' argument 
    as ES6 allows for destructuring in the argument declaration
*/
var WeatherMessage = ({location, temp}) => {
    return (
        <div>
            <p className="text-center">It's {temp} &#8451; in {location} </p>
        </div>
    );  
};

module.exports = WeatherMessage;