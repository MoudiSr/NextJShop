'use client'
import Card from "components/Card"
import CategoryDropdown from "@components/CategoryDropdown"
import data from "@data/data"
import { redirect, usePathname } from "next/navigation"

const Shop = () => {
    const products=data;
    const path = usePathname();

    return (
        <div>
            <h1 className="text-center text-2xl">المنتجات</h1>
            <div className="flex justify-center pt-4 px-12">
                <CategoryDropdown />
            </div>
            <div>
                <div className="flex flex-wrap p-4 justify-center">
                    {products.map((product) => {
                        if (product.cat == "كشفيات" && path === "/shop/1"){
                            return <Card {...product} />
                        } else if (product.cat == "كتب" && path === "/shop/2"){
                            return <Card {...product} />
                        } else if (product.cat == "اكسسوارات" && path === "/shop/3"){
                            return <Card {...product} />
                        } else {
                            redirect("/notfound")
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Shop