import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"
import { MailOptions } from "../cmps/mail-options.jsx"
import { MailCompose } from "../cmps/mail-compose.jsx"

const { Link } = ReactRouterDOM

export class MailIndex extends React.Component {

    state = {
        mails: [],
        isCompose: false,
    }

    componentDidMount() {
        this.loadMails()
    }

    setMailAsRead = (mailId) => {
        mailService.mailRead(mailId)
            .then(mails => this.setState({ mails }))
    }

    loadMails = () => {
        mailService.query().then(mails => this.setState({ mails }))
    }

    importantToggle = (mailId) => {
        mailService.setImportant(mailId).then(mails => {
            this.setState({ mails })
        }
        )
    }

    onComposeMail = () => {

    }

    onFilterBy = (filterBy) => {
        console.log(filterBy);
    }

    openComposeModal = () => {
        this.setState({ isCompose: true })
    }

    onCloseModal = () => {
        this.setState({ isCompose: false })
    }

    onMailSent = (mail) => {
        mail.sentFrom = mail.to
        mailService.sendMail(mail).then(mails => {
            this.setState({ mails })
        })
        this.onCloseModal()
    }

    starToggle = (mailId) => {
        mailService.setMailStar(mailId).then(mails => {
            this.setState({ mails })
        })
    }

    render() {
        const { mails, isCompose } = this.state
        if (!mails) return <span></span>

        return <section className="mail-index main-layout">
            <MailOptions onFilterBy={this.onFilterBy} />
            <MailList mails={mails} starToggle={this.starToggle} setMailAsRead={this.setMailAsRead} importantToggle={this.importantToggle} />
            <button onClick={this.openComposeModal} className="compose"><img src="assets/img/write.png" />
                Compose
            </button>
            {isCompose && <MailCompose onCloseModal={this.onCloseModal} onMailSent={this.onMailSent} />}
        </section>
    }
}
