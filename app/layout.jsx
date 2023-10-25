'use client'
import '@styles/global.css'
import ShoppingCart from 'components/ShoppingCart'
import {useState, useContext} from "react"
import CartProvider from '@components/CartProvider'
import MobileDialog from '@components/MobileDialog'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import NotCheckout from '@components/NotCheckout'

const metadata = {
    title: "Store",
    description: "Al Mahdi Scouts at Jebchit, fully functional store web application"
}

const RootLayout = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    return (
        <html>
            <CartProvider>
                <body className='bg-gray-800'>
                    <nav className='w-full bg-[#444444] fixed top-0 left-0 right-0 z-10 border-b-2 border-b-[#da0037] shadow-inner h-auto p-4'>
                        <div className='flex justify-between'>
                            <div className='space-x-4'>
                                <div className="flex ">
                                    <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(true)}
                                    >
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                                <MobileDialog mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                            </div>
                            <div>
                         
                                {pathname != '/checkout' && 
                                    <NotCheckout open={open} setOpen={setOpen} />
                                }
                            </div>
                        </div>
                    </nav>
                    
                    <main className="app">
                        { children }
                    </main>
                </body>
            </CartProvider>
        </html>
    )
}

export default RootLayout