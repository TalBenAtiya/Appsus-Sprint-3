import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { MailDetails } from "./apps/mail/views/mail-details.jsx"
import { BookApp } from "./apps/book/views/book-app.jsx"
import { BookDetails } from "./apps/book/views/book-details.jsx"
import { BookAdd } from "./apps/book/views/book-add.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Switch>
                <Route path="/mail/:mailId" component={MailDetails} />
                <Route path="/book/add" component={BookAdd} />
                <Route path="/book/:bookId" component={BookDetails} />
                <Route path="/mail" component={MailIndex} />
                <Route path="/book" component={BookApp} />
                <Route path="/note" component={NoteIndex} />
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
            </Switch>
        </section>
    </Router>
}
