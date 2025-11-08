import next from "../../../public/next.svg"

const Footer = () => {
    return(
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside className = "flex flex-row justify-between items-center">
                <p>
                    Copyright © {new Date().getFullYear()} - All rights reserved by Lanz Alexander Malto. Made with NextJS. 
                </p>
                <img src = {next}/>
            </aside>
        </footer>
    )
}

export default Footer