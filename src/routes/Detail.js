import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        const genres = location.state.genres;

        if (location.state) {
            return (
                <div className="detail">
                    <div className="detail__data">
                        <img src={location.state.poster} alt={location.state.title} title={location.statetitle} />
                        <h3 className="detail__title">{location.state.title}</h3>
                        <h5 className="detail_year">{location.state.year}</h5>
                        <p className="detail_summary">{location.state.summary} ... </p>
                        <ul className="detail__genres">
                            {
                                genres.map((genre, index) =>
                                    <li key={index} className="detail__genre">{genre}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;