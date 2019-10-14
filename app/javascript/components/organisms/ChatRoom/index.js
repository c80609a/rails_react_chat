import React from 'react'
import ReactDOM from 'react-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Message } from 'components'

import { submitMessage, getMessages } from '../../../actions'

class ChatRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {message: ''}
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
    }

    handleMessageChange(e) {
        this.setState({message: e.target.value})
    }

    componentWillMount() {
        this.props.getMessages()
    }

    componentDidMount() {
        this.scrollToBot()
    }

    componentDidUpdate() {
        this.scrollToBot()
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight
    }

    submitMessage(e) {
        e.preventDefault()
        this.props.submitMessage({
                username: "Kevin Hsu",
                content: this.state.message,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            })
        this.setState({message: ''})
    }

    render() {
        const username = "Kevin Hsu"
        const { messages } = this.props

        return (
            <div className="chatroom">
                <h3>Chilltime</h3>
                <ul className="chats" ref="chats">
                    { messages.map((chat, i) => <Message chat={chat} user={username} key={i} /> ) }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" value={this.state.message} onChange={this.handleMessageChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({ messages: state.messages })

const mapDispatchToProps = dispatch => ({
  submitMessage: bindActionCreators(submitMessage, dispatch),
  getMessages: bindActionCreators(getMessages, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)

