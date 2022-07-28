import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'

interface ModalProps {
  show: boolean
  onHide: any
  item_id: string
  item_name: string
  gifted: number
  handleDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item_id: string
  ) => void
}

export default function DeleteModal({
  show,
  onHide,
  item_id,
  item_name,
  gifted,
  handleDelete,
}: ModalProps) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton className='border-bottom border-warning'>
        <Modal.Title id='contained-modal-title-vcenter'>
          Delete Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <span className='text-warning'>***</span>Are you sure you want to
          delete this item from your registry?
          <span className='text-warning'>***</span>
        </p>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Gifted</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            <tr key={item_id}>
              <td>{gifted}</td>
              <td>{item_name}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant='outline-secondary'>
          Close
        </Button>
        <Button
          variant='warning'
          type='submit'
          onClick={(event) => handleDelete(event, item_id)}
        >
          Delete Item
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
