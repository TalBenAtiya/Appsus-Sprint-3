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
            <section className="user-options">
                <div className="flex">
                    <img src="../../../assets/img/inbox.png" />
                    <h4>Inbox</h4>
                </div>
                <div className="flex">
                    <img src="../../../assets/img/star.png" />
                    <h4>Starred</h4>
                </div>
                <div className="flex">
                    <img src="../../../assets/img/clock.png" />
                    <h4>Handle Later</h4>
                </div>
                <div className="flex">
                    <img src="../../../assets/img/right-arrow.png" />
                    <h4>Important</h4>
                </div>
            </section>
            <MailList emails={emails}/>
        </section>
        
    }
}
