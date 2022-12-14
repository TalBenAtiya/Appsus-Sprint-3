import { mailService } from "../services/mail.service.js"
import { utilService } from "../../../services/util.service.js"

const { Link } = ReactRouterDOM

export function MailPreview({mail, starToggle, setMailAsRead, importantToggle, trashMail}){

  function onReadMail(mailId) {
    setMailAsRead(mailId)
  }

  function getMailClass(mail){
    const mailClass = mail.isRead ? 'mail-preview read' : 'mail-preview not-read'
    return mailClass
  }

  function onSetStar(ev, mailId) {
    ev.preventDefault()
    ev.stopPropagation();
   starToggle(mailId)
  }

  function onSetImportant(ev, mailId) {
    ev.preventDefault()
    ev.stopPropagation();
    importantToggle(mailId)
  }

  function setStarImg() {
    if (!mail) return
    const imgStr = mail.labels.includes('starred') ? "assets/img/star1.png" : "assets/img/star2.png"
    return imgStr
  }

  function setImprotantImg() {
    if (!mail) return
    const imgStr = mail.labels.includes('important') ? "assets/img/right-arrow1.png" : "assets/img/right-arrow2.png"
    return imgStr
  }

  function onTrashMail(ev ,mailId) {
    ev.preventDefault()
    ev.stopPropagation()
    trashMail(mailId)
  }

    return <Link to={"/mail/" + mail.id}> <article onClick={() => onReadMail(mail.id)} className={getMailClass(mail)}>
      <section className="label-btns">
      <button title="Set Starred" onClick={(ev) => onSetStar(ev, mail.id)} className="star"><img src={setStarImg()} /></button>
      <button title="Set Important" onClick={(ev) => onSetImportant(ev, mail.id)} className="important"><img src={setImprotantImg()} /></button>
      </section>
      <section className="mail-info">
      <div className="sent-from"> {mail.sentFrom}</div>
      <div className="subject">{mail.subject} -</div>
      <div className="mail-body">{mail.body}</div>
      </section>
      <div className="sent-at">{utilService.getDate(mail.sentAt)}
      <button title="Send To Trash" onClick={(ev) => onTrashMail(ev ,mail.id)}><img src="assets/svg/trash-icon.svg"/></button>
      </div>
    </article></Link>
 
}