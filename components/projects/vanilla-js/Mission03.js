import Image from "next/image";
import BackButton from "../../atoms/BackButton";

export default function Mission03() {
    return (
        <div className='typora-export os-windows'>
            <div className='typora-export-content'>
                <div id='write'>
                    <BackButton />
                    <h1 id='vanillajs-study-mission-03'><span>[Mission 03] 공연 검색기</span></h1>
                    <h2 id='📝-배운-내용-요약'><strong><span>📝</span></strong><span> 배운 내용 요약</span></h2>
                    <p className="bg-slate-100 p-4"><strong><span>Keywords</span></strong><span>: 컴포넌트화, 느슨한 결합도, 비동기 제어, 이벤트 제어</span><br />
                        <strong><span>Duration</span></strong><span>: 2022.10.05</span><br />
                        <strong><span>Tool</span></strong><span>: Vanilla JS</span><br />
                        <span><strong>Actions</strong></span><br />
                        <span><strong>1. API 데이터 통신</strong>: 비동기 HTTP 통신 방법과 비동기 제어에 대한 이해</span><br/>
                        <span><strong>2. 웹 컴포넌트 이해</strong>: 느슨한 결합도(최소한의 의존성)를 고려한 구조화</span><br/>
                        <span><strong>3. Debounce 이벤트 제어 이해</strong></span>
                        </p>
                        <h2>📍 미션</h2>

                    <p><span>3주차 미션은 비동기 처리 방식을 이용해 </span><strong><span>공연 검색기</span></strong><span>를 만드는 것입니다. 1, 2주차 동안에는
                        내부에서 데이터를 생성하고 핸들링 했다면, 이번에는 외부의 데이터를 API로 받아와 렌더링하는 것으로, </span><strong><code>1) API 비동기
                            제어</code></strong><span>에 대해 알아보며, API 핸들링을 구현했습니다.</span></p>
                    <p><span>이번 미션도 마찬가지로 </span><strong><code>2) 컴포넌트화</code></strong><span> 및 </span><strong><code>3) 느슨한
                        결합도(최소한의 의존성)</code></strong><span>을 주의하며 기능을 구현했습니다. 그리고 마지막으로 이벤트 추가시 발생할 수 있는 문제점을 해결하기 위한
                        </span><strong><code>4) 이벤트 제어 방법인 디바운스(Debounce)</code></strong><span>에 대해 알아보았습니다.</span></p>
                    <p>이번 미션의 핵심은 컴포넌트 간의 의존성을 최소화하는 것을 고려하고, 비동기 제어를 통해 API로부터 데이터를 받아와 처리하는 검색기를 만드는 것입니다.</p>
                    <p>미션에서 구현한 사항은 <a className="text-blue-600" href='https://www.notion.so/2-TodoApp-d6bc44aef2c34299ad436b8702116dba'>
                        <strong>[미션3] 이디어츠 공연 검색기 만들기</strong>
                    </a>에 정리했습니다.</p>
                    <p className="text-xl m-0"><strong>1. API 비동기 제어</strong></p>
                    <p>미션 구현에 앞서 먼저 비동기 HTTP 통신과 비동기 제어 에 대해 정리해보았습니다. <a href='https://www.notion.so/Event-771ea661d437482d928583ffc88bb82b'><span className="text-blue-600">
                        <strong>(비동기 통신과 제어 정리글 바로가기)</strong></span></a></p>
                    <p>비동기적 통신 기술은 기존의 전체 페이지를 불러 오는 방식이 아닌 페이지의 ‘일부분’만 갱신하여 리소스 낭비를 줄이고 응답성을 향상시켰습니다. 비동기 제어 방식에는 Callback 함수, Promise, async~await가 있으나, 미션에서는 Promise와 async~await만 사용했습니다.</p>
                    <p className="text-xl"><strong>✔️ 미션 → Fetch API & Promise</strong></p>
                    <p className="m-0">미션에서 제공하는 비동기 처리 코드는 다음과 같습니다. 브라우저에 내장된 비동기 HTTP 통신 방식인 Fetch 메소드를 활용해 url로 API를 호출하고, Promise 객체로 반환된 값을 then() 메소드로 비동기 제어하여 순차적으로 처리합니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-01.png"}
                        loading='lazy'
                        width={900}
                        height={250} />
                    <p className="text-xl"><strong>async ~ await</strong></p>
                    <p>Promise then 메소드로 처리했던 비동기 제어는 async ~ await로 바꿔서 구현이 가능합니다. async ~ await는 try ~ catch 문으로 예외 처리도 구현 가능해 전체적으로 코드의 가독성을 높이고, 유지보수가 쉬워집니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-02.png"}
                        loading='lazy'
                        width={900}
                        height={380} />
                    <h3>2. 컴포넌트화 & 구조 설계</h3>
                    <p className="text-xl"><strong>✔️ 미션 컴포넌트화</strong></p>
                    <p>미션에서 구현하고자 하는 공연 검색기는 아래와 같이 컴포넌트화 합니다.</p>
                    <ul className="list-disc">
                        <li>공연을 검색하는 SearchInput</li>
                        <li>검색한 공연 정보를 API로부터 호출 받아 렌더링할 LiveList</li>
                        <li>검색 기록을 렌더링해주는 SearchHistory</li>
                        <li>data(state)를 관리하고, 데이터(상태)가 바뀔 때마다 렌더링할 수 있도록 제어하는 App</li>
                    </ul>
                    <h3>3. 이벤트 추가 & 최소한의 의존성</h3>
                    <p>각 컴포넌트 간의 느슨한 결합도(Loose Coupling)를 유지하며 이벤트를 추가합니다. 느슨한 결합은 각각 기능이 독립적으로 작동하는 컴포넌트가 연결되어 컴포넌트 간의 의존성을 줄이는 것을 추구하는 것을 의미합니다.</p>
                    <p className="text-xl"><strong>✔️ 미션 이벤트 추가</strong></p>
                    <p className="text-xl"><strong>(1) main.js</strong></p>
                    <p className="m-0">main에는 App 객체를 생성하고, 파라미터로 element와 state를 입력합니다. 이 때, 데이터는 API 호출 결과인 데이터를 담는 results와 검색 기록을 저장할 histories로 나누어 초기값을 지정합니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-03.png"}
                        loading='lazy'
                        width={900}
                        height={380} />
                    <p className="text-xl"><strong>(2) App.js</strong></p>
                    <p>App의 역할은 각 컴포넌트를 관리하고, 각 컴포넌트로부터 state에 변화가 있을 때 컴포넌트에 state를 전달해 다시 화면에 렌더링 되도록 합니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-04.png"}
                        loading='lazy'
                        width={900}
                        height={480} />
                    <p className="text-xl"><strong>(3) SearchInput.js</strong></p>
                    <p>SearchInput 컴포넌트는 공연 정보 검색을 입력 받아 데이터를 호출하고, 검색 기록을 저장하는 검색창 역할입니다. 검색창인 input 태그에 Keyup 이벤트를 추가해 입력 값을 API에 전달합니다. API는 전달 받은 입력 값을 바탕으로 데이터를 반환합니다. 비동기 HTTP 통신 방식으로는 Fetch API를, 비동기 제어에는 async~await를 활용해 API를 호출하고, 호출된 데이터는 state로 저장합니다.</p>
                    <p className="m-0">검색 기록은 모두 저장하지 않고, 최대 5개까지만 쌓일 수 있고, 5개가 넘는 검색어가 들어올 경우. 가장 처음에 들어온 검색어를 삭제합니다. 또, 같은 이름의 검색어는 중첩해서 들어가지 않게 합니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-05.png"}
                        loading='lazy'
                        width={900}
                        height={350} />
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-06.png"}
                        loading='lazy'
                        width={900}
                        height={380} />
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-07.png"}
                        loading='lazy'
                        width={900}
                        height={800} />
                    <p className="text-xl"><strong>(4) LiveList.js</strong></p>
                    <p>LiveList 컴포넌트는 검색한 공연 정보를 API로부터 호출 받아 렌더링하는 역할로, 공연 포스터와 뮤지션 정보를 렌더링합니다. 이 때, 뮤지션 정보에는 뮤지션 이름 클릭시 검색되는 click event를 구현합니다.</p>
                    <p className="m-0">뮤지션 이름 클릭 이벤트는 이벤트 위임을 사용했습니다. <code>nodeName</code>으로 제어하는 것 외에 <code>className</code>으로 제어도 가능합니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-08.png"}
                        loading='lazy'
                        width={900}
                        height={660} />
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-09.png"}
                        loading='lazy'
                        width={900}
                        height={500} />
                    <p className="text-xl"><strong>(5) SearchHistory</strong></p>
                    <p>SearchHistory 컴포넌트는 검색이 발생할 때마다 검색 기록을 렌더링하는 역할을 합니다. histories에 저장된 검색 기록을 렌더링하고, 렌더링 된 검색기록을 클릭시 다시 검색되도록 구현했습니다.</p>
                    <p className="m-0">이 경우도 마찬가지로 이벤트 위임을 활용해 <code>ul</code> 요소에 클릭 이벤트를 만들어 동적으로 생산된 <code>li</code> 요소에도 클릭 이벤트가 실행되도록 합니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-10.png"}
                        loading='lazy'
                        width={900}
                        height={640} />
                   <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-11.png"}
                        loading='lazy'
                        width={900}
                        height={530} />
                    <h3>4. 이벤트 제어 - 디바운스</h3>
                    <p className="text-blue-600"><strong><a href="https://www.notion.so/Debounce-2a8d30f115104feba04d7fc36cbc3232">디바운스 정리글 바로가기</a></strong></p>
                    <p className="m-0">이벤트는 짧은 시간에 수 없이 많이 발생할 수 있고, 이는 성능 저하나 유저 경험을 떨어뜨릴 수 있습니다. 따라서 이벤트 발생 횟수를 제어해 문제점을 보완하고자 나온 트릭이 디바운스입니다. 디바운스는 일정 시간 내에 하나의 이벤트(가장 마지막 이벤트)만 실행되도록 하는 기술입니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-12.png"}
                        loading='lazy'
                        width={900}
                        height={350} />
                    <p className="m-0">검색을 담당하는 SearchInput 컴포넌트에 디바운스를 적용한 코드는 아래와 같습니다. 디바운스 적용시 0.3초당 하나만 검색이 되어 이전보다 안정적으로 검색이 구현됩니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-03-13.png"}
                        loading='lazy'
                        width={900}
                        height={350} />
                </div>
            </div>
        </div>
    )
}