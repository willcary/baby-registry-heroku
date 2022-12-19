export interface RegistryItemTypes {
  item_id: string
  user_id: number
  item_name: string
  requested: number
  gifted: number
  new_used: string
  description: string
  suggested_example: string
  priority: boolean
  give: string
  giver_name: string
  img_url?: string
}

export interface Item {
  item: RegistryItemTypes
  isGiftNeeded: boolean
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  handleDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: string
  ) => void
  handleEdit: any
}

export interface EditItemInterface {
  show?: boolean
  onHide?: any
  item: RegistryItemTypes
  isGiftNeeded: boolean
  handleDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: string
  ) => void
  handleEdit: any
}

// NameInput.tsx
// export interface NameInputInterface {
//   item_id: string
//   giver_name: string
//   isGiftNeeded: boolean
//   handleChange: React.ChangeEventHandler<HTMLInputElement>
// }

// GiftInput.tsx
// export interface GiftInputInterface {
//   item_id: string
//   give: string
//   isGiftNeeded: boolean
//   maxGift: number
//   handleChange: React.ChangeEventHandler<HTMLInputElement>
// }

//interface for user data
export interface IntroProps {
  userInfo: {
    user_id: number
    baby_gender: string
    address: string
  }
  setUserInfo?: any
  didUserLoad?: boolean
}
export interface UserInfo {
  user_id: number
  baby_gender: string
  address: string
}
