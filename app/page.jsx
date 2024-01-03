'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'


const Home = () => {
    return (
        <div className="flex p-4 justify-center align-center mt-[2rem]">
            <div className='grid'>
                <img src="assets/images/icon2xxxhdpi.png" className="w-60 h-60 m-2 mb-12" />
                <Link href="/shop">
                    <motion.button className="rounded-xl shadow-xl bg-[#00B49F] p-2 w-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Shop Now
                    </motion.button>
                </Link>
                <div className="flex justify-center mt-10">
                    <img src="assets/images/shi3ar.png" className="w-22 h-20" />
                </div>
            </div>
        </div>
    )
}

export default Home