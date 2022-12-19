import { useAuth0 } from '@auth0/auth0-react'
import Card from 'react-bootstrap/Card'
import EditItem from './EditItem'
import GiveInput from './GiveInput'
import NameInput from './NameInput'

import { Item } from '../../assets/ts/types.js'
import { checkIfAuth } from '../../assets/js/functions'

export default function RegistryItem({
  item,
  isGiftNeeded,
  handleChange,
  handleDelete,
  handleEdit,
}: Item) {
  const { user, isAuthenticated } = useAuth0()

  const {
    item_id,
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
  } = item

  function determineBg(isGiftNeeded: boolean, priority: boolean) {
    if (isGiftNeeded && priority) {
      return 'primary'
    } else if (isGiftNeeded && !priority) {
      return 'secondary'
    } else {
      return 'info'
    }
  }

  return (
    <Card
      bg={determineBg(isGiftNeeded, priority)}
      text={isGiftNeeded ? 'white' : 'dark'}
      className='mb-2 text-start'
    >
      <Card.Img
        variant='top'
        src={img_url}
        alt={item_name}
        className='bg-light'
      />
      <Card.Header>
        <Card.Title className='mb-0 fs-4'>{item_name} </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Description:
          <span
            className={`d-block ps-2 pe-2 pt-1 pb-1 rounded-1 ${
              isGiftNeeded ? 'bg-opacity-lighter' : 'bg-opacity-darker'
            }`}
          >
            {description ? description : 'No description provided'}
          </span>
        </Card.Text>
        <Card.Text>
          Requested:{' '}
          <span
            className={`ps-2 pe-2 pt-1 pb-1 rounded-1 ${
              isGiftNeeded ? 'bg-opacity-lighter' : 'bg-opacity-darker'
            }`}
          >
            {requested}
          </span>
        </Card.Text>
        <Card.Text>
          Gifted:{' '}
          <span
            className={`ps-2 pe-2 pt-1 pb-1 rounded-1 ${
              isGiftNeeded ? 'bg-opacity-lighter' : 'bg-opacity-darker'
            }`}
          >
            {gifted}
          </span>
        </Card.Text>
        {checkIfAuth(user, isAuthenticated) && giver_name && (
          <Card.Text>
            Gifted by:{' '}
            <span
              className={`ps-2 pe-2 pt-1 pb-1 rounded-1 ${
                isGiftNeeded ? 'bg-opacity-lighter' : 'bg-opacity-darker'
              }`}
            >
              {giver_name}
            </span>
          </Card.Text>
        )}
        <Card.Text>
          New or used:{' '}
          <span
            className={`ps-2 pe-2 pt-1 pb-1 rounded-1 ${
              isGiftNeeded ? 'bg-opacity-lighter' : 'bg-opacity-darker'
            }`}
          >
            {new_used}
          </span>
        </Card.Text>
        <Card.Text>
          Suggested product:{' '}
          {suggested_example ? (
            <a
              href={suggested_example}
              target='_blank'
              rel='noreferrer'
              className={`ps-2 pe-2 pt-1 pb-1 rounded-1 ${
                isGiftNeeded
                  ? 'text-light bg-opacity-lighter'
                  : 'text-dark bg-opacity-darker'
              }`}
            >
              Follow Link
            </a>
          ) : (
            <span
              className={`ps-2 pe-2 pt-1 pb-1 rounded-1 ${
                isGiftNeeded
                  ? 'text-light bg-opacity-lighter'
                  : 'text-dark bg-opacity-darker'
              }`}
            >
              none
            </span>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {checkIfAuth(user, isAuthenticated) ? (
          <EditItem
            item={item}
            isGiftNeeded={isGiftNeeded}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ) : isGiftNeeded ? (
          <>
            <GiveInput
              item_id={item_id}
              give={give}
              isGiftNeeded={isGiftNeeded}
              maxGift={requested - gifted}
              handleChange={handleChange}
            />
            <NameInput
              item_id={item_id}
              giver_name={giver_name}
              isGiftNeeded={isGiftNeeded}
              handleChange={handleChange}
            />
          </>
        ) : (
          <Card.Text>
            Thank you{' '}
            <span className='fw-bold'>
              {giver_name ? giver_name : 'anonymous giver'}!
            </span>
          </Card.Text>
        )}
      </Card.Footer>
    </Card>
  )
}
