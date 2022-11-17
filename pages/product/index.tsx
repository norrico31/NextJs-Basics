import Link from "next/link"

function ProductList() {
    return (
        <>
            <Link href='/'>Home</Link>
            <Link href='/product/1'>Product 1</Link>
            <Link href='/product/2'>Product 2</Link>
            <Link href='/product/3' replace>Product 3</Link>
        </>
    )
}
export default ProductList