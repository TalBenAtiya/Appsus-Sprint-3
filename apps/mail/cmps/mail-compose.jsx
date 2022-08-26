import { utilService } from "../../../services/util.service.js"

export class MailCompose extends React.Component {

    state = {
        mail: {
            id: utilService.makeId(),
            sentAt: new Date().getTime(),
            labels: [],
            isRead: true,
            to: '',
            subject: '',
            body: '',
            img: '',
        }
    }

    inputRef = React.createRef()

    handleInput = ({ target }, property) => {
        this.setState(({mail}) => ({
            mail: { ...mail, [property]: target.value }
        }))
    }

    handleTextBox = ({ target }, property) => {
        this.setState(({mail}) => ({
            mail: { ...mail, [property]: target.innerText }
        }))
    }

    importImg = (ev, property) => {
        const reader = new FileReader()
        reader.readAsDataURL(ev.target.files[0])
        reader.addEventListener("load", () => {
            this.setState(({mail}) => ({
                mail: { ...mail, [property]: reader.result }
            }))
            this.inputRef.current.src = reader.result
        })
    }

    onSendMail = (ev) => {
        ev.preventDefault()
        this.props.onMailSent(this.state.mail)
    }

    render() {
    const {onCloseModal} = this.props
    const { mail } = this.state
    console.log(this.inputRef);


        return <div className="send-mail flex">
            <div className="mail-title flex">
                <span>New Message</span>
                <button onClick={onCloseModal}>X</button>
            </div>
            <div className="send-to flex">
                <label htmlFor="send-to">To:</label>
                <input onChange={(ev) => this.handleInput(ev, 'to')} value={mail.to} type="text" placeholder="example: usermail@gmail.com" id="send-to" />
            </div>
            <div className="mail-subject flex">
                <label htmlFor="subject">Subject:</label>
                <input onChange={(ev) => this.handleInput(ev, 'subject')} value={mail.subject} type="text" placeholder="subject" id="subject" />
            </div>
            <div className="mail-text-area">
                <p onInput={(ev) => this.handleTextBox(ev, 'body')} value={mail.body} role='textbox' aria-multiline="true" contentEditable='true'></p>
            <div className="mail-img-area">
              <img ref={this.inputRef}/>
            </div>
            </div>
            <div className="btns">
                <div className="img-upload-container">
                    <img className="import-img-icon" src="assets/svg/add-img-icon.svg" />
                    <input className="import-img-input" type='file' onChange={(ev) => this.importImg(ev, 'img')} accept="image/*" />
                </div>
                <button onClick={this.onSendMail}>Send</button>
            </div>
        </div >
    }
}