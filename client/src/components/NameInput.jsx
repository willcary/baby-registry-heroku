import '../App.min.css'

export default function NameInput({
  item_id,
  giver_name,
  isGiftNeeded,
  handleChange,
}) {
  return (
    <label htmlFor={'name-input-' + item_id}>
      From:{' '}
      <input
        id={'name-input-' + item_id}
        name={'giver_name'}
        type='text'
        className='name-input'
        disabled={!isGiftNeeded}
        placeholder='name'
        // account for error before data loads
        value={giver_name ? giver_name : ''}
        onChange={(event) => handleChange(event, item_id)}
      />
    </label>
  )
}
