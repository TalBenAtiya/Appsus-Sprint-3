import { mailService } from "../services/mail.service.js"
import { MailOptions } from "../cmps/mail-options.jsx"


export class MailDetails extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        this.loadMail()
    }

    loadMail = () => {
        const { mailId } = this.props.match.params
        mailService.getById(mailId)
            .then((mail) => {
                if (!mail) return this.onGoBack()
                mailService.mailRead(mailId).then(() =>
                this.setState({mail: {...mail , isRead: true }}))
            })
    }

    onGoBack = () => {
        this.props.history.push('/mail')
    }

    render() {
        const { mail } = this.state
        if (!mail) return <span></span>
        
    return<section className="mail-details-container main-layout">
        <MailOptions/>
    <section className="mail-details">
        <h5>Date:{mail.sentAt}</h5>
        Subject:
        <h2>{mail.subject}</h2>
        From:
        <h4>{mail.sentFrom}</h4>
        <article>{mail.body}</article>
        <div>
        <button onClick={this.onGoBack}>Go Back</button>
        {/* <button className="replay">Replay →</button> */}
        </div>
    </section>
    </section> 
    }

}