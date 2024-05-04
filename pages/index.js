import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
    const router = useRouter();
    const handleClick = () => {
        console.log('Hello')
        router.push('/product')
        //replace is similler to push but it replace the page
        //router.replace('/product');
    };
    return (
        // <div>
        //     <h1>Home Page</h1>
        //     <Link href="/blog">
        //         <p>Blog</p>
        //     </Link>
        //     <Link href="/product">
        //       <p>Product</p>
        //     </Link>
        //     <button onClick={handleClick}>
        //         Place Order
        //     </button>
        // </div>
        <>
            <h1>Next - Js Pre Rendering</h1>
            <Link href="/users">
                <h3>Users</h3>
            </Link>
            <Link href="/posts">
                <h3>Posts</h3>
            </Link>
        </>
    )
}

export default Home