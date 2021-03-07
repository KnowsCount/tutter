<!--
 * @Date: 07/03/2021 08.58.13 +0800
 * @Author: KnowsCount
 * @LastEditTime: 08/03/2021 07.31.57 +0800
 * @FilePath: /tutter/src/layouts/MainLayout.vue
-->
<template>
	<q-layout view="lHr lpR fFf">
		<q-header bordered class="bg-white text-black">
			<q-toolbar>
				<q-btn dense flat round icon="menu" @click="left = !left" />
				<q-icon
					name="fas fa-dove"
					size="sm"
					color="primary"
					class="q-pa-md lt-md header-icon"
				/>
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
			:width="364"
		>
			<q-icon
				name="fas fa-dove"
				size="lg"
				color="primary"
				class="q-py-lg q-pt-xl"
				style="padding-left:48px"
			/>
			<nav-bar />
		</q-drawer>

		<q-drawer
			show-if-above
			v-model="right"
			side="right"
			bordered
			class="q-pr-xl"
			:width="392"
		>
			<q-input
				placeholder="Search Tutter"
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

<style lang="scss">
.header-icon {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}
</style>
