import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="mainContainer">
      <div className="cardContainer">
        <h1 className="mainHead">FAQs</h1>
        <ul className="faqsListContainer">
          {faqsList.map(eachFAQ => (
            <FaqItem key={eachFAQ.id} details={eachFAQ} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
