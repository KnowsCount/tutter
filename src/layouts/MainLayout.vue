<!--
 * @Date: 07/03/2021 08.58.13 +0800
 * @Author: KnowsCount
 * @LastEditTime: 07/03/2021 13.10.17 +0800
 * @FilePath: /tutter/src/layouts/MainLayout.vue
-->
<template>
	<q-layout view="lHr lpR fFf">
		<q-header bordered class="bg-white text-black">
			<q-toolbar>
				<q-btn dense flat round icon="menu" @click="left = !left" />
				<q-toolbar-title class="text-weight-bold">
					<!-- <q-avatar>
						<img
							src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
						/>
					</q-avatar> -->
					Tutter
				</q-toolbar-title>
			</q-toolbar>
		</q-header>

		<q-drawer
			show-if-above
			v-model="left"
			side="left"
			bordered
			:width="285"
		>
			<q-icon
				name="fas fa-dove"
				size="lg"
				color="primary"
				class="q-px-lg q-pt-xl"
			/>
			<nav-bar />
		</q-drawer>

		<q-drawer show-if-above v-model="right" side="right" bordered>
			<q-input
				placeholder="Search"
				outlined
				dense
				rounded
				class="q-ma-md"
			>
				<template v-slot:prepend>
					<q-icon name="search" />
				</template>
			</q-input>
			<newsFeed />
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
import navBar from "components/navBar";
import newsFeed from "components/newsFeed.vue";

export default {
	components: {
		navBar,
		newsFeed
	},
	data() {
		return {
			left: false,
			right: false
		};
	}
};
</script>
