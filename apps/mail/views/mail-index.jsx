import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"
import { MailOptions } from "../cmps/mail-options.jsx"

export class MailIndex extends React.Component {

    state = {
        emails: []
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        mailService.query().then(emails => this.setState({emails}))
    }

    render() {
        const {emails} = this.state
        if (!emails) return <span></span>

        return <section className="mail-index main-layout">
            <MailOptions/>
            <MailList emails={emails}/>
        </section>
        
    }
}
