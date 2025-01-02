'use client'
import Card from "components/Card"
import CategoryDropdown from "@components/CategoryDropdown"
import data from "@data/data"
import { redirect, usePathname } from "next/navigation"

const Shop = () => {
    const products = data;
    const path = usePathname();
    console.log(path)

    return (
        <div>
            <h1 className="text-center text-2xl m-4">{
                path == "/shop/1" ? "كشفيات" : path == "/shop/2" ? "كتب" : path == "/shop/3" ? "اكسسوارات" : "404"
            }</h1>

            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center w-[90%]">
                    <CategoryDropdown />
                </div>
                <div className="flex flex-wrap p-4 justify-center">
                    {products.map((product) => {
                        if (product.cat == "كشفيات" && path == "/shop/1") {
                            return <Card {...product} />
                        } else if (product.cat == "كتب" && path == "/shop/2") {
                            return <Card {...product} />
                        } else if (product.cat == "اكسسوارات" && path == "/shop/3") {
                            return <Card {...product} />
                        } else if (path != "/shop/1" && path != "/shop/2" && path != "/shop/3") {
                            redirect("/notfound")
                        }
                    })}
                    {path == "/shop/2" || path == "/shop/3" ?
                        <div>
                            <h1 className="text-5xl mt-[2rem]"><span className="blinking-cursor"></span>..قريباً</h1>
                        </div>
                        : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop