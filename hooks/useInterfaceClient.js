import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsFromInterface } from '../slices/product'

export default function useInterfaceClient() {
  const dispatch = useDispatch()
  const { productInterface } = useSelector((state) => state.product)
  useEffect(() => {
    dispatch(getProductsFromInterface())
  }, [])
  return { productInterface }
}