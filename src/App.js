import React from "react"
import axios from "axios"

class App extends React.Component {
    state = {
        isLoading : true,
        movies: []
    };
    
    getMovies = async () => {
        const movies = await axios.get('http://yts-proxy.now.sh/list_movies.json');
        console.log(movies.data.data.movies);    
    }

    componentDidMount() {
        this.getMovies();
        
    }

    render() {
        const { isLoading } = this.state
        return (
            <div>
                {isLoading ? 'Loading...' : '영화데이터출력'}
            </div>
        )
    }
}

export default App