<!--
 * @Date: 07/03/2021 08.58.13 +0800
 * @Author: KnowsCount
 * @LastEditTime: 20/03/2021 11.09.37 +0800
 * @FilePath: /tutter/src/pages/pageHome.vue
-->
<template>
	<q-page>
		<div class="q-py-lg q-px-md">
			<q-input
				bottom-slots
				v-model="newTuttContent"
				placeholder="What's Happening?"
				counter
				autogrow
				maxlength="280"
				:dense="dense"
				class="tuttBox"
			>
				<template v-slot:before>
					<q-avatar size="xl">
						<img src="https://cdn.quasar.dev/img/avatar5.jpg" />
					</q-avatar>
				</template>

				<template v-slot:append>
					<q-icon
						v-if="text !== ''"
						name="close"
						@click="text = ''"
						class="cursor-pointer"
					/>
					<q-icon name="schedule" />
				</template>

				<template v-slot:hint>
					Field hint
				</template>

				<template v-slot:after>
					<q-btn
						:disable="!newTuttContent"
						unelevated
						rounded
						nocaps
						color="primary"
						label="Tutt"
					/>
				</template>
			</q-input>
		</div>
	</q-page>
</template>

<script>
export default {
	name: "pageHome",
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
