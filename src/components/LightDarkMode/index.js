// Write your code here
import {Component} from 'react'
import './index.css'

class Mode extends Component {
  state = {isDark: true}

  onClick = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const buttonText = isDark ? 'Light Mode' : 'Dark Mode'
    const modeClassName = isDark ? 'dark-mode' : 'light-mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClick} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Mode
