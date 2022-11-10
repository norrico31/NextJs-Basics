import { useRouter } from "next/router"

function ProductReview() {
    const { query: { reviewId, productId } } = useRouter()

    return (
        <>
            <h1>Product - {productId}</h1>
            <h1>Review {reviewId}</h1>
        </>
    )
}

export default ProductReview