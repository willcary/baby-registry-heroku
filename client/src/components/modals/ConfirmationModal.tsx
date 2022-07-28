import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { RegistryItems } from '../../assets/ts/types.js'

interface ModalProps {
  show: boolean
  onHide: any
  items: RegistryItems[]
  handleSubmit: any
}

export default function ConfirmationModal({
  show,
  onHide,
  items,
  handleSubmit,
}: ModalProps) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Are you sure you want to reserve these items?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Remember you need to actually ship these items to Emily and Will or
          give them in person at the baby shower!
        </p>
        {items.length ? (
          <Table striped bordered>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Item</th>
                <th>Given by</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: RegistryItems) => (
                <tr key={item.item_id}>
                  <td>{item.give}</td>
                  <td>{item.item_name}</td>
                  <td>{item.giver_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>* No items currently reserved</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant='outline-secondary'>
          Close
        </Button>
        <Button
          variant='primary'
          type='submit'
          onClick={handleSubmit}
          disabled={!items.length}
        >
          Reserve gift
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
