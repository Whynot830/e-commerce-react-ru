import { CopyrightIcon } from "lucide-react"

const Footer = () => {
    return (
        <footer className="flex justify-between bg-black/10">
            <div className="container flex py-3 min-h-14 max-w-screen-2xl justify-center sm:justify-between gap-4 sm:items-center">
                <p className="flex items-center text-sm font-semibold text-wrap">
                    <CopyrightIcon size={14} className="mr-1" /> FS 2024 &mdash; All rights reserved
                </p>
                {/* <ul className="sm:flex space-y-2 sm:space-x-5 sm:space-y-0 text-sm font-medium">
                    <li><a href="">Terms</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Cookie Policy</a></li>
                </ul> */}
            </div>

        </footer>
    )
}

export default Footer