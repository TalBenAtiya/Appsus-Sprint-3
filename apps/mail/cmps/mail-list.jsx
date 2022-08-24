import { BookPreview, MailPreview } from "./mail-preview.jsx"

export function MailList({emails}) {
console.log(emails);
    return <section className="mail-list">
        {/* {emails.map(mail =>  <MailPreview
        key={mail.id} mail={mail} />)} */}
    </section>
}