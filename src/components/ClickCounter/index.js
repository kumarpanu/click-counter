import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <h1 className="heading-text">
          The Button has been clicked <span className="span-el">{count}</span>{' '}
          times
        </h1>
        <p className="para-text">CLick the button to increase the count!</p>
        <button type="button" onClick={this.onClickButton} className="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
