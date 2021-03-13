/*
 * @Date: 07/03/2021 08.58.13 +0800
 * @Author: KnowsCount
 * @LastEditTime: 13/03/2021 14.12.29 +0800
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
				name: "Home"
			},
			{
				path: "/explore",
				component: () => import("src/pages/pageExplore.vue"),
				name: "Explore"
			},
			{
				path: "/about",
				component: () => import("src/pages/pageAbout.vue"),
				name: "About"
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
