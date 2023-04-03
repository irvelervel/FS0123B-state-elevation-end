import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  // dovremmo spostare questo oggetto state nel componente più vicino e contemporaneamente padre di Table e Detail...... --> App.js
  // state = {
  //   selected: undefined,
  // }

  checkSelected = (value) => (value === this.props.selected ? 'selected' : '')

  render() {
    return (
      <>
        <ListGroup className="text-dark">
          <ListGroup.Item
            // onClick={(e) => this.setState({ selected: 'First' })}
            onClick={() => this.props.changeAppState('First')}
            // setState cambia lo stato del componente in cui è chiamato!
            className={this.checkSelected('First')}
          >
            First
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeAppState('Second')}
            className={this.checkSelected('Second')}
          >
            Second
          </ListGroup.Item>
          <ListGroup.Item
            onClick={(e) => this.props.changeAppState('Third')}
            className={this.checkSelected('Third')}
          >
            Third
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Local state is {this.props.selected || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
