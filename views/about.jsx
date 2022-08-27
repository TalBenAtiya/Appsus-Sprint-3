import { Footer } from "../cmps/footer.jsx";

export function About() {
    return <section className="about main-layout">
        <div className="about-container">
            <h1>Who We Are</h1>
            <div className="about-info">
                <p><span>Appsus</span> is a web apllication for private use that,
                allows free use of different apps.
                Adjusted to all devices from Desktop to Mobile,
                Use your favorite apps everywhere.
                </p>
                Founded in 2022, by Gal Wender & Tal Ben Atiya.
            </div>
        </div>
        <Footer />
    </section>
}
