import { mailService } from "../services/mail.service.js"
import { MailOptions } from "../cmps/mail-options.jsx"


export class MailDetails extends React.Component {

    state = {
        mail: null,
        isCompose: false,
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
                    this.setState({ mail: { ...mail, isRead: true } }))
            })
    }

    onGoBack = () => {
        this.props.history.push('/mail')
    }

    render() {
        const { mail, isCompose } = this.state
        if (!mail) return <span></span>
        console.log(mail);

        return <section className="mail-details-container main-layout">
            {/* <MailOptions onGoBack={this.onGoBack}/> */}
            <section className="mail-details">
                <div className="details-container">
                    <div>
                        Subject:
                        <h2>{mail.subject}</h2>
                    </div>
                    <div>
                        Date:
                        <h5>{mail.sentAt}</h5>
                    </div>
                </div>
                From:
                <h4>{mail.sentFrom}</h4>
                <article>{mail.body}
                {mail.img && <img src={mail.img} />}
                </article>
                <div className="details-btns">
                    <button onClick={this.onGoBack}>Go Back</button>
                    {/* <button className="replay">Replay →</button> */}
                </div>
            </section>
        </section>
    }

}