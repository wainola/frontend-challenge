import React, { Component } from 'react';
import {
  Grid,
  Container,
  Responsive
} from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import FormFin from './Form/Form'
import FinCards from './FinCards/FinCards'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    const { location } = this.props
    return (
      <div className="App">
        <Responsive>
          <Container>
            <Grid >
              <Grid.Row>
                <Grid.Column>
                  <Route location={location} exact path='/' component={FinCards} />
                  <Route location={location} exact path='/patch-cards/:id' component={FormFin} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Responsive>
      </div>
    );
  }
}

export default App;