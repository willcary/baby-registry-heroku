import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import RegistryItem from './RegistryItem'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ConfirmationModal from './modals/ConfirmationModal'
import AddItemModal from './modals/AddItemModal'

import '../App.min.css'
import { RegistryItems } from '../assets/ts/types.js'
import { loginEmail1, loginEmail2 } from '../assets/js/constants.js'
import { FaPlus } from 'react-icons/fa'

export default function Registry() {
  const { user, isAuthenticated } = useAuth0()
  const [registryItems, setRegistryItems] = useState<RegistryItems[]>([])

  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const [showAddItemModal, setShowAddItemModal] = useState(false)

  //Check is user is registry creator
  const checkEmail = () =>
    user?.email === loginEmail1 || user?.email === loginEmail2

  // Retrieving data from server on initial load
  const getItems = async () => {
    try {
      const response = await fetch('/items')
      const jsonData = await response.json()
      setRegistryItems(jsonData)
    } catch (error: any) {
      console.error(error.message)
    }
  }
  useEffect(() => {
    getItems()
  }, [])

  //================================== Handle CHANGE function ==================================
  const handleChange: any = (
    event: React.ChangeEvent<HTMLInputElement>,
    item_id: string
  ) => {
    const value = event.target.value
    const name = event.target.name
    setRegistryItems((prevItems) => {
      const newRegistryItems = prevItems.map((obj) => {
        if (item_id === obj.item_id) {
          return { ...obj, [name]: value }
        }
        return obj
      })
      return newRegistryItems
    })
  }

  //================================== Handle SUBMIT function ==================================
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const changedItems: RegistryItems[] = []
    setRegistryItems((prevItems) => {
      const newRegistryItems = prevItems.map((item) => {
        if (Number(item.give) > 0 && item.gifted < item.requested) {
          changedItems.push({
            ...item,
            gifted: Number(item.give) + item.gifted,
            give: '0',
          })
          return { ...item, gifted: Number(item.give) + item.gifted, give: '0' }
        }
        return item
      })
      setShowConfirmationModal(false)
      return newRegistryItems
    })
    changedItems.forEach(async (item: any) => {
      try {
        const response = await fetch(`/items/${item.item_id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        })
        window.location.href = '/'
      } catch (error: any) {
        console.error(error.message)
      }
    })
  }

  //================================== Handle DELETE function ==================================
  const handleDelete = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item_id: string
  ) => {
    event.preventDefault()

    try {
      const deleteItem = await fetch(`/items/${item_id}`, {
        method: 'DELETE',
      })
      setRegistryItems((prevItems) => {
        const newRegistryItems = prevItems.filter(
          (item) => item.item_id !== item_id
        )
        return newRegistryItems
      })
    } catch (error: any) {
      console.error(error.message)
    }
  }

  //================================== Handle EDIT function ==================================
  const handleEdit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: RegistryItems
  ) => {
    event.preventDefault()
    try {
      const response = await fetch(`/items/${item.item_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      })
      window.location.href = '/'
    } catch (error: any) {
      console.error(error.message)
    }
  }

  //================================== Handle ADDITEM function ==================================
  const handleAddItem = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: RegistryItems
  ) => {
    event.preventDefault()
    setRegistryItems((prevItems) => {
      const newRegistryItems = [...prevItems, item]
      return newRegistryItems
    })
    try {
      const body = item
      const response = await fetch('/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      window.location.href = '/'
    } catch (error: any) {
      console.error(error.message)
    }
  }

  //======================= function that returns grid of items in registry =======================
  function itemFilterMapGrid(isGiftNeeded: boolean, priorityCards: boolean) {
    const isPriority = (item: RegistryItems) =>
      priorityCards ? item.priority : !item.priority

    return (
      <div className='registry-item-grid border rounded-1 p-3'>
        {registryItems
          .filter((item) => item.gifted < item.requested && isPriority(item))
          .map((item) => {
            return (
              <RegistryItem
                key={item.item_id}
                item={item}
                isGiftNeeded={isGiftNeeded}
                handleChange={handleChange}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            )
          })}
      </div>
    )
  }

  return (
    <Container>
      <h1 className='mb-3 mt-4'>Emily and Will's Registry</h1>
      <p className='text-start ms-3 ms-md-5 me-3 me-md-5'>
        Welcome to our registry for our{' '}
        <span className='text-secondary fw-bold'>baby girl!</span> We made this
        registry app to encourage buying/regifting/thrifting used items whenever
        possible. Please claim an item if you plan to purchase it by entering
        the quantity and your name at the bottom of the item and click the
        "Reserve gift" button after each category. In addition to this list, we
        also welcome any used items that you are ready to pass on,
        maternaty/post-partum clothes etc. We prefer relatively gender neutral
        colors/a mix of colors for the more expensive reusable items so that
        they will be a good fit for our next lil' one.
      </p>
      <p className='text-start ms-3 ms-md-5 me-3 me-md-5'>
        Send items to: 714 Garrett Drive, Columbus, OH 43214{' '}
        <em>
          (Please don't send anything until after August 11th. We won't be
          living in this address until then!)
        </em>
      </p>
      {isAuthenticated && checkEmail() && (
        <button
          onClick={() => {
            setShowAddItemModal(true)
          }}
          type='button'
          className='btn btn-primary btn-lg hover-grow ms-auto me-auto d-flex flex-row justify-content-center align-items-center'
        >
          <FaPlus /> <span className='ms-2'>Add Item</span>
        </button>
      )}
      <AddItemModal
        show={showAddItemModal}
        onHide={() => setShowAddItemModal(false)}
        handleAddItem={handleAddItem}
      />
      <form>
        <Button
          onClick={() => setShowConfirmationModal(true)}
          variant='outline-primary'
          size='lg'
          className='mt-3 me-4 mb-4 w-50 box-shadow position-fixed bottom-0 end-0 z-index-'
        >
          Reserve gifts
        </Button>
        <ConfirmationModal
          show={showConfirmationModal}
          onHide={() => setShowConfirmationModal(false)}
          items={[
            ...registryItems.filter((item: any) => Number(item.give) > 0),
          ]}
          handleSubmit={handleSubmit}
        />

        <section className='mb-5'>
          <h2 className='mt-4 text-primary'>Priority</h2>
          {itemFilterMapGrid(true, true)}
        </section>
        <section className='mb-5'>
          <h2 className='mt-4 text-secondary'>Nice to Have</h2>
          {itemFilterMapGrid(true, false)}
        </section>
        <section className='mb-5'>
          <h2 className='mt-4 text-dark'>Already Gifted</h2>
          <div className='registry-item-grid border rounded-1 p-3'>
            {registryItems
              .filter((item) => item.gifted >= item.requested)
              .map((item) => {
                return (
                  <RegistryItem
                    key={item.item_id}
                    item={item}
                    isGiftNeeded={false}
                    handleChange={handleChange}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                )
              })}
          </div>
        </section>
      </form>
    </Container>
  )
}
