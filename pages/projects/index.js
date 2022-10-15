import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { data, projectsmenu } from "../../components/@공통/data";
import { MainLayout } from "../../components/@공통/Layout";
import MenuItem from "../../components/atoms/MenuItem";
import ProjectItem from "../../components/atoms/ProjectItem";
import ProjectTitle from "../../components/atoms/ProjectTitle";

export default function Projects() {
    const router = useRouter()
    const [hash, setHash] = useState('all');

    useEffect(() => {
        setHash(router.asPath.split('#')[1])
    }, [router])

    return (
        <MainLayout>
            <div className="w-full md:w-1/2 pt-16">
                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Projects for experience<span className="text-gray-500">.</span></p>
                <p className="text-xl sm:text-2xl lg:text-3xl">개발자가 되기 위해 진행했던 그 동안의 프로젝트들을 소개합니다. 매달 프로젝트를 1개 이상 진행하며 개발 경험을 쌓았습니다.</p>
            </div>
            <div className="border-b border-primary-black">
                <nav className="flex p-0 pb-5">
                    {
                        projectsmenu.map((item, idx) => (
                            <MenuItem
                                item={item}
                                hash={hash}
                                key={idx}
                            />
                        ))
                    }
                </nav>
            </div>
            {data.map(({ title, subtitle, state }, idx) => {
                return (
                    <>
                        <ProjectTitle key={idx} title={title} subtitle={subtitle} hash={hash} />
                        <div className="flex flex-wrap justify-between">
                            {
                                state.map((data, index) => (
                                    <ProjectItem key={index} data={data} hash={hash} />
                                ))
                            }
                        </div>
                    </>
                )
            })}
        </MainLayout>
    )
}

