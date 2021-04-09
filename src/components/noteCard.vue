<!--
 * @Date: 09/04/2021 11.32.21 +0800
 * @Author: KnowsCount
 * @LastEditTime: 09/04/2021 16.58.38 +0800
 * @FilePath: /tutter/src/components/noteCard.vue
-->

<template>
	<div>
		<q-list class="rounded-borders q-px-md">
			<q-item>
				<q-item-section style="font-size:14px">
					<span class="text-grey-7">time stamp</span>
					<span class="label">#标签</span>
					<q-item-label>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Auctor neque vitae tempus quam
						pellentesque. Arcu non sodales neque sodales ut etiam
						sit amet. Amet nisl suscipit adipiscing bibendum est
						ultricies. Vel pretium lectus quam id leo. Amet nisl
						suscipit adipiscing bibendum est ultricies. Egestas diam
						in arcu cursus. Id venenatis a condimentum vitae sapien
						pellentesque habitant morbi.
						<br />Urna duis convallis convallis tellus id. Urna duis
						convallis convallis tellus id interdum velit laoreet id.
						Ipsum dolor sit amet consectetur adipiscing elit duis.
						In nisl nisi scelerisque eu. In iaculis nunc sed augue
						lacus. Vestibulum lectus mauris ultrices eros in cursus
						turpis massa. Vitae tortor condimentum lacinia quis vel
						eros donec ac.
					</q-item-label>
				</q-item-section>

				<q-item-section side top>
					<q-icon
						name="fas fa-caret-square-down"
						style="font-size:15px"
					/>
				</q-item-section>
			</q-item>
		</q-list>
	</div>
</template>

<style scoped>
.label {
	background-color: rgb(241, 241, 241);
	color: #5783f7;
}
</style>

<script>
export default {
	name: "note-card"
};
</script>
