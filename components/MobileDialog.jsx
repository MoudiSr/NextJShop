'use client'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { BsHouseDoor, BsShop } from 'react-icons/bs'
import { usePathname } from 'next/navigation';
import {  
    IoBagCheckOutline
} from 'react-icons/io5'
import Link from 'next/link'

export default function MobileDialog({mobileMenuOpen, setMobileMenuOpen}) {
    const pathname = usePathname()

  return (
    <Transition.Root show={mobileMenuOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setMobileMenuOpen}>
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
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-[-100%]"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-[-100%]"
              >
                
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white shadow-xl ">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Menu</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8 overflow-hidden">
                        <div className="flow-root">
                            <ul role="list">
                                <li className={`py-6 px-2 rounded-md ${pathname == '/' ? "bg-gray-100 text-[#8966AB]" : "text-gray-900"}`}>
                                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium flex place-center">
                                        <BsHouseDoor className='mr-2 text-2xl' />
                                        <span className='text-xl'>Home</span>
                                    </Link>
                                </li>
                                <li className={`py-6 px-2 rounded-md ${pathname.startsWith("/shop") ? "bg-gray-100 text-[#8966AB]" : "text-gray-900"}`}>
                                    <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium flex place-center">
                                        <BsShop className='mr-2 text-2xl' />
                                        <span className='text-xl'>Shop</span>
                                    </Link>
                                </li>
                                <li className={`py-6 px-2 rounded-md ${pathname == '/checkout' ? "bg-gray-100 text-[#8966AB]" : "text-gray-900"}`}>
                                    <Link href="/checkout" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium flex place-center">
                                        <IoBagCheckOutline className='mr-2 text-2xl' />
                                        <span className='text-xl'>Checkout</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
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
