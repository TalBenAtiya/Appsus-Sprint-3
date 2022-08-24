export function MailPreview({mail}) {

    return <tr className="mail-preview">
       <td className="sent-from">{mail.sentFrom}</td>
       <td className="subject">{mail.subject}</td>
       <td className="mail-body">{mail.body}</td>
       <td className="sent-at">{mail.sentAt}</td>
    </tr>
}