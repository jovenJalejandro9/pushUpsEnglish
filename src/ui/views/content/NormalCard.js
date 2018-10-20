import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonContainer from './ButtonContainer';


class NormalCard extends Component {
  render() {
    const { index, numWords, word, initialWord, translate, right, bad } = this.props
      return (
      <Card >
        <CardContent>
          <Typography color="textSecondary">
            {index + 1}/{numWords}
          </Typography>
          <Typography variant="headline" component="h2">
            {word}
          </Typography>
          {initialWord ?
            <ButtonContainer
              text={'Traducir'}
              action={translate}
            />
            :
            <div>
              <ButtonContainer
                text={'Conocida'}
                action={right}
              />
              <ButtonContainer
                text={'No conocida'}
                action={bad}
              />
            </div>
          }
        </CardContent>
      </Card>
    )
  }
}

export default NormalCard