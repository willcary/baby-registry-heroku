import { useState } from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import DeleteModal from './modals/DeleteModal'
import EditModal from './modals/EditModal.jsx'
import '../App.min.css'
import { EditItemInterface } from '../assets/ts/types'

export default function EditItem({
  item,
  isGiftNeeded,
  handleDelete,
  handleEdit,
}: EditItemInterface) {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const { item_id, item_name, gifted } = item

  return (
    <div className='d-flex justify-content-end align-items-center'>
      <button
        onClick={() => setShowEditModal(true)}
        type='button'
        className={`btn hover-grow ${
          isGiftNeeded ? 'text-light' : 'text-dark'
        }`}
      >
        <FaRegEdit />
      </button>
      <button
        onClick={() => {
          setShowDeleteModal(true)
        }}
        type='button'
        className={`btn hover-grow ms-2 ${
          isGiftNeeded ? 'text-light' : 'text-dark'
        }`}
      >
        <FaRegTrashAlt />
      </button>
      <EditModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        item={item}
        handleEdit={handleEdit}
      />
      <DeleteModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        item_id={item_id}
        item_name={item_name}
        gifted={gifted}
        handleDelete={handleDelete}
      />
    </div>
  )
}
