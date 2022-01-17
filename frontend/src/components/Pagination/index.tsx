import { ReactComponent as Arrow } from 'assets/img/arrow.svg'
import { MoviePage } from 'types/movie';
import './styles.css'
type Props = {
    page: MoviePage;
    onChange: Function;
}

function Pagination({ page, onChange }: Props) {



    return (
        <div className="catalogo-filmes-pagination-container">
            <div className="catalogo-filmes-pagination-box">
                <button className="catalogo-filmes-pagination-button" disabled={page.first}
                    onClick={() => onChange(page.number - 1)} >
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="catalogo-filmes-pagination-button" disabled={page.last}
                    onClick={() => onChange(page.number + 1)} >
                    <Arrow className="catalogo-filmes-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}
export default Pagination;