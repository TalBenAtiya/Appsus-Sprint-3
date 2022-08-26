const { Link } = ReactRouterDOM

export function Home() {

    return <section className="home main-layout">
        <h1>Welcome to <span>Appsus</span></h1>
        <p>Appsus is a multifuntcional application that includes all of your favorite applications in ONE </p>
        <div className="home-img-container">
            <Link to="/book">
                <div>
                    <img src="./assets/img/book-reading-icon.png" />
                    <h3>BOOKS</h3>
                </div>
            </Link>
            <Link to="/note">
                <div>
                    <img src="./assets/img/notes-icon.png" />
                    <h3>NOTES</h3>
                </div>
            </Link>
            <Link to="/mail">
                <div>
                    <img src="./assets/img/gmail-icon.png" />
                    <h3>MAIL</h3>
                </div>
            </Link>
        </div>
    </section>
}