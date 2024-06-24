import { useState } from 'react'
import { AddonItemInterface } from '../../../../../interfaces'
import { addOnInitialValue } from '../../../../../constants'
import { useNavigate } from 'react-router-dom'

export const useModalContent = () => {
  const [modalActive1, setModalActive1] = useState<boolean>(false)
  const [addonsList] = useState<AddonItemInterface[]>(structuredClone(addOnInitialValue))
  const navigate = useNavigate()

  
  return {modalActive1, setModalActive1, addonsList, navigate}
}
