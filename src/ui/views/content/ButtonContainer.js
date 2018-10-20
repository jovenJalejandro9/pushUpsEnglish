import React, {Component} from 'react'
import Button from '@material-ui/core/Button';

class ButtonContainer extends Component {
  render() {
    const {text, action} = this.props
    return(
      <Button
      onClick={action}
      variant="contained" 
      color="secondary">
        {text}
      </Button>
    )
  }
}

export default ButtonContainer