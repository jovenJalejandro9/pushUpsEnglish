import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ButtonContainer from './ButtonContainer';


class FinalMessage extends Component {
  render() {
    const { pushUpsFail, fails, reset } = this.props
    const pushUpsToDo = pushUpsFail * fails
    return (
      <div>
        <Card >
          <CardContent>
            <Typography color="textSecondary">
              Has terminado por hoy
            </Typography>
            <Typography variant="textPrimary" component="h2">
              Tuviste  {fails} {fails === 1 ? 'error' : 'errores'}
            </Typography>
            <Typography variant="headline" component="h2">
              Debes  {pushUpsToDo} {pushUpsToDo === 1 ? 'felxion' : 'flexiones'}
            </Typography>
          </CardContent>
        </Card>
        <ButtonContainer
          text={'Volver al inicio'}
          action={reset}
        />
      </div>
    )
  }
}

export default FinalMessage