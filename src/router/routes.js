/*
 * @Date: 07/03/2021 08.58.13 +0800
 * @Author: KnowsCount
 * @LastEditTime: 08/03/2021 07.36.32 +0800
 * @FilePath: /tutter/src/router/routes.js
 */
const routes = [
	{
		path: "/",
		component: () => import("layouts/MainLayout.vue"),
		children: [
			{ path: "", component: () => import("src/pages/pageHome.vue") },
			{
				path: "/about",
				component: () => import("src/pages/pageAbout.vue")
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
