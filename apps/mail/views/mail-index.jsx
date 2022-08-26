import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"
import { MailOptions } from "../cmps/mail-options.jsx"
import { MailCompose } from "../cmps/mail-compose.jsx"

const { Link } = ReactRouterDOM

export class MailIndex extends React.Component {

    state = {
        mails: [],
        isCompose: false,
        filterBy: 'inbox',
        searchBy: '',
    }

    componentDidMount() {
        this.loadMails()
    }

    setMailAsRead = (mailId) => {
        mailService.mailRead(mailId)
            .then(mails => this.setState({ mails }))
    }

    loadMails = () => {
        mailService.query(this.state.filterBy, this.state.searchBy).then(mails => this.setState({ mails }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadMails()
        })
    }

    onSearchBy = ({ target }) => {
        this.setState({ searchBy: target.value }, () => {
            this.loadMails()
        })

    }

    trashMail = (mailId) => {
        mailService.sendToTrash(mailId)
            .then(() => this.loadMails())
    }

    openComposeModal = () => {
        this.setState({ isCompose: true })
    }

    onCloseModal = () => {
        this.setState({ isCompose: false })
    }

    // getUnreadMails = () => {
    //     const { mails } = this.state
    //     const unreadMails = mails.filter(mail => mail.isRead === false)
    //     return unreadMails.length
    // }

    onMailSent = (mail) => {
        mail.sentFrom = mail.to
        console.log(mail);
        mailService.sendMail(mail).then(() => {
            this.loadMails()
        })
        this.onCloseModal()
    }

    starToggle = (mailId) => {
        mailService.setMailStar(mailId).then(() => {
            this.loadMails()
        })
    }

    importantToggle = (mailId) => {
        mailService.setImportant(mailId).then(() => {
            this.loadMails()
        }
        )
    }

    render() {
        const { mails, isCompose } = this.state
        if (!mails) return <span></span>

        return <section className="mail-index main-layout">
            <MailOptions onSetFilter={this.onSetFilter} mails={mails} getUnreadMails={this.getUnreadMails}
                openComposeModal={this.openComposeModal} isCompose={isCompose} />

            <div className="list-container">
                <input className="search-bar" onChange={this.onSearchBy} type="search" placeholder="Search..." />
                <MailList mails={mails} starToggle={this.starToggle} setMailAsRead={this.setMailAsRead}
                    importantToggle={this.importantToggle} trashMail={this.trashMail} />
            </div>

            {isCompose && <MailCompose onCloseModal={this.onCloseModal} onMailSent={this.onMailSent} />}
        </section>
    }
}
