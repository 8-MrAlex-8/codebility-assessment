const Footer = () => {
    {/* footer for my signature */}
    return(
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside className = "flex flex-row justify-between items-center">
                <p>
                    Copyright © {new Date().getFullYear()} - All rights reserved by Lanz Alexander Malto. Made with
                </p>
                {/* Use the public static path for the SVG so it renders consistently */}
                <img src="/next.svg" alt="Next.js logo" className="h-4 w-auto" />
            </aside>
        </footer>
    )
}

export default Footer