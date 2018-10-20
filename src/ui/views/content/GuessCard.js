import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';  

class GuessCard extends Component {
  render() {
    return (
      <Card >
        <CardContent>
          <Typography color="textSecondary">
            2/2
          </Typography>
          <Typography variant="headline" component="h2">
            {/* {Object.keys(words)[0]} */}
          </Typography>
        </CardContent>
      </Card>
      )
  }
}

export default GuessCard