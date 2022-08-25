import { MailPreview } from "./mail-preview.jsx"

export function MailList({ mails , starToggle, setMailAsRead,  importantToggle,  trashMail}) {

    return <section className="mail-list">
                {mails.map(mail => <MailPreview
                    key={mail.id} mail={mail} starToggle={starToggle} setMailAsRead={setMailAsRead}
                     importantToggle={importantToggle} trashMail={trashMail} />)}
    </section>
}
