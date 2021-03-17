import React, {Component} from 'react';
import './App.css';

const src = 'https://brandpalettes.com/wp-content/uploads/2018/10/Apple-300x300.png';
const Img = <img src={src} width='200'></img>

class EmbedImg extends Component
{
    render()
    {
        return React.createElement('div', null, Img);
    }
}

export default EmbedImg;