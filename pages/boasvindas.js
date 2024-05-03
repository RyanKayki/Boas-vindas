export default function ReclameAqui() {
    const nome = "Ryan"
    const mensagem = "I LOVE EXCEL"
    return (
        <div>
            <header>
                <nav id="navbar" style={{ color: 'white' }}>
                    
                    <div>
                        <h3>Cadastro</h3>
                    </div>

                    <ul id="nav_list">
                        <li className="nav-item active">
                            <a href="#home" style={{ color: 'white' }}>Início</a>
                        </li>
                        <li className="nav-item">
                            <a href="#menu" style={{ color: 'white' }}>Recepção</a>
                        </li>
                    </ul>

                    <a href="/Usuario/acesso.html">
                        <button className="btn-default" id="btn-login" style={{ color: 'white' }}>
                            Login
                        </button>
                    </a>

                    <button id="mobile_btn">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </nav>

                <div id="mobile_menu">
                    <ul id="mobile_nav_list">
                        <li className="nav-item">
                            <a href="#home">Início</a>
                        </li>
                        <li className="nav-item">
                            <a href="#menu">Recepção</a>
                        </li>
                    </ul>
                    <a href="/Usuario/acesso.html">
                        <button className="btn-default" id="btn-login">
                            Login
                        </button>
                    </a>
                </div>
            </header>

            <main id="content">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <section id="home">
                    <div className="shape"></div>
                    <div id="cta">
                    <p className="mensagem" style={{ color: 'white' }}>{mensagem}</p>
                    <h1 className="nome" style={{ color: 'white' }}>{nome}</h1>
                    </div>
                </section>
                <section id="menu">
                    <h2 className="section-title">Recepção</h2>
                    <p id="mensagem-reclamacoes-vazias">Nenhum cadastro disponivel...</p>
                    <div id="reclamacoes-container"></div><br /><br /><br /><br />
                    <div id="animation-vazias" className="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
            </main>
            <footer>
                <img src="img/wave.svg" alt="" />
                <div id="footer_items">
                    <span id="copyright" style={{ color: 'white' }}>
                        &copy; 2024 Bem Vindos
                    </span>
                </div>
            </footer>
        </div>
    );
}