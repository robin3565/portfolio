import Image from "next/image"
import Link from "next/link"
import BackButton from "../atoms/BackButton"
export default function Instagram() {
    return (
        <div class='typora-export os-windows'>
            <div class='typora-export-content'>
                <div id='write'>
                    <BackButton />
                    <h1 id='Instagram-클론코딩-with-firebase'>Instagram 클론코딩 (with Firebase)</h1>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a5af5b5a-03a5-44b5-b0d1-a7ea41828755/img3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T073750Z&X-Amz-Expires=86400&X-Amz-Signature=a5544a3508344cb1607bd6ea57bcf547c37592667a551ccf1631de854ef98afe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22img3.jpg%22&x-id=GetObject'}
                        loading='lazy'
                        width={3000}
                        height={2000} />
                    <p><strong><span>Keywords:</span></strong><span> SPA, localStorage, Firebase</span><br />
                        <strong><span>Duration:</span></strong><span> 2022.08.25 ~ 2022.09.20</span><br />
                        <strong><span>Tool:</span></strong><span> React, Styled-components, React-Router-Dom, Firebase,
                            throttle</span></p>
                    <p className='text-2xl font-medium'>인스타그램은 서비스 내에 다양한 기능을 포함하고 있습니다. 각 기능들을 직접 구현해보며 JS, React를 보다 더 잘 사용해보고자 하였고, 실제 서비스되고 있는 기능들의
                        특징들을 직접 구현을 통해 파악하고자 했습니다.</p>
                    <p className='text-2xl font-medium'>
                        <span>그리고 React Router 라이브러리를 통해 SPA(Single Page Application) 방식으로 웹을 만들어보고, Firebase를 이용해보며 NoSQL에 대해
                            이해하며 직접 DB를 구현해보았습니다.</span></p>
                    <h2 id='프로젝트-소개'><span>프로젝트 소개</span></h2>
                    <p>
                        <Link href='https://instagram-clone-rho-six.vercel.app/'>
                            <a className="text-blue-600 text-2xl font-bold" target='_blank' rel='noopener noreferrer'>Instagram Clone 바로가기 👉</a>
                        </Link>
                    </p>
                    <p className="flex">
                        <Link href='https://github.com/robin3565/instagram-clone/'>
                            <a className="text-blue-600 text-2xl font-bold" target='_blank' rel='noopener noreferrer'>
                                <span>Instagram Clone Github 페이지 </span>
                            </a>
                        </Link>
                        <Image
                            width="30px"
                            height="30px"
                            className="rounded-full" src="/github.png" />
                    </p>
                    <p>매달 하나씩 진행하는 월간 프로젝트! <br />
                        9월 프로젝트로 <strong>Firebase를 이용한 </strong><strong>인스타그램</strong>을 클론코딩 해보았습니다.
                    </p>
                    <p><span>인스타그램은 주로 이미지를 다루는 어플리케이션입니다. 따라서 이미지와 관련된 다양한 기능을 구현해볼 수 있습니다. 이미지를 업로드하고, 삭제하고, 수정하는 기능 외에도 이미지
                        최적화 기능, 이미지 자르기 기능, 이미지 무한 스크롤 기능을 구현했니다.</span></p>
                    <p><span>또한 서비스 어플리케이션에 맞게 로그인, 회원가입 인증 기능을 구현하고 로그인하지 않은 경우 메인 페이지에 접근이 불가능하도록 하는 Private Router 기능 및 유저 간의
                        소통을 위한 댓글, 좋아요 기능, 유저 검색 기능 및 마이페이지 기능을 만들었습니다. 이 과정에서 React Router를 활용해 SPA 방식을 활용하고, 서버와 DB로는
                        Firebase를 활용해 서버리스 어플리케이션으로 구현했습니다.</span></p>
                    <h2 id='구현한-기능'><span>구현한 기능</span></h2>
                    <ul className="list-disc">
                        <li><span>사용자 인증 &amp; Private Router 기능 구현</span></li>
                        <li><span>이미지 관련 다양한 기능 구현 (CRUD, 사이즈 조정, 자르기)</span></li>
                        <li><span>게시물 무한 스크롤 기능 구현</span></li>
                        <li><span>댓글 &amp; 좋아요 기능 구현</span></li>
                        <li><span>React-Router-Dom을 이용한 라우터 관리</span></li>
                        <li><span>Context API를 이용한 데이터 관리</span></li>
                        <li><span>Firebase를 활용한 데이터 베이스 연동 및 백엔드 기능 구현</span></li>
                    </ul>

                    {/* 1. 사용자 인증 */}
                    <h3 id='사용자-인증-로그인--회원가입'><span>1. 사용자 인증 (로그인 &amp; 회원가입)</span></h3>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/64b3eb12-0126-457a-8621-befbe7cd8c09/insta-login.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T073842Z&X-Amz-Expires=86400&X-Amz-Signature=ead862af7b73ed448118e2c18bbba52f3e4a2db3c1cc5a76448c08a1de4ce3fc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-login.gif%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={560} />
                    <p><span>Firebase 인증(Authentication)을 활용해 로그인, 회원가입 기능을 구현했습니다. 인증은 </span><strong><span>1) 사용자 아이디, 비밀번호를
                        직접 입력</span></strong><span>하는 방법과 </span><strong><span>2) Facebook으로 로그인,
                            회원가입</span></strong><span>, 이 2가지 방법으로 진행됩니다.</span></p>
                    <p><span>사용자가 입력한 아이디, 비밀번호 혹은 Facebook 로그인 시 발급 받는 Token을 Firebase 서버로 전달하면, 이를 확인하여 반환해줍니다. 반환이 정상적으로 이루어진
                        경우에만 로그인이 되고 Home 화면으로 이동하도록 구현하였습니다.</span></p>
                    <p><strong><span>정규표현식 유효성 검사</span></strong></p>
                    <p><span>이메일 아이디와 비밀번호의 형식이 통과되어야만 가입 버튼이 활성화 되도록 구현했습니다. 로그인, 회원가입시 발생할 수 있는 에러는 handleError 메소드를 통해 사용자가
                        어떤 error로 인해 인증이 안되고 있는지 보여줄 수 있도록 구현했습니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dc610e28-bd50-48d3-a497-d8714c3da025/insta-01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T073945Z&X-Amz-Expires=86400&X-Amz-Signature=929d9839f828d4c7b59a0f02a466d7f16986200851ea00ad028c13f4f48f9bf8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-01.png%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={250} />
                    <p><strong><span>Private Router</span></strong></p>
                    <p><span>로그인 된 회원이 아닐 경우 Home 화면을 비롯한 다른 페이지로는 이동이 불가능합니다. 로그인하지 않은 유저는 다른 페이지로 이동을 시동할 경우 로그인 페이지로 리다이렉트
                        됩니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5be19169-337b-4185-996f-9fcff77c2c05/insta-02.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T074048Z&X-Amz-Expires=86400&X-Amz-Signature=7add33be2ae717e4f860dc2f90803335477fc47b898f5285e63e8098811784e8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-02.png%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={400} />
                    {/* 2. 이미지 모달창 */}
                    <h3 id='이미지-모달창-portal-사이즈-조정-자르기'><span>2. 이미지 모달창 (Portal, 사이즈 조정, 자르기)</span></h3>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b9b81a9a-c9e5-4a0e-9638-815c1fe1c653/insta-img.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T074138Z&X-Amz-Expires=86400&X-Amz-Signature=de1d9788e1c1fccec43383f2bae0f5d2f0e8a3d809195d38b324640fa075b566&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-img.gif%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={560} />
                    <p><span>이미지 업로드 버튼 클릭시 첫 번째 모달창이 나옵니다. 업로드 할 이미지를 선택하면 이미지를 1:1 비율로 자를 수 있는 두 번째 모달창이 나오고, 다음 버튼을 누르면 자른
                        이미지를 보여주고, 이미지와 함께 남길 글을 입력할 수 있는 세 번째 모달창이 나옵니다. 마지막으로 공유하기를 누르면 이미지는 FireStorage에 저장되고, 저장된 주소값과
                        글은 FireStore에 저장됩니다. 이미지가 저장되면 Home 화면의 이미지 피드는 재렌더링됩니다.</span></p>
                    <p><strong><span>React Portals를 활용한 Modal 생성</span></strong></p>
                    <p><span>부모 컴포넌트에 z-index나 overflow 속성이 있는 경우, 모달이나 팝업은 두 스타일의 우선순위가 충돌하여 방해가 될 수 있습니다. 이를 방지하고자 DOM을 선택하여
                        부모 컴포넌트의 바깥에 있는 DOM 노드로 자식을 렌더링해주는 Portals를 활용해 App 컴포넌트 바깥에 모달을 렌더링했습니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/12756447-7c42-4021-a8bb-9d3edb153c97/insta-03.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T074157Z&X-Amz-Expires=86400&X-Amz-Signature=73f51857b89d5f2296c144d8a6380edc2be1f19eade1f9fdfdd38f38c6b8ce44&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-03.png%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={300} />
                    <p><strong><span>이미지 사이즈 조정 (react-image-file-resizer)</span></strong></p>
                    <p><span>너무 큰 사이즈의 이미지를 저장할 경우 처리에 시간이 오래 걸릴 수 있습니다. 그래서 크기를 줄이고, 일정한 크기로 이미지를 저장하기 위해
                        react-image-file-resizer 라이브러리를 사용해 이미지 크기를 조정했습니다.</span></p>
                    <p><strong><span>이미지 자르기 (react-easy-crop)</span></strong></p>
                    <p><span>일정한 비율로 이미지를 자르기 위해 react-easy-crop 라이브러리를 사용했습니다. 1:1 비율로 자를 수 있도록 구현했습니다.</span></p>
                    {/* 3. 무한 스크롤 */}
                    <h3 id='무한-스크롤'><span>3. 무한 스크롤</span></h3>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/40c300cf-7a66-442f-87d1-20e306c8965c/insta-scroll.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T074224Z&X-Amz-Expires=86400&X-Amz-Signature=2374bfb8cb764331f1be31846829abb579d2b3ee416c2a266f88587edee873e9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-scroll.gif%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={560} />
                    <p><span>많은 이미지를 효과적으로 보여주기 위해서 무한 스크롤을 구현했습니다. 무한스크롤은 스크롤 바가 마지막에 도달하면 추가적인 이미지 데이터를 불러와 렌더링하는 것을 의미합니다.
                        구현을 위해 스크롤을 감지해 마지막 도달했는지 추적하는데, 이 과정에서 스크롤의 변화가 있을 때마다 함수가 실행되어 성능 문제가 발생합니다. 이 문제를 해결하고자 Throttle
                        라이브러리를 이용해 스크롤 이벤트가 일정한 시간(1초)에 한 번씩 실행되도록 조정했습니다.</span></p>
                    {/* 4. 댓글, 좋아요 기능 */}
                    <h3 id='댓글--좋아요-기능'><span>4. 댓글 &amp; 좋아요 기능</span></h3>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/486f4ef0-c4ba-4633-9733-b87c4ec5921b/insta-like.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T074322Z&X-Amz-Expires=86400&X-Amz-Signature=2bb82d46cb6328ffaa46ff22815bcea7ecb8c08e7e3186ee1dd777fba5609289&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-like.gif%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={560} />
                    <p><span>인스타그램과 유사하게 각 게시물에 댓글과 좋아요를 남길 수 있도록 했습니다. 댓글은 생성과 삭제가 가능하고, 좋아요는 버튼 클릭 혹은 이미지 더블 클릭 시에 좋아요가 활성화
                        되고, 다시 클릭하면 없어지게 만들었습니다.</span></p>
                    {/* 5. 검색 기능 */}
                    <h3 id='검색-기능'><span>5. 검색 기능</span></h3>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/86c52c46-2d85-4fdc-bea8-94308fd77155/insta-search.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T074336Z&X-Amz-Expires=86400&X-Amz-Signature=6e649a54f79acf92716468c5085c07ddc2f1b58ec7418507b27312d9e7089e16&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-search.gif%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={560} />
                    <p><span>유저 아이디를 검색하면 모든 유저 아이디에 검색한 값이 포함되어 있는지 확인하고, 포함되어 있는 유저 아이디만 필터링하는 메소드를 활용한 검색 기능입니다. 필터된 유저 아이디는
                        검색창에 렌더링 되고, 찾는 유저 아이디가 있다면 프로필 사진이나 유저 아이디 클릭시 클릭한 유저의 마이 페이지로 이동하도록 구현했습니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f272ffa8-5ee6-48dc-b73b-16c9d2e3e7c7/insta-04.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T074405Z&X-Amz-Expires=86400&X-Amz-Signature=bf98da8b401d7fbb0d8da3806ecedb73ad3d7d917c5534270213bb93dabbf51a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-04.png%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={300} />
                    {/* 6. SPA 방식 구현 */}
                    <h3 id='react-router-dom을-이용한-spa-방식-구현'><span>6. React-Router-Dom을 이용한 SPA 방식 구현</span></h3>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a3671496-cde1-4c1d-8183-d41261d99883/insta-router.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T074440Z&X-Amz-Expires=86400&X-Amz-Signature=be4b9cdd6aaed3e3546a48a146fbcaf5055f2f7b3820631cbf534014e9927de5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-router.gif%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={560} />
                    <p><span>인스타그램 클론코딩은 SPA 방식으로 구현했습니다. SPA 방식은 웹 애플리케이션 실행 후에 유저와의 상호작용이 있는 부분만 자바스크립트를 사용하여 서버 API를 호출하고,
                        불러온 데이터를 화면에 업데이트 해주는 방식을 의미합니다.</span></p>
                    <p><strong><span>유저별 페이지 (마이 페이지)</span></strong></p>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77c62c7c-44fb-42a7-b7ff-e1e23c1fc224/insta-profile.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T074558Z&X-Amz-Expires=86400&X-Amz-Signature=28d9e9bee218c909e228d25449d88305a602e722fcc6b1ab82bc6e0a1fd64d0f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-profile.gif%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={560} />
                    <p><span>유저별 마이 페이지는 유저 각각이 올린 컨텐츠를 모아볼 수 있는 페이지입니다. React Router를 활용해 userId 별로 페이지가 렌더링 되도록 구현했습니다.</span>
                    </p>
                    <p><span>로그인한 유저의 페이지의 경우에는 아이디 옆에 프로필 편집 버튼과 로그아웃 버튼이 보이도록 하였고, 각 기능 또한 구현했습니다.</span></p>
                    <p><strong><span>전체 사진 보는 페이지</span></strong></p>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a5fbaa1d-b5d9-4740-97a9-589dc9743d01/insta-explore.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T074609Z&X-Amz-Expires=86400&X-Amz-Signature=2d63837326c85d73759e061fcdebb1dff7d7011f51c6d51a30de606079196108&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-explore.gif%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={560} />
                    <p><span>유저들의 전체 사진을 볼 수 있는 페이지를 구현했습니다. 그냥 이미지를 나열할 경우 마지막 줄의 이미지가 3개 미만인 경우 이미지가 왼쪽 정렬이 아닌 가운데 정렬이 되는 css
                        문제가 있었습니다. 이는 이미지를 3개씩 감싸는 div 태그를 생성하는 메소드를 만들어 css 문제를 해결할 수 있었습니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0f6c490a-a22e-4e40-83d3-732648cd406c/insta-05.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T074620Z&X-Amz-Expires=86400&X-Amz-Signature=de51215fc36db7c2f377db3288673f120293dcc58c909df19ce0ba9217698342&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22insta-05.png%22&x-id=GetObject'}
                        loading='lazy'
                        width={900}
                        height={450} />
                </div>
            </div>
        </div>
    )
}