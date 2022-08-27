import { UserMsg } from './user-msg.jsx';

const { Link, NavLink, withRouter } = ReactRouterDOM
export class AppHeader extends React.Component {

    inputRef = React.createRef()

    toggleMenu = () => {
        this.inputRef.current.classList.toggle('menu-opened')
    }

    closeMenu = () => {
        this.inputRef.current.classList.remove('menu-opened')
    }

    render() {
        return <header className="app-header">
            <div className="main-layout">
                <Link to="/">
                    <div>
                        <h3>Appsus</h3>
                        <img src="assets/img/appsus-logo.png" />
                    </div>

                </Link>

                <img onClick={this.toggleMenu} className="app-hamburger-icon" src="assets/img/app-hamburger-icon.png" alt="" />
                <nav ref={this.inputRef} className="main-nav-list" >
                    <NavLink onClick={this.closeMenu} exact to="/">Home</NavLink>
                    <NavLink onClick={this.closeMenu} to="/note">Notes</NavLink>
                    <NavLink onClick={this.closeMenu} to="/book">Books</NavLink>
                    <NavLink onClick={this.closeMenu} to="/mail">Mail</NavLink>
                    <NavLink onClick={this.closeMenu} to="/about">About</NavLink>
                </nav>
            </div>
            <UserMsg />
        </header>
    }
}

