import React, { Component } from 'react';
import {
  Tab,
  Grid,
  Container,
  Responsive
} from 'semantic-ui-react'
import FormFin from './Form/Form'
import FinCards from './FinCards/FinCards'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    const panes = [
      { menuItem: 'Cards!', render: () => <Tab.Pane><FinCards /></Tab.Pane>},
      { menuItem: 'Formulario', render: () => <Tab.Pane><FormFin /></Tab.Pane>}
    ]
    return (
      <div className="App">
        <Responsive>
          <Container>
            <Grid >
              <Grid.Row>
                <Grid.Column>
                  <Tab style={{ marginTop: '45px'}} panes={panes} />
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