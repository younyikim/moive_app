import React from 'react';
import axios from "axios";
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoding: true,
    moives: []
  }

  getMoives = async () => {
    // axios를 통해 데이터를 받는 데 시간이 좀 걸릴 수 있음
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoding: false })
  }
  // render()호출 후, 바로 호출되는 메서드
  componentDidMount() {
    this.getMoives();
  }
  render() {
    const { isLoding, movies } = this.state;
    return (
      <section className="container">
        {isLoding
          ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map(movie =>
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              )}
            </div>
          )}
      </section>
    );
  }
}

export default App;
