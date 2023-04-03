import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { Component } from 'react'

class App extends Component {
  state = {
    selected: undefined,
  }

  // this.setState(), se invocato da App, cambierà sempre lo stato di App!
  changeAppState = (newValue) => {
    this.setState({
      selected: newValue,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  // selected è il valore in "lettura" dallo state di App
                  selected={this.state.selected}
                  // changeAppState è un metodo che può cambiare lo stato di App
                  // lo passo come prop a Table, cosicché quando invocato da Table
                  // cambierà lo stato di App
                  changeAppState={this.changeAppState}
                />
              </Col>
              <Col className="my-auto">
                <Detail selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
