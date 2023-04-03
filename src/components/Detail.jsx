import { Alert } from 'react-bootstrap'

const Detail = ({ selected }) => (
  <Alert variant="success">{selected || 'No value selected'}</Alert>
)

export default Detail
