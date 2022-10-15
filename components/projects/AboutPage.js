import Image from "next/image";

export default function AboutPage() {
    return (
        <div class='typora-export os-windows'>
            <div class='typora-export-content'>
                <div id='write'>
                    <p className="text-3xl md:text-4xl font-semibold">안녕하세요, 반갑습니다. <br />개발자
                        <span className="text-gray-500 font-bold"> 김유선</span>입니다!</p>
                    <div className="flex flex-col md:flex-row items-center">
                        <Image
                            width="300px"
                            height="300px"
                            className="w-9/10 md:w-1/4 pr-10"
                            alt='프로필 이미지'
                            src='/pro.png' />
                        <div className="w-full md:w-3/4">
                            <p className="font-semibold text-2xl md:text-3xl">
                                <span>Contact &amp; Channels</span>
                            </p>
                            <hr />
                            <p><strong>📧 Email | </strong><span>knews2@naver.com</span></p>
                            <p><strong>🐱 Github | </strong>
                                <a href='https://github.com/robin3565' target='_blank'>https://github.com/robin3565</a></p>
                        </div>
                    </div>

                    <p className="font-semibold text-2xl md:text-3xl"><strong><span>💻</span></strong>
                        <span> Web Front-end Developer</span>
                    </p>
                    <hr />
                    <p><span>프론트엔드 웹 개발자를 꿈꾸며,</span> <br/>
                    <span>Vanilla JS와 React을 이용한 Web Frontend를 개발하고 있습니다.</span></p>
                    <p className="font-semibold text-2xl md:text-3xl mt-10"><span>🛠 Stacks 개발 기술</span></p>
                    <hr />
                    <h2 id='communication' className="text-2xl md:text-3xl mt-5"><span>Communication</span></h2>
                    <ul className="list-disc">
                        <li><span>적극적인 태도로 생각을 표현합니다.</span></li>
                        <li><span>항상 배우려는 자세로 대화에 임합니다.</span></li>
                    </ul>
                    <h2 id='html--css' className="text-2xl md:text-3xl mt-10"><span>HTML &amp; CSS</span></h2>
                    <ul className="list-disc">
                        <li><span>HTML, CSS로 웹 레이아웃을 설계할 수 있습니다.</span></li>
                        <li><span>시맨틱한 웹 개발을 선호합니다.</span></li>
                        <li><span>반응형 웹 개발을 할 수 있습니다.</span></li>
                    </ul>
                    <h2 id='javascript' className="text-2xl md:text-3xl mt-10"><span>JavaScript</span></h2>
                    <ul className="list-disc">
                        <li><span>JavaScript에 능숙합니다.</span></li>
                        <li><span>ES Modules의 모듈 시스템에 대해서 이해하고 이에 따라 적절한 도구를 활용합니다.</span></li>
                        <li><span>NPM 사용을 선호합니다.</span></li>
                    </ul>
                    <h2 id='react' className="text-2xl md:text-3xl mt-10"><span>React</span></h2>
                    <ul className="list-disc">
                        <li><span>React hooks 사용에 능숙하고, 함수형 컴포넌트에 익숙합니다.</span></li>
                        <li><span>재사용성을 고려해 컴포넌트를 합리적으로 분리합니다.</span></li>
                        <li><span>React.memo에 대해서 이해하고 웹 최적화를 위해 적절히 사용할 수 있습니다.</span></li>
                    </ul>
                    <h2 id='git--github' className="text-2xl md:text-3xl mt-10"><span>Git &amp; GitHub</span></h2>
                    <ul className="list-disc">
                    <li><span>Git을 활용한 소스코드 버전 관리 및 협업을 할 수 있습니다.</span></li>
                    </ul>
                    <p className="font-semibold text-2xl md:text-3xl mt-10"><span>🎓 Education 학위</span></p>
                    <hr />
                    <h2 id='한국외국어대학교' className="text-2xl md:text-3xl"><span>한국외국어대학교</span></h2>
                    <li><span>중국외교통상전공 </span><strong><span>학사</span></strong></li>
                    <li><span>3.6 / 4.5 학점</span></li>
                    <p className="font-semibold text-2xl md:text-3xl mt-10"><span>💡 Skills 자격 정보</span></p>
                    <hr />
                    <h2 id='정보처리기사' className="text-2xl md:text-3xl mt-10"><span>정보처리기사</span></h2>
                    <li><span>취득일자 : 20.08.28</span></li>
                    <li><span>등록번호 : 20202060587Z</span></li>
                    <li><span>발행기관 : 한국산업인력공단</span></li>
                    <h2 id='전자상거래관리사2급' className="text-2xl md:text-3xl mt-10"><span>전자상거래관리사2급</span></h2>
                    <li><span>취득일자 : 17.09.27</span></li>
                    <li><span>등록번호 : 17849620046B</span></li>
                    <li><span>발행기관 : 한국산업인력공단</span></li>
                </div>
            </div>
        </div>
    )
}