import { MailCompose } from "../cmps/mail-compose.jsx"
const { NavLink } = ReactRouterDOM

export function MailOptions({ onSetFilter, getUnreadMails, openComposeModal, sortMails }) {


    return <section className="user-options">
        <button onClick={openComposeModal} className="compose">
            <img src="assets/img/write.png" />
            Compose
        </button>
        <div onClick={() => onSetFilter('inbox')} className="flex" tabIndex="1">
            <img src="assets/img/inbox.png" />
            <h4>Inbox</h4>
            <span className="unread-mails">{getUnreadMails()}</span>
        </div>
        <div onClick={() => onSetFilter('starred')} className="flex" tabIndex="1">
            <img src="assets/img/star2.png" />
            <h4>Starred</h4>
        </div>
        <div onClick={() => onSetFilter('important')} className="flex" tabIndex="1">
            <img src="assets/img/right-arrow2.png" />
            <h4>Important</h4>
        </div>
        <div onClick={() => onSetFilter('sent')} className="flex" tabIndex="1">
            <img src="assets\img\sent.png" />
            <h4>Sent</h4>
        </div>
        <div onClick={() => onSetFilter('trash')} className="flex" tabIndex="1">
            <img src="assets\img\trash.png" />
            <h4>Trash</h4>
        </div>


        <section className="sort-container">
            <h4>Sort </h4>
            <label htmlFor="abc">
                Alphabetical
                <input onChange={(ev) => sortMails(ev)} type="checkbox" id="abc" />
            </label>
            <label htmlFor="date">
                Date
                <input onChange={(ev) => sortMails(ev)} type="checkbox" id="date" />
            </label>
        </section>
    </section>
}
