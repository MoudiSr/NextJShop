'use client'
import {useState} from "react"

const Card = ({id, name, image, price, cart, setCart}) => {
    const [quantity, setQuantity] = useState(1)
    const [totalPrice, setTotalPrice] = useState(price)

    const handleAdd = () => {
        setCart([...cart, {
            id: cart.length+1,
            name: name,
            image: image,
            price: totalPrice,
            quantity: quantity
        }])
    }

    return (
        <div key={id} className="group border-gray-100/30 m-8 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={image} alt="product image" />
            </a>
            <div className="mt-4 px-5 pb-5">
                <div className="flex justify-between">
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-white">{name}</h5>
                    </a>
                    <div>
                        <select className="text-black w-14 h-10 border-[1px] rounded-md" onChange={e => {setQuantity(e.target.value);setTotalPrice(e.target.value*price)}} defaultValue={1}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-white">${price}</span>
                    </p>
                    <p>
                        <span className="text-xl font-bold text-white">${totalPrice}</span>
                    </p>
                </div>
                <div className="flex justify-between mx-8 mb-4 ">
                    <input type="radio" className="" name={`type${id}`} value="1" />
                    <input type="radio" className="" name={`type${id}`} value="2" />
                    <input type="radio" className="" name={`type${id}`} value="3" />
                    <input type="radio" className="" name={`type${id}`} value="4" />
                    <input type="radio" className="" name={`type${id}`} value="5" />
                </div>
                <a onClick={() => handleAdd()} className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-[#da0037] px-5 py-2.5 text-center font-medium text-white text-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart
                </a>
            </div>
        </div>
    )

}

export default Card