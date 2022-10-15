import { MainLayout } from "../../components/@공통/Layout";

export default function Contact() {
    return (
        <MainLayout>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Contact<span className="text-gray-500">.</span></p>
            <p className="text-4xl"><span className="font-semibold">📧 Email |</span> knews2@naver.com</p>
            <p className="text-4xl"><span className="font-semibold">📱 Phone Number |</span> 010-3055-3565</p>
        </MainLayout>
    )
}