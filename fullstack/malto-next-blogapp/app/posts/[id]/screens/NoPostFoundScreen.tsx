import Link from "next/link";

const noPostFoundScreen = () => {
    return (
        <div className = "h-screen bg-gray-100 flex flex-col justify-center items-center gap-5">
            <img src="/missing.svg" alt="Next.js logo" className="h-[15dvh] w-auto" />
            <h2 className = "text-2xl">Sorry! No post was found with that ID.</h2>
            <p className = "text-md">Please try with a different post ID.</p>
            <Link href="/" className = "underline underline-offset-4 hover:text-blue-800">Back to Home</Link>
        </div>
    )
}

export default noPostFoundScreen