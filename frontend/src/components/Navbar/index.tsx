
import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='catalogo-filmes-nav-content'>
                    <h1>Catalogo-Filmes</h1>
                    <a href="https://github.com/samucaopcao">
                        <div className='catalogo-filmes-contact-container'>
                            <GithubIcon />
                            <p className='catalogo-filmes-contact-link'>
                                /samucaopcao
                            </p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>

    )
}

export default Navbar;