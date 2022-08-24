import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"

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
            <div className="user-options"></div>
            <MailList emails={emails}/>

        </section>
        
    }
}
