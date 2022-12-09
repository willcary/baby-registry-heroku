import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import IntroText from './intro-text/IntroText'
import RegistryItem from './registry-items/RegistryItem'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ConfirmationModal from './modals/ConfirmationModal'
import AddItemModal from './modals/AddItemModal'

import '../App.min.css'
import { RegistryItems } from '../assets/ts/types.js'
import { FaPlus } from 'react-icons/fa'
import { checkIfAuth } from '../assets/js/functions'

export default function Registry() {
  const { user, isAuthenticated } = useAuth0()
  const [registryItems, setRegistryItems] = useState<RegistryItems[]>([])

  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const [showAddItemModal, setShowAddItemModal] = useState(false)

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
      <IntroText />
      <form>
        <div className='fixed-btn-container'>
          <Button
            onClick={() =>
              checkIfAuth(user, isAuthenticated)
                ? setShowAddItemModal(true)
                : setShowConfirmationModal(true)
            }
            variant='primary'
            size='lg'
            className='fixed-btn d-flex align-items-center justify-content-center'
          >
            {checkIfAuth(user, isAuthenticated) ? (
              <>
                <FaPlus /> Add Item
              </>
            ) : (
              'Reserve gifts'
            )}
          </Button>
        </div>
        <AddItemModal
          show={showAddItemModal}
          onHide={() => setShowAddItemModal(false)}
          handleAddItem={handleAddItem}
        />
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
        <section className='last-section'>
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
