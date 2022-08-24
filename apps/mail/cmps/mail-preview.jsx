
const {Link} = ReactRouterDOM

export function MailPreview({mail}) {

    return <Link to={"/mail/" + mail.id}> <article className="mail-preview">
     <div className="sent-from"> {mail.sentFrom}</div>
       <div className="subject">{mail.subject}</div>
       <div className="mail-body">{mail.body}</div>
       <div className="sent-at">{mail.sentAt}</div>
    </article></Link>
}