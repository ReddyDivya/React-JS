import React, {Component} from 'react';
import ReactDOM from 'react-dom';


function fnDisplayDate()
{
    return new Date() +"\t"+ new Date().toLocaleTimeString();
}

const elem = <div><h1>Date and Time</h1><p>{fnDisplayDate()}</p></div>;

setInterval(fnDisplayDate, 1000);

class DisplayDate extends Component
{
    render()
    {
        return (
            //This is JSX
           React.createElement('div', null, elem)
        );
    }
}

export default DisplayDate;