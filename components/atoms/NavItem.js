import Link from "next/link";

export default function NavItem({ item }) {
    return (
        <Link
            href={`/${item.toLowerCase()}`}>
            <a className="mr-3 hover:bg-primary-black hover:text-off-white p-2 rounded-full">
                {item}
            </a>
        </Link>
    )
}