<!--
 * @Date: 26/03/2021 18.28.52 +0800
 * @Author: KnowsCount
 * @LastEditTime: 09/04/2021 00.25.57 +0800
 * @FilePath: /tutter/src/components/inputBox.vue
-->

<template>
	<div class="q-py-lg q-px-md">
		<q-input
			outlined
			v-model="ph"
			placeholder="现在的想法是..."
			:dense="dense"
		>
			<template v-slot:append>
				<q-icon
					v-if="text !== ''"
					name="close"
					@click="text = ''"
					class="cursor-pointer"
				/>
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
</template>

<script>
export default {
	name: "inputBox"
};
</script>
