import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"
import { MailOptions } from "../cmps/mail-options.jsx"
import { MailCompose } from "../cmps/mail-compose.jsx"
import { showSuccessMsg } from "../../../services/event-bus.service.js"

const { Link } = ReactRouterDOM

export class MailIndex extends React.Component {

    state = {
        mails: [],
        isCompose: false,
        filterBy: 'inbox',
        searchBy: '',
        userSettings: 'closed',
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
        this.closeUserSettings()
        this.setState({ filterBy }, () => {
            this.loadMails()
        })
    }

    onSearchBy = ({ target }) => {
        this.setState({ searchBy: target.value }, () => {
            this.loadMails()
        })
    }

    closeUserSettings = () => {
        this.setState({userSettings: 'closed'})
    }

    sortMails = ({target}) => {
        this.closeUserSettings()
        const sortOpt = target.id
        const { mails } = this.state
        
       if (!target.checked) this.loadMails()
   
        if (sortOpt === 'abc') mails.sort((mailA, mailB) => mailA.sentFrom.toUpperCase() > mailB.sentFrom.toUpperCase() ? 1 : -1)
        if (sortOpt === 'date') mails.sort((mailA, mailB) => mailA.sentAt - mailB.sentAt ? -1 : 1 )
        this.setState({mails})
    }

    trashMail = (mailId) => {
        mailService.sendToTrash(mailId)
            .then(() => {
                this.loadMails() })
    }

    openComposeModal = () => {
        this.closeUserSettings()
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
        showSuccessMsg('Mail Sent!')
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

    getToggleClass = () => {
        let optsClass = 'user-options'
        if (this.state.userSettings === 'open') {
            optsClass = 'user-options open'
        }
        return optsClass
    }

    toggleUserSettings = () => {
        if (this.state.userSettings === 'closed') {
            this.setState({userSettings:'open'})
        } else if (this.state.userSettings === 'open') {
            this.setState({userSettings:'closed'})
        } 
    }

    render() {
        const { mails, isCompose, filterBy } = this.state
        if (!mails) return <span></span>

        return <section className="mail-index main-layout">
          <img onClick={this.toggleUserSettings} className="mail-hamburger" src="assets/img/mail-hamburger.png" alt="" />
            <MailOptions onSetFilter={this.onSetFilter} filterBy={filterBy}  mails={mails} getUnreadMails={this.getUnreadMails}
                openComposeModal={this.openComposeModal} isCompose={isCompose} sortMails={this.sortMails}  getToggleClass={this.getToggleClass} />

            <div className="list-container">
                <input className="search-bar" onChange={this.onSearchBy} type="search" placeholder="Search..." />
                <MailList mails={mails} starToggle={this.starToggle} setMailAsRead={this.setMailAsRead}
                    importantToggle={this.importantToggle} trashMail={this.trashMail} />
            </div>

            {isCompose && <MailCompose onCloseModal={this.onCloseModal} onMailSent={this.onMailSent} />}
        </section>
    }
}
