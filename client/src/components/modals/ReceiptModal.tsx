import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import { RegistryItemTypes } from '../../assets/ts/types.js'

interface ModalProps {
  show: boolean
  onHide: any
  items: RegistryItemTypes[]
}

export default function ConfirmationModal({ show, onHide, items }: ModalProps) {
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
          Thanks for your generous gifts!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items.length ? (
          <Table striped bordered>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Item</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: RegistryItemTypes) => (
                <tr key={item.item_id}>
                  <td>{item.give}</td>
                  <td>{item.item_name}</td>
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
      </Modal.Footer>
    </Modal>
  )
}
