import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setCheckout } from '../slices/checkout'

export default function CheckoutButton({ item, requirements }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const setCheckoutPayload = (e) => {
    e.preventDefault()
    dispatch(setCheckout({ _package: item, requirements }))
    router.push('/checkout')
  }

  return (
    <div className="w-full lg:w-2/3 lg:pr-2 mb-4 lg:mb-0">
      <span onClick={setCheckoutPayload} className="cursor-pointer">
        <a className="dark:bg-opacity-50 block py-3 px-2 leading-8 font-heading dark:font-normal font-semibold tracking-wider text-xl text-white text-center bg-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:bg-green-600 rounded-xl">
          Checkout ({`${item?.currency?.symbol} ${item.price}`})
        </a>
      </span>
    </div>
  )
}