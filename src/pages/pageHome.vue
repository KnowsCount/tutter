<!--
 * @Date: 07/03/2021 08.58.13 +0800
 * @Author: KnowsCount
 * @LastEditTime: 09/04/2021 16.44.37 +0800
 * @FilePath: /tutter/src/pages/pageHome.vue
-->
<template>
	<q-page>
		<inputBox />
		<note-card class="float" />
	</q-page>
</template>

<script>
import inputBox from "components/inputBox.vue";
import noteCard from "src/components/noteCard.vue";

export default {
	name: "pageHome",
	components: {
		inputBox,
		noteCard
	},
	data() {
		return {
			// tutts: [
			// 	{
			// 		content:
			// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			// 		date: 1611653238221
			// 	},
			// 	{
			// 		content:
			// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			// 		date: 1611653238222
			// 	}
			// ],
			ph: "",
			dense: false
		};
	}
};
</script>

<style scoped>
.tutt-content {
	white-space: pre-line;
}
</style>
