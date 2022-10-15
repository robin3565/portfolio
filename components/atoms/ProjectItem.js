import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectItem({ data, hash }) {
    const { title, menu, path, imgUrl } = data;
    const [showItem, setShowItem] = useState(true);

    const onShowItem = () => {
        if (!hash) {
            setShowItem(true);
        } else if (hash === 'all') {
            setShowItem(true);
        } else {
            menu.toLowerCase() === hash ? setShowItem(true) : setShowItem(false)
        }
    }

    useEffect(() => {
        onShowItem()
    }, [hash])


    return (
        <Link href={`projects/${path}`}>
            <a className={`${showItem ? 'visible' : 'hidden'} project__wrapper`}>
                <div className="project__inner">
                    <Image
                        width={600}
                        height={400}
                        layout='responsive'
                        className="rounded-large bg-cover"
                        src={imgUrl}
                        loading='lazy' />
                    <div className="project__items--hover rounded-large">
                        <div className="flex items-center justify-center project__item--hover rounded-large">
                            <span className="text-white font-medium text-xl">{title}</span>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}
