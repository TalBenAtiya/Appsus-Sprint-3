import { mailService } from "../services/mail.service.js"

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
                this.setState({ mail })
            })
    }

    render() {
        const { mail } = this.state
        if (!mail) return <span></span>
    return <section className="mail-details main-layout">
        <h2>{mail.subject}</h2>
        <h4>From: {mail.sentFrom}</h4>
        <h5>{mail.sentAt}</h5>
        <article>{mail.body}</article>
    </section>
    }

}