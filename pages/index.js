import { contents } from '../components/@공통/data'
import TypewriterComponent from "typewriter-effect";
import { MainLayout } from '../components/@공통/Layout';

export default function Home() {
  return (
    <MainLayout>
      <section
        className="container mx-auto p-5 items-center w-full pt-16">
        <div className='w-full sm:w-1/2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>
          <TypewriterComponent
            options={{
              strings: [
                contents.kor,
                contents.eng,
                contents.chn
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
            }} />
        </div>
        <p className="text-xl sm:text-2xl lg:text-3xl">
          Learn, Build, Design for Web
        </p>
        <div>
          <p className='text-xl sm:text-2xl lg:text-3xl'>
            사용자에게 도움을 줄 수 있는 서비스를 구현하고자
            <br />프론트엔드 개발자를 꿈꾸게 되었습니다.
          </p>
          <p className='text-xl sm:text-2xl lg:text-3xl'>
            배우는 걸 좋아해 어려운 문제를 마주하더라도 잘 해결할 수 있습니다.<br />
          </p>
        </div>
      </section>
    </MainLayout>
  )
}
