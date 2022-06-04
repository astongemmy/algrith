import Link from "next/link";
import React from "react";

export default function CheckoutButton({ product_slug, item, requirements }) {
  return (
    <div className="w-full lg:w-2/3 lg:pr-2 mb-4 lg:mb-0">
      <Link href={`/checkout/${product_slug}/${item.id}?requirements=${JSON.stringify(requirements)}`}>
        <a className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-green-500 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:bg-green-600 rounded-xl">
          Checkout ({`${item.currency.symbol} ${item.price}`})
        </a>
      </Link>
    </div>
  )
}