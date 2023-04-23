import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isShowing: false}

  toggleBtnClicked = () => {
    this.setState(prevState => ({isShowing: !prevState.isShowing}))
  }

  render() {
    const {isShowing} = this.state
    let imgUrl
    let alt
    if (isShowing === true) {
      imgUrl =
        'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      alt = 'minus'
    } else {
      imgUrl = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      alt = 'plus'
    }
    const {details} = this.props
    const {questionText, answerText} = details
    return (
      <li className="faqItemElement">
        <div className="question_and_icon_container">
          <h1 className="questionCSS">{questionText}</h1>
          <button
            onClick={this.toggleBtnClicked}
            type="button"
            className="iconBtn"
          >
            <img src={imgUrl} alt={alt} className="iconCSS" />
          </button>
        </div>
        {isShowing && (
          <div>
            <hr className="lineCSS" />
            <p className="answerCSS">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
