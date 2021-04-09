<!--
 * @Date: 07/03/2021 09.31.44 +0800
 * @Author: KnowsCount
 * @LastEditTime: 09/04/2021 16.58.07 +0800
 * @FilePath: /tutter/src/components/navBar.vue
-->

<template>
	<div class="q-pa-md" style="max-width: 350px;padding-left: 25vh">
		<calendar-heatmap :endDate="today" :values="values" />
		<q-list>
			<q-item clickable to="/">
				<q-item-section avatar>
					<q-icon color="primary" name="home" size="md" />
				</q-item-section>

				<q-item-section class="text-h6 text-weight-bold"
					>Memo</q-item-section
				>
			</q-item>
			<q-item clickable to="/explore">
				<q-item-section avatar>
					<q-icon color="primary" name="explore" size="md" />
				</q-item-section>

				<q-item-section class="text-h6 text-weight-bold"
					>随机漫步</q-item-section
				>
			</q-item>
			<q-item clickable to="about">
				<q-item-section avatar>
					<q-icon color="primary" name="info" size="md" />
				</q-item-section>

				<q-item-section class="text-h6 text-weight-bold"
					>关于</q-item-section
				>
			</q-item>
		</q-list>
	</div>
</template>

<script>
import { CalendarHeatmap } from "vue-calendar-heatmap";

export default {
	name: "nav-bar",
	components: {
		CalendarHeatmap
	},
	data() {
		return {
			left: false,
			right: false,
			values: [{ date: "2020-09-22", count: 6 }],
			today: new Date()
		};
	}
};
</script>
