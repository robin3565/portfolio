import Image from "next/image";
import BackButton from "../../atoms/BackButton";

export default function Misson02() {
    return (
        <div className='typora-export os-windows'>
            <div className='typora-export-content'>
                <div id='write'>
                    <BackButton />
                    <h1 id='vanillajs-study-mission-02'><span>[Mission 02] TodoList 업그레이드</span></h1>
                    <h2 id='📝-배운-내용-요약'><strong><span>📝</span></strong><span> 배운 내용 요약</span></h2>
                    <p className="bg-slate-100 p-4"><strong><span>Keywords</span></strong><span>: 컴포넌트화, 느슨한 결합도, 이벤트 최적화(이벤트 위임)</span><br />
                        <strong><span>Duration</span></strong><span>: 2022.09.28</span><br />
                        <strong><span>Tool</span></strong><span>: Vanilla JS</span><br />
                        <strong><span>Action</span></strong><br />
                        <span><strong>1. 웹 컴포넌트 이해</strong>: 느슨한 결합도(최소한의 의존성)를 고려한 구조화</span><br />
                        <span><strong>2. DOM API</strong>: 이벤트 핸들러를 통한 DOM 조작 이해</span><br />
                        <span><strong>3. 이벤트 최적화</strong>: 이벤트 위임을 통한 이벤트 제어</span>
                    </p>

                    <h2 id='📍-미션'><strong><span>📍</span></strong><span> 미션</span></h2>
                    <p><span>2주차 미션은 1주차 때 진행한 TodoList 미션을 업그레이드 하는 것입니다. 데이터를 받아와 렌더링하는 기능만 있었던 TodoList에 데이터 추가, 삭제, 그리고 데이터
                        갯수를 세는 기능을 추가했습니다. 각 기능은 TodoList 내부에 구현하는 것이 아닌 TodoInput, TodoCount로 각각 </span><strong><code>1)
                            컴포넌트화</code></strong><span> 하며 이 과정에서 컴포넌트 구조에 대해서도 알아보았습니다.</span></p>
                    <p><span>데이터를 입력 받는 TodoInput 컴포넌트와 Todo 개수를 세는 TodoCount 컴포넌트를 만들고, 각 컴포넌트마다 </span><strong><code>2) Event를
                        만들고, 최소한의 의존성</code></strong><span>을 갖도록 유의하며 구현했습니다.</span></p>
                    <p><span>마지막으로 </span><strong><code>3) Event 최적화</code></strong><span>를 위해 이벤트 버블링과 캡처링에 대해 알아보고, 이벤트 중첩을
                        해결하기 위한 이벤트 위임에 대해서 알아보았습니다.</span></p>
                    <p><span>이번 미션의 핵심은 컴포넌트 간의 의존성을 최소화하는 것을 고려해 App을 컴포넌트화 시키는 것입니다.</span></p>
                    <p><span>미션에서 구현한 사항은 </span>
                        <a className="text-blue-600" href='https://www.notion.so/2-TodoApp-d6bc44aef2c34299ad436b8702116dba'><strong>[미션2] TodoApp 업그레이드하기</strong></a><span> 에 정리했습니다.</span></p>
                    <h3 id='1-컴포넌트화--구조-설계'><span>1. 컴포넌트화 &amp; 구조 설계</span></h3>
                    <p><span>첫 번째 미션을 통해 컴포넌트는 재사용성이 가능하다는 장점이 있어 컴포넌트화가 필요한 점을 이해했습니다. 이미 React 라이브러리를 사용해보았기 때문에, 컴포넌트화에 대한 경험
                        또한 있었습니다.</span></p>
                    <p><span>하지만 매번 프로젝트를 진행할 때마다 </span><strong><span>컴포넌트 구조 설계</span></strong><span>에 대한 고민이 있었는데요.
                    </span><strong><span>‘어떤 기준으로 컴포넌트화를 시켜야 할까?’</span></strong><span>에 대해 의문이 있었지만, 지금까지 컴포넌트 구조를 고민해야할만큼
                        규모가 있는 프로젝트를 진행한 적이 없어 재사용성만 고려해서 컴포넌트화를 시켰지 처음부터 구조를 설계해서 진행하지 않았습니다. 지금까지는 그렇게 해왔더라도 앞으로 구조 설계를 하며
                        개발을 해보는 것이 좋을 것 같아, 이번 기회에 공부해보고자 했습니다.</span></p>
                    <p><span>결론부터 말하면 컴포넌트 구조 설계에 대한 정확한 답은 없으며, 상황에 따라 기준은 달라질 수도 있습니다. 강의에서 강사님 또한 구조 설계는 많이 해보는 방법 밖에 없다고
                        말씀하셨고요. 그렇다면 경험이 부족한 제가 지금 상황에서 할 수 있는 건 무엇일까 고민하다가 하나의 컴포넌트 구조 패턴을 먼저 익숙해져서 사용해보고 그 구조를 바탕으로 개선해나가는
                        방향으로 가야겠다고 생각했습니다.</span></p>
                    <p className="text-xl m-0"><strong><span>✔️ 미션 컴포넌트화</span></strong></p>
                    <p><span>미션에서 구현하고자 하는 </span><strong><span>TodoList</span></strong><span>는 아래와 같이 컴포넌트화 합니다.</span></p>
                    <ul className="list-disc">
                        <li><span>Todo를 입력하는 TodoInput</span></li>
                        <li><span>입력 받은 Todo를 렌더링할 TodoList</span></li>
                        <li><span>입력 받은 Todo의 갯수를 렌더링해주는 TodoCount</span></li>
                        <li><span>Todo data(state)를 관리하고, 데이터(상태)가 바뀔 때마다 렌더링할 수 있도록 제어하는 App</span></li>
                    </ul>
                    <h3>2. 이벤트 추가 & 최소한의 의존성</h3>
                    <p>이벤트는 DOM 객체의 addEventListener 함수를 통해 등록할 수 있습니다. 각 컴포넌트의 역할에 맞는 이벤트를 구현합니다. 이 때 핵심은 이벤트 발생시 컴포넌트 간에 연관이 있고, 이를 유의하지 않고 그대로 구현한다면 컴포넌트 간의 의존성이 생기게 됩니다.</p>
                    <p>하지만 컴포넌트는 자신이 담당하는 화면을 렌더링하기 위해 <strong>가장 최소한의 책임과 의존성</strong>을 가져야 합니다. 예를 들면 TodoCount를 렌더링하는 과정에서 TodoList에 접근하여 렌더링하면 안된다는 것인데, 만약 두 컴포넌트가 연관성이 있는 경우 한 컴포넌트에 변화가 생기면 다르 컴포넌트에 예상하지 못한 영향을 주고 이는 버그를 발생시킬 수도 있기 때문입니다.
                    </p><p>이러한 최소한의 책임과 의존성을 고려하기 위해 <strong>컴포넌트의 파라미터에 함수를 넣는 방법</strong>을 이용해 구현합니다.</p>
                    <p className="text-xl"><strong><span>(1) App.js</span></strong></p>
                    <p className="m-0">App의 역할은 TodoInput과 TodoList를 관리하고, 각 컴포넌트로부터 state에 변화가 있을 때 컴포넌트에 state를 전달해 다시 화면에 렌더링 되도록 합니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-02-01.png"}
                        loading='lazy'
                        width={900}
                        height={500} />
                    <p className="text-xl"><strong><span>(2) TodoInput.js</span></strong></p>
                    <p><strong>TodoInput 컴포넌트는 Todo를 입력 받는 역할</strong>입니다.</p>
                    <p>form 태그를 먼저 생성하고 그 안에 input 태그와 추가하는 button을 추가해, form 태그에 input에 입력된 값이 state로 저장되도록 submit 이벤트를 추가했습니다.</p>
                    <p>여기서 submit 이벤트에 추가되는 메소드 onAddTodo는 TodoInput 컴포넌트 안에 직접 구현하는 것이 아니라 TodoInput 컴포넌트를 관리하고 있는 App에서 해당 메소드를 파라미터로 받도록 구현했습니다.</p>
                    <p>그 이유는 TodoInput 컴포넌트의 역할이 할 일을 ‘입력 받는 것’이기 때문에 할 일을 입력 받아 state에 직접적으로 관여하는 것은 피하기 위해서입니다. 또한 컴포넌트는 재사용이 목적이기 때문에 하나의 컴포넌트가 최대한 작은 단위의 일을 하도록 만들어야 합니다. 그러기 위해서 state를 관리하는 역할은 App이기 때문에 파라미터로 onAddTodo 메소드를 구현해 전달합니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-02-02.png"}
                        loading='lazy'
                        width={900}
                        height={560} />
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-02-03.png"}
                        loading='lazy'
                        width={900}
                        height={450} />
                    <p className="text-xl"><strong><span>(3) TodoList.js</span></strong></p>
                    <p><strong>TodoList의 역할은 입력 받은 Todo를 렌더링해주는 역할</strong>입니다. 추가로 Todo를 클릭할 경우 클릭된 Todo는 완료 처리(isCompleted 제어) 되는 이벤트를 추가했습니다.</p>
                    <p className="m-0">입력 받은 Todo는 state로 넘겨 받아 innerHTML으로 추가해줍니다. 그리고 Todo가 완료가 된 일이라면, 즉 data의 isCompleted 값이 true일 경우, 줄이 그어지도록 이벤트를 구현합니다. Todo 각각을 클릭하면 isCompleted 값이 바뀌고, 바뀐 데이터는 다시 렌더링되어 줄이 그어지는 onCheckTodo 메소드를 구현했습니다. onCheckTodo 메소드는 state 관리를 위해 마찬가지로 App에 구현해 TodoList의 파라미터로 넘겨 받습니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-02-04.png"}
                        loading='lazy'
                        width={900}
                        height={670} />
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-02-05.png"}
                        loading='lazy'
                        width={900}
                        height={450} />
                    <p className="text-xl"><strong><span>(4) TodoCount.js</span></strong></p>
                    <p className="m-0"><strong>TodoCount는 Todo 전체 개수와 완료된 Todo 개수를 세서 렌더링</strong> 합니다. 할 일이 추가되거나 할 일을 완료한 경우 Count 값은 바뀝니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-02-06.png"}
                        loading='lazy'
                        width={900}
                        height={500} />
                    <h3 id='3-event-최적화'>3. Event 최적화</h3>
                    <p>이벤트 최적화와 관련해 <strong>Event 전파와 위임 개념과 예제</strong>를 정리했습니다.
                        <a href='https://www.notion.so/Event-771ea661d437482d928583ffc88bb82b'><span className="text-blue-600"> <strong>(Event 전파와 위임 정리글 바로가기)</strong></span></a></p>
                    <p className="text-xl"><strong>✔️ 이벤트 위임을 사용하지 않는 경우</strong></p>
                    <p><span>TodoList에 두 가지 <code>click event</code>를 구현합니다.</span></p>
                    <ol className="list-disc">
                        <li><span>onCheckTodo : Todo를 클릭할 경우 해당 인덱스의 Todo는 완료 처리(isCompleted true)</span></li>
                        <li><span>onRemoveTodo : 삭제 버튼을 클릭하면 해당 인덱스의 Todo(state)는 삭제</span></li>
                    </ol>
                    <p><code>li</code><span> 요소와 </span><code>button</code><span> 요소에 각각 이벤트를 추가하면
                    </span><code>button</code><span> 의 이벤트는 버블링으로 인해 </span><code>li</code><span> 이벤트도 실행되어 오류가 발생합니다. (이미
                        삭제된 </span><code>li</code><span> 요소이기 때문에 </span><code>li</code><span> 이벤트 실행 불가로 인한 오류)</span></p>
                    <p><span>해당 이벤트 버블링을 막기 위해 button 이벤트에 e.stopPropagation()을 넣습니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-02-07.png"}
                        loading='lazy'
                        width={900}
                        height={800} />
                    <p className="text-xl"><strong>✔️ 이벤트 위임을 사용하는 경우</strong></p>
                    <p><span>이벤트 위임은 하위 요소에 각각 이벤트를 붙이지 않고 상위 요소에서 하위 요소의 이벤트를 제어하는 방식입니다. 따라서 상위 요소인
                    </span><code>ul</code><span> 요소에 이벤트 핸들러를 바인딩해 </span><code>span</code>과 <code>button</code><span> 요소의 이벤트를 제어할 수 있습니다.</span></p>
                    <p className="m-0"><code>ul</code><span> 에 이벤트를 바인딩 하더라도 이벤트 버블링으로 인해 하위 요소에서도 이벤트가 실행됩니다. 하지만 각각의 요소마다 실행되야하는 이벤트가 다르므로
                    </span><code>Element.nodeName</code><span> 을 이용해 이벤트를 제어합니다. 즉, 이벤트가 발생하는 요소가 span일 경우, button일 경우를 나눠 각각 이벤트를 실행시킵니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/vanillaJS-02-08.png"}
                        loading='lazy'
                        width={900}
                        height={740} />
                </div>
            </div>
        </div>
    )
}