const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {

    return <header className="app-header">
        <div className="main-layout">
        <Link to="/">
            <h3>Appsus</h3>
        </Link>
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/note">Notes</NavLink>
            <NavLink to="/book">Books</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
        </div>
    </header>
}
