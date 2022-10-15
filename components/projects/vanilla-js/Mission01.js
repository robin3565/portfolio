import BackButton from '../../atoms/BackButton'
export default function Misson01() {
    return (
        <div className='typora-export os-windows'>
            <div className='typora-export-content'>
                <div id='write'>
                    <BackButton />
                    <h1 id='VanillaJS-STUDY-MISSION-01'><span>[Mission 01] TodoList 컴포넌트 만들기</span></h1>
                    <h2 id='📝-배운-내용-요약'><strong><span>📝</span></strong><span> 배운 내용 요약</span></h2>
                    <p className="bg-slate-100 p-4"><strong><span>Keywords</span></strong><span>: 컴포넌트화, 에러 처리, 상태 관리<br />
                    </span><strong><span>Duration</span></strong><span>: 2022.09.21<br />
                        </span><strong><span>Tool</span></strong><span>: Vanilla JS</span><br />
                        <strong><span>Actions</span></strong><br />
                        <span><strong>1. 생성자 함수 이해</strong>: 외부 라이브러리 없이 Vanilla JS로 컴포넌트 만들기</span><br />
                        <span><strong>2. 에러 처리</strong>: 상황에 따른 디테일한 에러 처리 이해 및 코드 작성</span><br />
                        <span><strong>3. 웹 컴포넌트 이해</strong>: state 변화에 따라 컴포넌트를 재렌더링하는 원리 이해</span>
                    </p>
                    <h2 id='미션'><span>📍 미션</span></h2> 
                    <p><span>1주차 미션은 TodoList의 컴포넌트를 작성하는 것입니다. 이미 React를 사용해보면서 컴포넌트 개념에 익숙하다고 생각했었는데, 막상 컴포넌트를 ‘만들어보라’라고 하니
                        생소하게 느껴졌습니다.</span></p>
                    <p><span>React는 라이브러리입니다. React는 사용되는 기능들이 모듈화되어 있는 라이브러리로, 지금까지 저는 React 내부 기능들을 ‘사용’할 줄만 알았지
                    </span><strong><span> 그 기능들의 원리를 잘 알지 못했습니다.</span></strong></p>
                    <p><span>반면 1주차 미션은 웹 컴포넌트의 원리를 파악하기에 좋았습니다. 외부 라이브러리 없이 Vanilla JS로 컴포넌트를 만들어보는 과정에서 </span><strong><code>1)
                        생성자 함수</code></strong><span>에 대해 자세히 알아볼 수 있었고, </span><strong><code>2) 에러
                            처리</code></strong><span>에 대해서도 배워보았습니다. 그리고 state에 변화에 렌더링을 해주는 </span><strong><code>3) 컴포넌트의
                                원리</code></strong><span>를 직접 구현을 통해 알아볼 수 있었습니다.</span></p>
                    <p><span>컴포넌트의 핵심은 </span><strong><span>재사용성</span></strong><span>입니다. 자바스크립트에서 재사용성을 위해 존재하는 문법은 바로 생성자함수로,
                    </span><strong><span>Todolist 생성자 함수를 만드는 것</span></strong><span>이 첫 번째 미션의 핵심입니다.</span></p>
                    <p><span>첫 번째 미션에서 구현한 사항은</span>
                        <span className="text-blue-600"><a href='https://www.notion.so/1-TodoList-0e9588d1f1fc420dbdc0fd6743594816'><strong> [미션1] TodoList 컴포넌트 작성</strong></a></span> 에 정리했습니다.</p>
                    <h3 id='1-생성자-함수란'><span>1. </span><span>생성자 함수란?</span></h3>
                    <p><span>생성자 함수를 작성하기 전에, 생성자 함수가 무엇인지 정리했습니다.</span>
                        <a href='https://www.notion.so/0a902f8e95ff4a27a23c99510b39f14a'><span className="text-blue-600"> <strong>(생성자 함수 정리글 바로가기)</strong></span></a></p>
                    <p><span>앞에서 언급했듯이 생성자 함수는 </span><strong><span>재사용성</span></strong><span>을 위해 사용됩니다. 개발을 하다보면 중복되는 객체들을 자주
                        생성하곤 하는데, 이 때 매번 객체를 하나하나 만드는 것이 아니라 생성자 함수로 일종의 틀을 만들고, new 키워드로 생성자 함수 기반의 인스턴스를 생성함으로써 생성자 함수와
                        동일한 구성의 객체를 여러 개 만들어 낼 수 있습니다.</span></p>
                    <p className="text-xl"><span><strong>✔️ Todolist 컴포넌트(=생성자 함수) 작성</strong></span></p>
                    <p className="m-0"><span>필수 미션은 </span><strong><code>1) 파라미터로 data를 넘겨 받고</code></strong><span>, html div 태그에 데이터를 보여주는
                    </span><strong><code>2) render 메소드</code></strong><span>를 포함하는 Todolist 생성자 함수를 구현하는 것입니다.</span></p>
                    <img src='/vanillaJS-01.png' alt="생성자 함수 코드" />
                    <h3 id='2-예외-처리'><span>2. 예외 처리</span></h3>
                    <p className="m-0">발생할 수 있는 예외 중에서 <strong><code>1) 인스턴스 생성 때 new 키워드가 없을 경우</code></strong>와
                        <strong><code>2) 올바르지 않은 데이터일 경우</code></strong> 두 가지에 예외 처리를 구현하였습니다.</p>
                    <img src='/vanillaJS-01-02.png' alt="예외 처리 코드" />
                    <p>데이터 예외 처리를 구현하다 문득 더 많은 예외가 있을텐데 그 경우 어떻게 처리를 해줘야하나 궁금해서 질문을 남겼습니다. 답변은 ‘할 수 있는 만큼 꼼꼼하게 해주는 게 좋다’는 것! 개발을 할 때 예외 처리를 해야한다는 것은 알지만, 꼼꼼하게 하지는 못했던 것 같은데 앞으로 예외 처리를 철저하게 해주는 것도 중요하다는 것을 배울 수 있었습니다.</p>
                    <h3 id='3-컴포넌트와-상태-관리'>3. 컴포넌트와 상태 관리</h3>
                    <p><span>컴포넌트는 </span><code>상태(state)</code><span> 가 변화함에 따라 </span><code>렌더링</code><span>이 이루어지는 패턴입니다. 앞에
                        설명한 그대로, 컴포넌트화를 통해 코드의 재사용성을 높일 수 있다면, 컴포넌트 내의 상태(state)는 DOM을 직접 다룰 필요가 없고, 각 컴포넌트 간의 의존성도 낮출 수
                        있습니다.</span></p>
                    <p className="m-0"><span>마지막으로 위와 같은 원리로 </span><strong><span>setState 메소드를 통해 상태 변화에 따라 컴포넌트를 재렌더링</span></strong><span>하도록
                        구현했습니다.</span></p>
                    <img src='/vanillaJS-01-03.png' alt="컴포넌트 코드" />
                    <p><span>그 동안은 이전에 jQuery를 거의 사용해보지 않아서 웹 컴포넌트의 원리, 장점 등에 대한 이해가 잘 와닿지는 않았습니다. 개념적으로는 이해가 되더라도 이전에 DOM을 직접
                        제어하던 경험이 많지 않기 때문에 웹 컴포넌트의 변화나 장점을 잘 공감할 수 없던 것이죠. 다만, React를 처음 접했을 때 state 개념이 낯설었는데 결론적으로 state가
                        변화할 때 재렌더링이 이루어진다는 점, 그리고 setState 메소드로 제어한다는 웹 컴포넌트의 원리를 첫 번째 미션을 통해 제대로 이해할 수 있는 기회가 되었던 것
                        같습니다.</span></p>
                    <h2 id='💬-느낀점'><strong><span>💬</span></strong><span> 느낀점</span></h2>
                    <p><span>기능을 사용할 수 있다는 것과 원리를 알고 사용한다는 것은 다른 이야기입니다. 첫 미션을 통해 어느 정도 사용해왔던 기능들의 원리를 제대로 파악함으로써 React의 개념적인
                        부분이 이런 의미였구나 어느정도 이해할 수 있었습니다. 또, 컴포넌트를 재사용하고, 상태 변화를 통해 DOM을 렌더링하고 제어하는 기능을 편리하게 사용하기 위해 (물론 클라이언트
                        단에서 렌더링을 제어하려는 것도 있지만!) React 라이브러리가 존재한다는 것도 더 잘 이해할 수 있었습니다.</span></p>
                </div>
            </div>
        </div>
    )
}