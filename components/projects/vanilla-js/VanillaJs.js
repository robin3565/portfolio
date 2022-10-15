import Link from "next/link";
import BackButton from "../../atoms/BackButton";

export default function VanillaJS() {
    return (
        <div className='typora-export os-windows'>
            <div className='typora-export-content'>
                <div id='write'>
                    <BackButton />
                    <h1 id='프론트엔드-개발을-위한-자바스크립트feat-vanillajs'><span>프론트엔드 개발을 위한 자바스크립트(feat. VanillaJS)</span></h1>
                    <p><strong><span>Keywords:</span></strong><span> JavaScript, Event, DOM, 비동기 제어</span><br />
                        <strong><span>Duration:</span></strong><span> 2022.09.14 ~ 2022.10.12</span><br />
                        <strong><span>Tool:</span></strong><span> Vanilla JS</span></p>
                    <p className='text-2xl font-medium'>자바스크립트를 이용해 프론트엔드 개발을 하고 있지만, 자바스크립트의 기본을 심층적으로 분석하고 공부해본 적은 없어 항상 아쉬웠습니다. 또, React 등 라이브러리를 주로 이용해
                        개발을 하면서 외부 라이브러리, 프레임워크의 동작 원리를 한 번쯤 공부해보고 싶었습니다.</p>
                    <p className='text-2xl font-medium'>이 스터디를 통해 자바스크립트의 기본기를 제대로 다지고, 코드 리뷰를 받으며 더 나은 코드를 작성할 수 있는 기반을 마련하고자 했습니다.</p>
                    <h2 id='스터디-소개'><span>스터디 소개</span></h2>
                    <p><strong>프론트엔드 개발을 위한 자바스크립트 스터디</strong>는 시니어 프론트엔드 개발자와 함께하는 온라인 스터디입니다. 단순한 강의가 아니라 매주 미션을 받아 수행하고, 코드 리뷰로 피드백을
                        받고, 해당 미션을 직접 구현하는 온라인 세션을 통해 질문하며 성장하는 스터디입니다.</p>
                    <h2 id='구현한-미션'><span>구현한 미션</span></h2>
                    <p>매주 진행한 미션에 대해 무엇을 배웠고, 어떻게 구현했는지 각각 정리해보았습니다.<br/>아래 미션을 클릭하면 정리한 페이지로 이동합니다.</p>
                    <Link href='vanillaJS/mission-1'>
                        <a className="text-xl font-bold text-blue-600">[Mission 01] TodoList 컴포넌트 만들기</a>
                    </Link>
                    <p></p>
                    <Link href='vanillaJS/mission-2'>
                        <a className="text-xl font-bold text-blue-600">[Mission 02] TodoList 업그레이드</a>
                    </Link>
                    <p></p>
                    <Link href='vanillaJS/mission-3'>
                        <a className="text-xl font-bold text-blue-600">[Mission 03] 공연 검색기</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}