import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function EditModal({ show, onHide, handleAddItem }) {
  const resetItem = {
    user_id: 0,
    item_name: '',
    requested: 1,
    gifted: 0,
    new_used: 'used',
    description: '',
    suggested_example: '',
    priority: true,
    give: '0',
    giver_name: '',
    img_url: '',
  }

  const [newItem, setNewItem] = useState({
    user_id: 0,
    item_name: '',
    requested: 1,
    gifted: 0,
    new_used: 'used',
    description: '',
    suggested_example: '',
    priority: true,
    give: '0',
    giver_name: '',
    img_url: '',
  })

  const handleChange = (event) => {
    let value = event.target.value
    let name = event.target.name
    setNewItem((prevItem) => {
      if (name === 'priority' && value === 'true') {
        value = true
      }
      if (name === 'priority' && value === 'false') {
        value = false
      }
      return { ...prevItem, [name]: value }
    })
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Edit Item</Modal.Title>
      </Modal.Header>
      <form
        onSubmit={(event) => {
          handleAddItem(event, newItem)
          setNewItem(resetItem)
          onHide()
        }}
      >
        <Modal.Body>
          <div className='mb-3'>
            <label htmlFor='item_name' className='form-label'>
              Item
            </label>
            <input
              type='text'
              className='form-control'
              id='item_name'
              name='item_name'
              value={newItem.item_name}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
              Description
            </label>
            <input
              type='text'
              className='form-control'
              id='description'
              name='description'
              value={newItem.description}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='requested' className='form-label'>
              Requested
            </label>
            <input
              type='number'
              className='form-control'
              id='requested'
              name='requested'
              value={newItem.requested}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='gifted' className='form-label'>
              Gifted
            </label>
            <input
              type='number'
              className='form-control'
              id='gifted'
              name='gifted'
              value={newItem.gifted}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='new_used' className='form-label'>
              New or used?
            </label>
            <select
              className='form-select'
              id='new_used'
              name='new_used'
              value={newItem.new_used}
              onChange={(event) => handleChange(event)}
            >
              <option value='used'>Used</option>
              <option value='new'>New</option>
              <option value='either'>Either</option>
            </select>
          </div>
          <div className='mb-3'>
            <label htmlFor='suggested_example' className='form-label'>
              Suggested product
            </label>
            <input
              type='text'
              className='form-control'
              id='suggested_example'
              name='suggested_example'
              value={newItem.suggested_example}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='priority' className='form-label'>
              Priority
            </label>
            <select
              className='form-select'
              id='priority'
              name='priority'
              value={newItem.priority}
              onChange={(event) => handleChange(event)}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className='mb-3'>
            <label htmlFor='giver_name' className='form-label'>
              Given by
            </label>
            <input
              type='text'
              className='form-control'
              id='giver_name'
              name='giver_name'
              value={newItem.giver_name}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='img_url' className='form-label'>
              Image URL
            </label>
            <input
              type='url'
              className='form-control'
              id='img_url'
              name='img_url'
              value={newItem.img_url}
              onChange={(event) => handleChange(event)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide} variant='outline-secondary'>
            Close
          </Button>
          <Button
            variant='primary'
            type='submit'
            onClick={(event) => handleChange(event)}
          >
            Add item
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
