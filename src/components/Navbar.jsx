import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <header className="xl:container xl:mx-auto mt-8 px-4 flex items-center justify-between">
            <Link to='/' className="font-bold text-yellow-300 hover:text-yellow-600 transition-colors">Logo</Link>
            <nav aria-label="Primary">
                <ul className="flex gap-3">
                    <li><Link to='/players' className="text-yellow-300 hover:text-yellow-600 transition-colors">Players</Link></li>
                    <li><Link to='/teams' className="text-yellow-300 hover:text-yellow-600 transition-colors">Teams</Link></li>
                </ul>
            </nav>
        </header>
    )
}