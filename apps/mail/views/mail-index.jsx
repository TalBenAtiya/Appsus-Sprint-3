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
        console.log(filterBy);
        this.setState({ filterBy }, () => {
            this.loadMails()
        })
    }

    onSearchBy = ({target}) => {
        this.setState({searchBy: target.value} , () => {
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
            <MailOptions onSetFilter={this.onSetFilter} />
            <div className="list-container">
            <input className="search-bar" onChange={this.onSearchBy} type="search" placeholder="Search..." />
            <MailList mails={mails} starToggle={this.starToggle} setMailAsRead={this.setMailAsRead}
                importantToggle={this.importantToggle} trashMail={this.trashMail} />
                </div>

            <button onClick={this.openComposeModal} className="compose"><img src="assets/img/write.png" />
                Compose
            </button>
            {isCompose && <MailCompose onCloseModal={this.onCloseModal} onMailSent={this.onMailSent} />}
        </section>
    }
}


// const criteria = {
//     status: 'inbox/sent/trash/draft',
//     txt: 'puki', // no need to support complex text search
//     isRead: true, // (optional property, if missing: show all)
//     isStared: true, // (optional property, if missing: show all)
//     lables: ['important', 'romantic'] // has any of the labels
//    }
   