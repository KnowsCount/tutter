<!--
 * @Date: 07/03/2021 08.58.13 +0800
 * @Author: KnowsCount
 * @LastEditTime: 09/04/2021 00.48.40 +0800
 * @FilePath: /tutter/src/layouts/MainLayout.vue
-->
<template>
	<q-layout view="lHr lpR fFf">
		<q-header class="bg-white text-black">
			<q-toolbar>
				<!-- <q-btn dense flat round icon="menu" @click="left = !left" /> -->
				<h3 class="q-pa-md lt-md header-icon" color="primary">
					Tutter
				</h3>
				<q-toolbar-title class="text-weight-bold">
					<!-- <q-avatar>
						<img
							src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
						/>
					</q-avatar> -->
					{{ $route.name }}
				</q-toolbar-title>
				<q-input
					placeholder="Search Tutter"
					dense
					filled
					v-model="search"
					class="q-ma-md"
				>
					<template v-slot:prepend>
						<q-icon name="search" />
					</template>
				</q-input>
			</q-toolbar>
		</q-header>

		<q-drawer show-if-above v-model="left" side="left" :width="390">
			<q-icon
				name="fas fa-dove"
				size="lg"
				color="primary"
				class="q-py-lg q-pt-xl"
				style="padding-left:25vh"
			/>
			<nav-bar />
		</q-drawer>

		<q-drawer
			show-if-above
			v-model="right"
			side="right"
			class="q-pr-xl background"
			:width="300"
		>
		</q-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
import navBar from "components/navBar";

export default {
	components: {
		navBar
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
.fit {
	background-color: #fafafa;
}

.header-text {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}

.q-toolbar {
	background-color: #fafafa;
}
</style>
