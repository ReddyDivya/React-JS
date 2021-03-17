import React, {Component} from 'react';
import './App.css';


function formatName(user)
{
    return user.firstName +" "+ user.lastName;
}

const user = 
{
    firstName : 'Divya',
    lastName : 'Reddy'
};

const elem = (<h1>Hello, {formatName(user)} </h1>)

class EmbedObj extends Component
{
    render()
    {
        return React.createElement('div', null, elem)
    }
}

export default EmbedObj;