// импортируем компоненты
import AutorizationPage from "../Pages/Autorization/AutorizationPage"
import AboutPage from "../Pages/AboutPage/AboutPage"
import PostsPage from "../Pages/PostsPage/PostsPage"
import PostIdPage from "../Pages/PostIdPage/PostIdPage"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"
// массив авторизованных маршрутов
export const privateRouts = [
	{path: '/autorization', component: <AutorizationPage/>},
	{path: '/about', component: <AboutPage/>},
	{path: '/posts', component: <PostsPage/>},
	{path: '/posts/:id', component: <PostIdPage/>},
	{path: '*', component: <NotFoundPage/>},
]
// массив публичных маршрутов
export const publicRouts = [
	{path: '/autorization', component: <AutorizationPage/>},
]