import { utilService } from "../../../services/util.service.js"

export function MailCompose({onCloseModal, onMailSent}) {

    let mail = {
        id: utilService.makeId(),
        sentAt: new Date().getTime(),
        labels: [],
        isRead: true
    }
    function handleInput({target},property) {
        mail[property] = target.value
    }

    function handleTextBox({target},property) {
        mail[property] = target.innerText
    }

    function onSendMail(ev){
        ev.preventDefault()
        onMailSent(mail)
    }


    return   <div className="send-mail flex">
    <div className="mail-title flex">
        <span>New Message</span>
        <button onClick={onCloseModal}>X</button>
    </div>
    <form onSubmit={onSendMail}>
    <div className="send-to flex">
        <label htmlFor="send-to">To:</label>
        <input onChange={(ev) => handleInput(ev, 'to')} type="text" placeholder="example: usermail@gmail.com" id="send-to" />
    </div>
    <div className="mail-subject flex">
        <label htmlFor="subject">Subject:</label>
        <input onChange={(ev) => handleInput(ev, 'subject')} type="text" placeholder="subject" id="subject" />
    </div>
    <div className="mail-text-area">
        <p onInput={(ev) => handleTextBox(ev, 'body')} role='textbox' aria-multiline="true" contentEditable='true'></p>
    </div>
    <div className="btns">
        <button>Send</button>
    </div>
    </form>
</div>
}