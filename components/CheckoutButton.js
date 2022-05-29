import Link from "next/link";
import React from "react";

export default function CheckoutButton({ item }) {
  return (
    <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0">
      <Link href={`/checkout/${item.id}`}>
        <a className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:bg-green-600 rounded-xl">
          Checkout ({`${item.currency.symbol} ${item.price}`})
        </a>
      </Link>
    </div>
  )
}