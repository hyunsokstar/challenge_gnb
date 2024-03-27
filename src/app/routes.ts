import Test1 from "./Component/Test1"
import Test2_React from "./Component/test2/react"
import Test2_Vanila from "./Component/test2/vanila"

// 라우트 경로들을 배열로 선언
const routePaths = ['/', '/test1', '/test2', '/test2/vanilla', '/test2/react'] as const

// ROUTE_PATH 
// 경로 타입은 routePaths 중의 하나임을 명시
export type ROUTE_PATH = (typeof routePaths)[number]

// BaseRoute 
// 기본적인 라우트 정보는 key , link, name 임을 명시
type BaseRoute = {
    key: ROUTE_PATH
    link: ROUTE_PATH
    name: string
}

// 부모 라우팅 정보는 children 으로 자식 route 정보를 설정
export type ParentRoute = BaseRoute & {
    children: ROUTE_PATH[]
}

// 자식 라우트 정보는 자식으로 Component 정보를 설정
export type ChildRoute = BaseRoute & {
    children: ((props: any) => JSX.Element) | null
}

// 라우트 정보는 부모 라우트이거나 자식 라우트 이다
export type ROUTE = ParentRoute | ChildRoute

// routes 는 키 벨류 형식의 객체로 라우트 정보를 명시
export const routes: Record<ROUTE_PATH, ROUTE> = {
    '/': {
        key: '/',
        link: '/',
        name: 'root',
        children: ['/test1', '/test2']
    },
    '/test1': {
        key: '/test1',
        link: '/test1',
        name: '테스트1',
        children: Test1
    },
    '/test2': {
        key: '/test2',
        link: '/test2/vanilla',
        name: '테스트2',
        children: ['/test2/vanilla', '/test2/react']
    },
    '/test2/vanilla': {
        key: '/test2/vanilla',
        link: '/test2/vanilla',
        name: 'Vanilla',
        children: Test2_Vanila
    },
    '/test2/react': {
        key: '/test2/react',
        link: '/test2/react',
        name: 'React',
        children: Test2_React
    },
}

// isParentRoute : 라우트 정보의 children 이 배열일 경우 부모 라우트 정보임을 판단 하는 함수 
export const isParentRoute = (route: ROUTE): route is ParentRoute => Array.isArray(route.children)

// 기본 루트 정보는 routes['/'] 의 children 즉 ['/test2/vanilla', '/test2/react'] 을 키값으로 다시 라우팅 정보를 가져와 배열화
export const gnbRootList = (routes['/'] as ParentRoute).children.map(r => routes[r])
