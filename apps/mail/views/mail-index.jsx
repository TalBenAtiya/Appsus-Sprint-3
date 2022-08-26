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

    sortMails = ({target}) => {
        const sortOpt = target.id
        const { mails } = this.state
        
       if (!target.checked) this.loadMails()
   
        if (sortOpt === 'abc') mails.sort((mailA, mailB) => mailA.subject.toUpperCase() > mailB.subject.toUpperCase() ? 1 : -1)
        if (sortOpt === 'date') mails.sort((mailA, mailB) => mailA.sentAt - mailB.sentAt ? -1 : 1 )
        this.setState({mails})
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

    getUnreadMails = () => {
       const unreadMails = mailService.getUnreadMails()
       return unreadMails
    }

    onMailSent = (mail) => {
        mail.sentFrom = mail.to
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
                openComposeModal={this.openComposeModal} isCompose={isCompose} sortMails={this.sortMails} />

            <div className="list-container">
                <input className="search-bar" onChange={this.onSearchBy} type="search" placeholder="Search..." />
                <MailList mails={mails} starToggle={this.starToggle} setMailAsRead={this.setMailAsRead}
                    importantToggle={this.importantToggle} trashMail={this.trashMail} />
            </div>

            {isCompose && <MailCompose onCloseModal={this.onCloseModal} onMailSent={this.onMailSent} />}
        </section>
    }
}
