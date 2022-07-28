import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function EditModal({ show, onHide, item, handleEdit }) {
  const [newItem, setNewItem] = useState(item)
  const {
    item_id,
    item_name,
    requested,
    gifted,
    new_used,
    description,
    suggested_example,
    priority,
    giver_name,
    img_url,
  } = newItem

  const handleChange = (event) => {
    let value = event.target.value
    let name = event.target.name
    setNewItem((prevItem) => {
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
      <Modal.Header closeButton className='border-bottom border-primary'>
        <Modal.Title id='contained-modal-title-vcenter'>Edit Item</Modal.Title>
      </Modal.Header>
      <form
        onSubmit={(event) => {
          handleEdit(event, newItem)
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
              value={item_name}
              onChange={(event) => handleChange(event, item_id)}
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
              value={description}
              onChange={(event) => handleChange(event, item_id)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='requested' className='form-label'>
              Requested
            </label>
            <input
              type='number'
              min='1'
              className='form-control'
              id='requested'
              name='requested'
              value={requested}
              onChange={(event) => handleChange(event, item_id)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='gifted' className='form-label'>
              Gifted
            </label>
            <input
              type='number'
              min='0'
              max={requested.toString()}
              className='form-control'
              id='gifted'
              name='gifted'
              value={gifted}
              onChange={(event) => handleChange(event, item_id)}
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
              value={new_used}
              onChange={(event) => handleChange(event, item_id)}
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
              id='susuggested_example'
              name=''
              value={suggested_example}
              onChange={(event) => handleChange(event, item_id)}
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
              value={priority}
              onChange={(event) => handleChange(event, item_id)}
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
              value={giver_name}
              onChange={(event) => handleChange(event, item_id)}
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
              value={img_url}
              onChange={(event) => handleChange(event, item_id)}
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
            onClick={(event) => handleChange(event, item_id)}
          >
            Submit changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
