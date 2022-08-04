import Button from 'react-bootstrap/Button'
import ConfirmationModal from './modals/ConfirmationModal'

function GuestFormContainer(props: any) {
  const {
    children,
    showConfirmationModal,
    setShowConfirmationModal,
    registryItems,
    handleSubmit,
    priority,
  } = props
  return (
    <form>
      <div className='mb-5'>
        {/* Using react composition to leverage conditional guest form */}
        {children}
        <Button
          onClick={() => setShowConfirmationModal(true)}
          variant={priority ? 'outline-primary' : 'outline-secondary'}
          size='lg'
          className='mt-2 w-100'
        >
          Reserve gift
        </Button>
      </div>
      <ConfirmationModal
        show={showConfirmationModal}
        onHide={() => setShowConfirmationModal(false)}
        items={[...registryItems.filter((item: any) => Number(item.give) > 0)]}
        handleSubmit={handleSubmit}
      />
    </form>
  )
}

export default GuestFormContainer
