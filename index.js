const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
const path = require('path')
const PORT = process.env.PORT || 5000

//process.env.PORT
//process.env.NODE_ENV = production or undefined

//middleware
app.use(cors())
app.use(express.json())

// app.use(express.static(path.join(__dirname, 'client/build')))
// app.use(express.static('client/build'))

if (process.env.NODE_ENV === 'production') {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, 'client/build')))
}

// ====================== ROUTES ====================== //

// Add items
app.post('/items', async (req, res) => {
  try {
    const {
      user_id,
      item_name,
      requested,
      gifted,
      new_used,
      description,
      suggested_example,
      priority,
      give,
      giver_name,
      img_url,
    } = req.body
    const newItem = await pool.query(
      'INSERT INTO items (user_id, item_name, requested, gifted, new_used, description, suggested_example, priority, give, giver_name, img_url) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
      [
        user_id,
        item_name,
        requested,
        gifted,
        new_used,
        description,
        suggested_example,
        priority,
        give,
        giver_name,
        img_url,
      ]
    )

    res.json(newItem.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

// Get all items

app.get('/items', async (req, res) => {
  try {
    const allItems = await pool.query('SELECT * FROM items')
    res.json(allItems.rows)
  } catch (error) {
    console.error(error)
  }
})

app.get('./items/:id', async (req, res) => {
  try {
    const { id } = req.params
    const item = await pool.query('SELECT * FROM items WHERE item_id = $1', [
      id,
    ])
    res.json(item.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

// update an item

app.put('/items/:id', async (req, res) => {
  try {
    const { id } = req.params
    const {
      user_id,
      item_name,
      requested,
      gifted,
      new_used,
      description,
      suggested_example,
      priority,
      give,
      giver_name,
      img_url,
    } = req.body
    const updateItem = await pool.query(
      'UPDATE items SET user_id = $1, item_name = $2, requested = $3, gifted = $4, new_used = $5, description = $6, suggested_example = $7, priority = $8, give = $9, giver_name = $10, img_url = $11 WHERE item_id = $12',
      [
        user_id,
        item_name,
        requested,
        gifted,
        new_used,
        description,
        suggested_example,
        priority,
        give,
        giver_name,
        img_url,
        id,
      ]
    )

    res.json('Item was updated!')
  } catch (error) {
    console.error(error.message)
  }
})

// delete an item

app.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteItem = await pool.query(
      'DELETE FROM items WHERE item_id = $1',
      [id]
    )

    res.json('Item was deleted')
  } catch (error) {
    console.error(error.message)
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

// log app status
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})
