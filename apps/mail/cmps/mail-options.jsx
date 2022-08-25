export function MailOptions({onSetFilter}) {

    
    return <section className="user-options">

        <div onClick={() => onSetFilter('inbox')} className="flex" tabIndex="1">
            <img src="assets/img/inbox.png" />
            <h4>Inbox</h4>
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
    </section>
}
