import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"
import { MailOptions } from "../cmps/mail-options.jsx"

export class MailIndex extends React.Component {

    state = {
        mails: []
    }

    componentDidMount() {
        this.loadMails()
    }

    setMailAsRead = (mailId) => {
        mailService.mailRead(mailId)
        .then(mails => this.setState({mails}))
    }

    loadMails = () => {
        mailService.query().then(mails => this.setState({mails}))
    }

    importantToggle = (mailId) => {
        mailService.setImportant(mailId).then(mails => {
            this.setState({mails})}
            )
    }

    starToggle = (mailId) => {
        mailService.setMailStar(mailId).then(mails => {
            this.setState({mails})}
            )
        }

    render() {
        const { mails } = this.state
        if (!mails) return <span></span>

        return <section className="mail-index main-layout">
            <MailOptions/>
            <MailList mails={mails} starToggle={this.starToggle} setMailAsRead={this.setMailAsRead} importantToggle={this.importantToggle}/>
        </section>
        
    }
}
