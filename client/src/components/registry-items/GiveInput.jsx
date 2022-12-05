import '../../App.min.css'

export default function GiveInput({
  item_id,
  give,
  isGiftNeeded,
  maxGift,
  handleChange,
}) {
  return (
    <label htmlFor={'give-input-' + item_id} className='me-3'>
      Give:{' '}
      <input
        id={'give-input-' + item_id}
        name={'give'}
        type='number'
        min='0'
        max={maxGift}
        className='give-input'
        disabled={!isGiftNeeded}
        value={give}
        onChange={(event) => handleChange(event, item_id)}
      />
    </label>
  )
}

// import '../App.min.css'

// interface ItemId {
//   item_id: string
//   give: string
//   isGiftNeeded: boolean
//   maxGift: number
//   handleChange: React.ChangeEventHandler<HTMLInputElement>
// }

// export default function GiveInput({
//   item_id,
//   give,
//   isGiftNeeded,
//   maxGift,
//   handleChange,
// }: ItemId) {
//   return (
//     <label htmlFor={'give-input-' + item_id} className='me-3'>
//       Give:{' '}
//       <input
//         id={'give-input-' + item_id}
//         name={'give'}
//         type='number'
//         min='0'
//         max={maxGift}
//         className='give-input'
//         disabled={!isGiftNeeded}
//         value={give}
//         onChange={(event) => handleChange(event, item_id)}
//       />
//     </label>
//   )
// }
