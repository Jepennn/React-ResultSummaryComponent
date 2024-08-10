import Sense from './Sense';
import reactionIcon from '../images/icon-reaction.svg';
import memoryIcon from '../images/icon-memory.svg';
import verbalIcon from '../images/icon-verbal.svg';
import visualIcon from '../images/icon-visual.svg';

//Gets data from data.json
import data from '../data.json';

//Store our icons as Object with key value pairs to be used in the Sense component
const iconMap = {
    Reaction: reactionIcon,
    Memory: memoryIcon,
    Verbal: verbalIcon,
    Visual: visualIcon,
};

//Function to get color based on category
function getColor(category) {
    switch (category) {
        case 'Reaction':
            return 'red';
        case 'Memory':
            return 'yellow';
        case 'Verbal':
            return 'green';
        case 'Visual':
            return 'blue';
        default:
            return '';
    }
}

export default function WhiteSquare() {
    const senseComponents = data.map((item, index) => (
        <Sense
            key={index}
            icon={iconMap[item.category]}
            title={item.category}
            score={item.score}
            color={getColor(item.category)}
        />
    ));

    return (
        <div className="white-square">
            <h3>Summary</h3>
            {senseComponents}
            <button type="button" className="retake-test-button">Continue</button>
        </div>
    );
}


// import React from 'react';
// import Sense from './Sense';
// import reactionIcon from '../images/icon-reaction.svg';
// import memoryIcon from '../images/icon-memory.svg';
// import verbalIcon from '../images/icon-verbal.svg';
// import visualIcon from '../images/icon-visual.svg';

// //Gets data from data.json
// import data from '../data.json';

//     //Store our icons as Object with key value pairs to be used in the Sense component
//     const iconMap = {
//         Reaction: reactionIcon,
//         Memory: memoryIcon,
//         Verbal: verbalIcon,
//         Visual: visualIcon,
//     };

//     //Function to get color based on category
//     function getColor(category) {
//     switch (category) {
//         case 'Reaction':
//         return 'red';
//         case 'Memory':
//         return 'yellow';
//         case 'Verbal':
//         return 'green';
//         case 'Visual':
//         return 'blue';
//         default:
//         return '';
//     }
// };

//     export default function WhiteSquare() {
    
        
//     const senseComponents = data.map((item, index) => (
//         <Sense
//         key={index}
//         icon={iconMap[item.category]}
//         title={item.category}
//         score={item.score}
//         color={getColor(item.category)}
//         />
//     ));

//     return (
//         <div className="white-square">
//         <h3>Summary</h3>
//         {senseComponents}
//         <button type="button" className="retake-test-button">Continue</button>
//         </div>
//     );
// };