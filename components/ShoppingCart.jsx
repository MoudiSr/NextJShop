'use client'
import { Fragment, useEffect, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CartContext } from "@components/CartProvider"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from 'next/navigation'


export default function ShoppingCart({open, setOpen}) {
    const {cart, setCart} = useContext(CartContext)
    const [total, setTotal] = useState(0)
    
    const pathname = usePathname();


    const handleDelete = (id) => {
        const filtered = cart.filter(item => item.id !== id)
        setCart(filtered)
    }

    useEffect(() => {
        setTotal(0)
        cart.forEach(p => {
            setTotal(prevTotal => prevTotal+p.price)
        })
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 cartItems">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8 overflow-hidden">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            <AnimatePresence>
                            {cart.map((product, index) => (
                              <motion.li 
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0, transition: {delay: 0.3*(index)} }}
                                exit={{ opacity: 0, x: 500, transition: {duration: 0.5} }}
                                viewport={{
                                  once: true,
                                }}
                                key={product.id} 
                                className="flex py-6"
                              >
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.image}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <div className='grid'>
                                        <h3>
                                          <a>{product.name}</a>
                                        </h3>
                                        <span className="font-[300] text-gray-500 text-sm">{product.type}</span>
                                        {product.name === "قميص" && <span className='font-[300] text-gray-500 text-sm mr-2'>Size: {product.size}</span>} 
                                      </div>
                                      
                                      <p className="ml-4">${product.price}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={() => handleDelete(product.id)}
                                        className="font-medium text-[#8966AB]"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </motion.li>
                            ))}
                            </AnimatePresence>
                          </ul>
                        </div>
                      </div>
                    </div> 

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>${total}</p> 
                      </div>
                      <div className="mt-6">
                        <button onClick={() => setOpen(false)} 
                          className="flex items-center justify-center rounded-md border border-transparent bg-[#E4C048] px-6 py-3 text-base font-medium text-gray-900 shadow-sm hover:bg-[#E4C048] w-full">
                          <Link
                            href="/checkout"
                          >
                              Checkout
                          </Link>
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-[#8966AB] "
                            onClick={() => setOpen(false)}
                          >
                            {pathname === "/" ? <Link href="/shop">Continue Shopping</Link> : "Continue Shopping"}
                            
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
