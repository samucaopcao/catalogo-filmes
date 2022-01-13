import MovieStars from "components/MovieStars";
import './styles.css';

function MovieScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="catalogo-filmes-score-container">
            <p className="catalogo-filmes-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="catalogo-filmes-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;