import { Link } from "react-router";

function NavBar() {
    return <div className="navbar">
        <h3>Feito por: Gabriel Antony Olsson Schlagenhaufer</h3>
        <Link to="/usuarios"> Usuários </Link>
        <Link to="/crud"> CRUD </Link>
        <Link to="/detalhes"> Detalhes </Link>
    </div>
}

export default NavBar;