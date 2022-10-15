const data = [
    {
        title: 'Project',
        subtitle: '직접 서비스를 기획하고 구현한 프로젝트입니다.',
        state: [
            {
                id: 1,
                menu: 'project',
                title: "Motivation App",
                path: "motivationApp",
                imgUrl: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c1ad4b0b-a122-4cb7-95b9-6762b2016e20/img1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T080422Z&X-Amz-Expires=86400&X-Amz-Signature=cbbee72f31ff257a8b19e7c4f8ba05a403cc9544e91f39ba90f68696f8468400&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22img1.jpg%22&x-id=GetObject",
            },
        ],
    },
    {
        title: 'Clone',
        subtitle: '기존 서비스를 클론 코딩한 프로젝트입니다.',
        state: [
            {
                id: 1,
                menu: 'clone',
                title: "Netflix Clone",
                path: "netflixClone",
                imgUrl: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6afec282-9881-409b-ab77-abe166b9757b/img0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T080720Z&X-Amz-Expires=86400&X-Amz-Signature=309cf6952ac85242a9bef792349f736f71e6bfd83492366d2b94c0eca58e2fd7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22img0.jpg%22&x-id=GetObject",
            },
            {
                id: 2,
                menu: 'clone',
                title: "Instagram Clone",
                path: "instagramClone",
                imgUrl: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a5af5b5a-03a5-44b5-b0d1-a7ea41828755/img3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T080243Z&X-Amz-Expires=86400&X-Amz-Signature=1aea774af20f2924884dc26ff33bd24785895961342872f86794c26e11bb49a8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22img3.jpg%22&x-id=GetObject",
            },
            {
                id: 3,
                menu: 'clone',
                title: "Dona Todo App Clone",
                path: "donaTodoApp",
                imgUrl: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9058555a-7633-4fbc-90f6-97d4e0a4e1cb/img2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T080208Z&X-Amz-Expires=86400&X-Amz-Signature=39f8da30ef2d9408d080ebc06bad4aa455d085705a0d8e03a17bdd9903b23c42&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22img2.jpg%22&x-id=GetObject",
            }
        ]
    },
    {
        title: 'Study',
        subtitle: '개발에 필요한 지식을 쌓기 위해 진행한 스터디 프로젝트입니다.',
        state: [
            {
                id: 1,
                menu: 'study',
                title: "Vanilla JS Study",
                path: "vanillaJS",
                imgUrl: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/040fde22-915b-473e-9e2f-62ec34164944/img4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T080707Z&X-Amz-Expires=86400&X-Amz-Signature=c77dad84a52042f8f7fa79df8bb7fd3fea4fb6cc5d8bcbf50fd48362cd79d49d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22img4.png%22&x-id=GetObject",
            },
            {
                id: 2,
                menu: 'study',
                title: "wanted pre-onboarding challenge",
                path: "wantedChallenge",
                imgUrl: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0efdbcbf-c1b2-42d9-ac63-611558689260/img5.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T080606Z&X-Amz-Expires=86400&X-Amz-Signature=bf376d180fd5b3cbf67abe048bfdecf8971c5b8f65641f251cae9920e0a790df&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22img5.jpg%22&x-id=GetObject",
            },
        ]
    }
]

const blogmenu = ["ALL", "CS", "HTML/CSS", "JavaScript", "React"]
const projectsmenu = ["All", "Project", "Clone", "Study"]
const navmenu = ['About', 'Blog', 'Projects', 'Contact']
const contents = {
    kor: `안녕하세요. 프론트엔드 개발자 김유선입니다.`,
    eng: "Hello! I'm Yuseon Kim, the front-end developer.",
    chn: "你好！我叫金有善，是网站开发者。"
  };

export { data, blogmenu, navmenu, projectsmenu, contents };