import React from 'react';

function Food({name, picture}) {
    return (
        <div>
            <h2>I Like {name} </h2>
            <img src = {picture} />
        </div>
    );
}

const foodILike = [
    {
        id: 1,
        name : 'Kimchi',
        image : 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    },
    {
        id: 2,
        name : 'Samgyepsal',
        image : '',
    },
    {
        id: 3,
        name: 'Bibimbap',
        image : '',
    },
    {
        name : 'Donkasu',
        image : '',
    },
    {
        name : 'Kimbap',
        image : '',
    },
];

function App() {
    return (
        <div>
            {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} />))}
        </div>
    );
}

export default App;
