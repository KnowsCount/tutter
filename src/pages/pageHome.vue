<!--
 * @Date: 07/03/2021 08.58.13 +0800
 * @Author: KnowsCount
 * @LastEditTime: 09/04/2021 00.26.11 +0800
 * @FilePath: /tutter/src/pages/pageHome.vue
-->
<template>
	<q-page>
		<inputBox />
	</q-page>
</template>

<script>
import inputBox from "components/inputBox.vue";

export default {
	name: "pageHome",
	components: {
		inputBox
	},
	data() {
		return {
			newTuttContent: "",
			ph: "",
			dense: false
		};
	}
};
</script>

<style>
#tuttbox {
	font-size: 19px;
	line-height: 10.4 !important;
}
</style>
