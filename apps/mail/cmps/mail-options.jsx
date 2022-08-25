export function MailOptions({onFilterBy}) {

    return <section className="user-options">

        <div onClick={() => onFilterBy('inbox')} className="flex" tabIndex="1">
            <img src="assets/img/inbox.png" />
            <h4>Inbox</h4>
        </div>
        <div onClick={() => onFilterBy('starred')} className="flex" tabIndex="1">
            <img src="assets/img/star2.png" />
            <h4>Starred</h4>
        </div>
        <div onClick={() => onFilterBy('important')} className="flex" tabIndex="1">
            <img src="assets/img/right-arrow2.png" />
            <h4>Important</h4>
        </div>
        <div onClick={() => onFilterBy('sent')} className="flex" tabIndex="1">
            <img src="assets\img\sent.png" />
            <h4>Sent</h4>
        </div>
    </section>
}
