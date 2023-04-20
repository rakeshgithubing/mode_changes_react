// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {text: 'LightMode'}

  buttonChanges = () => {
    const {text} = this.state
    if (text === 'LightMode') {
      return this.setState({text: 'DarkMode'})
    }
    return this.setState({text: 'LightMode'})
  }

  render() {
    const {text} = this.state
    let mode
    if (text === 'LightMode') {
      mode = (
        <div className="container-1">
          <h1 className="heading-1">Click To Change Mode</h1>
          <button
            className="button-1"
            type="button"
            onClick={this.buttonChanges}
          >
            Dark Mode
          </button>
        </div>
      )
    } else {
      mode = (
        <div className="container-2">
          <h1 className="heading-2">Click To Change Mode</h1>
          <button
            className="button-2"
            type="button"
            onClick={this.buttonChanges}
          >
            Light Mode
          </button>
        </div>
      )
    }
    return <div className="bg-container">{mode}</div>
  }
}

export default LightDarkMode
