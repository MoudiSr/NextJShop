'use client'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation';
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CategoryDropdown() {
    const pathname = usePathname();

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-[#e4c048] px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-[#ffd651] ">
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-black" aria-hidden="true" />
            الأصناف
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right text-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/shop/1"
                  className={`${active && pathname == "/shop/1" ? 'bg-gray-100 text-[#e4c048]' : active ? 'bg-gray-100 text-gray-900' : pathname == '/shop/1' ? "text-[#e4c048]" : 'text-gray-700'} block px-4 py-2 text-sm`}
                >
                  كشفيات
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/shop/2"
                  className={`${active && pathname == "/shop/2" ? 'bg-gray-100 text-[#e4c048]' : active ? 'bg-gray-100 text-gray-900' : pathname == '/shop/2' ? "text-[#e4c048]" : 'text-gray-700'} block px-4 py-2 text-sm`}
                >
                  كتب
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/shop/3"
                  className={`${active && pathname == "/shop/3" ? 'bg-gray-100 text-[#e4c048]' : active ? 'bg-gray-100 text-gray-900' : pathname == '/shop/3' ? "text-[#e4c048]" : 'text-gray-700'} block px-4 py-2 text-sm`}
                >
                  اكسسوارات
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
