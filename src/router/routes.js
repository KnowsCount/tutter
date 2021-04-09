/*
 * @Date: 07/03/2021 08.58.13 +0800
 * @Author: KnowsCount
 * @LastEditTime: 09/04/2021 02.03.35 +0800
 * @FilePath: /tutter/src/router/routes.js
 */
const routes = [
	{
		path: "/",
		component: () => import("layouts/MainLayout.vue"),
		children: [
			{
				path: "",
				component: () => import("src/pages/pageHome.vue"),
				name: "Memo"
			},
			{
				path: "/explore",
				component: () => import("src/pages/pageExplore.vue"),
				name: "随机漫步"
			},
			{
				path: "/about",
				component: () => import("src/pages/pageAbout.vue"),
				name: "关于"
			}
		]
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: "*",
		component: () => import("pages/Error404.vue")
	}
];

export default routes;
