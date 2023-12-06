import Card from "components/Card"
import CategoryDropdown from "@components/CategoryDropdown"

const products = [
    {
        id: 1,
        image: "/assets/images/kamis-",
        name: "قميص",
        price: 8.5,
        has: true
    },
    {
        id: 2,
        image: "/assets/images/foular-",
        name: "فولار",
        price: 1.5,
        has: true
    },
    {
        id: 3,
        image: "/assets/images/habse-",
        name: "حبسة",
        price: 1,
        has: false
    },
    {
        id: 4,
        image: "/assets/images/kitayfet-",
        name: "كتيفات",
        price: 1,
        has: true
    }
]

const Shop = () => {

    return (
        <div>
            <h1 className="text-center text-2xl">المنتجات</h1>
            <div className="flex justify-center pt-4 px-12">
                <CategoryDropdown />
            </div>
            <div>
                <div className="flex flex-wrap p-4 justify-center">
                    {products.map((product) => (
                      <Card {...product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop