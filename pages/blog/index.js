import { MainLayout } from "../../components/@공통/Layout";
import BlogItem from "../../components/atoms/BlogItem";
import MenuItem from "../../components/atoms/MenuItem";
import { DATABASE_ID, TOKEN } from "../../config";
import { useRouter } from 'next/router'
import { blogmenu } from "../../components/@공통/data";
import { useEffect, useState } from "react";

export default function Blog({ result }) {
    const router = useRouter()
    const [hash, setHash] = useState('all');

    useEffect(() => {
        setHash(router.asPath.split('#')[1])
    },[router])

    return (
        <MainLayout>
            <div
                className="w-full md:w-1/2 pt-16">
                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The contents <br/> what I learned<span className="text-gray-500">.</span></p>
                <p className="text-xl sm:text-2xl lg:text-3xl">개발 공부를 기록합니다. <br/>기록하는 습관을 통해 더 오래 기억하려고 합니다.</p>
            </div>

            <div className="my-8 border-b border-primary-black">
                <nav className="flex p-0 pb-5 flex flex-wrap">
                    {blogmenu.map((item, idx) => (
                        <MenuItem key={idx} item={item} hash={hash}/>
                    ))}
                </nav>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 m-6 gap-8 sm:w-full">
                {
                    result.results.map(item => (
                        <BlogItem key={item.id} data={item} hash={hash} />
                    ))
                }
            </div>
        </MainLayout>
    )
}

export async function getStaticProps() {

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify(
            {
                page_size: 100
            }
        )
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
    const result = await res.json();

    return {
        props: { result },
    }
}