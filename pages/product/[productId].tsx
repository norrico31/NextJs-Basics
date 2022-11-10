import { useRouter } from "next/router"

function Product() {
    const { query: { productId } } = useRouter()
    return (
        <h1>Details about Product {productId}</h1>
    )
}

export default Product