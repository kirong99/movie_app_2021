// import React from 'react';
import PropTypes from 'prop-types'

function Food({name, picture,rating}) {
    return (
        <div>
            <h2>I Like {name} </h2>
            <h4>{rating}/5.0</h4>
            <img src = {picture} alt={name}/>
        </div>
    );
}

const foodILike = [
    {
        id: 1,
        name : 'Kimchi',
        image : 'images/김치.jpg',
        alt: '김치',
        rating : 5.0
    },
    {
        id: 2,
        name : 'Samgyepsal',
        image : 'images/삼겹살.jpg',
        alt : '삼겹살',
        rating : 4.9
    },
    {
        id: 3,
        name: 'Bibimbap',
        image : 'images/비빔밥.jpg',
    },
    {
        id: 4,
        name : 'Donkasu',
        image : '',
    },
    {
        id: 5,
        name : 'Kimbap',
        image : '',
    },
];


function App() {
    return (
        <div>
            {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
        </div>
    );
}

Food.PropTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number
}

export default App;
