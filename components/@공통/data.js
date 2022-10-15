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
                imgUrl: "/img1.jpg",
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
                imgUrl: "/img0.jpg",
            },
            {
                id: 2,
                menu: 'clone',
                title: "Instagram Clone",
                path: "instagramClone",
                imgUrl: "/img3.jpg",
            },
            {
                id: 3,
                menu: 'clone',
                title: "Dona Todo App Clone",
                path: "donaTodoApp",
                imgUrl: "/img2.jpg",
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
                imgUrl: "/img4.png",
            },
            {
                id: 2,
                menu: 'study',
                title: "wanted pre-onboarding challenge",
                path: "wantedChallenge",
                imgUrl: "/img5.jpg",
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