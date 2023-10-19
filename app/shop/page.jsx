import Card from "components/Card"

const products = [
    {
        id: 1,
        image: "/assets/images/kamis.png",
        name: "قميص",
        price: 8.5
    },
    {
        id: 2,
        image: "/assets/images/foular.png",
        name: "فولار",
        price: 1.5
    },
    {
        id: 3,
        image: "/assets/images/habse.png",
        name: "حبسة",
        price: 1
    },
    {
        id: 4,
        image: "/assets/images/kitayfet.png",
        name: "كتيفات",
        price: 1
    }
]

const Shop = () => {

    return (
        <div>
            <h1 className="text-center text-2xl">Products</h1>
            <div>
                <div className="flex flex-wrap p-4 justify-center">
                    {products.map((product) => (
                      <Card id={product.id} name={product.name} image={product.image} price={product.price} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop