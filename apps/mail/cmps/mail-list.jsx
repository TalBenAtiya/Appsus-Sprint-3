import { MailPreview } from "./mail-preview.jsx"

export function MailList({ emails }) {
    console.log(emails);
    return <section className="mail-list">
        <table>
            <tbody>
                {emails.map(mail => <MailPreview
                    key={mail.id} mail={mail} />)}
            </tbody>
        </table>
    </section>
}


