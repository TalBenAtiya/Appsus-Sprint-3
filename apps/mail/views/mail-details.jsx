import { mailService } from "../services/mail.service.js"
import { MailOptions } from "../cmps/mail-options.jsx"
import { noteService } from "../../note/services/note.service.js"
 

export class MailDetails extends React.Component {

    state = {
        mail: null,
        isReplay: false,
    }

    componentDidMount() {
        this.loadMail()
    }

    makeMailAsImgNote = () => {
        const { mail } = this.state
        noteService.createNoteImg(mail.subject, mail.body, mail.img)
        .then(() => this.props.history.push('/note'))
    }

    makeMailAsTxtNote = () => {
        const { mail } = this.state
        noteService.createNoteTxt(mail.subject, mail.body)
        .then(() => this.props.history.push('/note'))
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

    onReplay = () => {
        this.setState({isReplay: true})
    }

    onGoBack = () => {
        this.props.history.push('/mail')
    }

    render() {
        const { mail, isReplay } = this.state
        if (!mail) return <span></span>
        console.log(mail);

        return <section className="mail-details-container main-layout">
            <section className="mail-details">
                <div className="details-info">
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
                    <div>
                    <img title="Make As Text Note" src="assets/img/note.png" className="make-mail-note" onClick={this.makeMailAsTxtNote} />
                    <img title="Make As Image Note" src="assets/img/draw.png" className="make-mail-note" onClick={this.makeMailAsImgNote} />
                    </div>
                </div>
            </section>
        </section>
    }

}