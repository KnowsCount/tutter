<!--
 * @Date: 07/03/2021 09.50.55 +0800
 * @Author: KnowsCount
 * @LastEditTime: 07/03/2021 12.57.25 +0800
 * @FilePath: /tutter/src/components/newsFeed.vue
-->
<template>
	<div class="q-pa-md" style="max-width: 350px">
		<q-list separator padding>
			<q-item class="q-pa-md">
				<q-item-section>
					<q-item-label overline class="text-grey"
						>Politics</q-item-label
					>
					<q-item-label class="text-weigh-bold"
						>Come here, Trump</q-item-label
					>
					<q-item-label caption
						>Lorem ipsum dolor sit amet, consectetur adipiscit
						elit.</q-item-label
					>
				</q-item-section>

				<q-item-section side top>
					<q-item-label caption>5 min ago</q-item-label>
				</q-item-section>
			</q-item>
			<q-item class="q-pa-md">
				<q-item-section>
					<q-item-label overline class="text-grey"
						>Education</q-item-label
					>
					<q-item-label class="text-weigh-bold"
						>Dr Chris had fun</q-item-label
					>
					<q-item-label caption
						>Lorem ipsum dolor sit amet, consectetur adipiscit
						elit.</q-item-label
					>
				</q-item-section>

				<q-item-section side top>
					<q-item-label caption>5 min ago</q-item-label>
				</q-item-section>
			</q-item>
			<q-item class="q-pa-md">
				<q-item-section>
					<q-item-label overline class="text-grey"
						>Entertainment</q-item-label
					>
					<q-item-label class="text-weigh-bold"
						>Trump disco</q-item-label
					>
					<q-item-label caption
						>Lorem ipsum dolor sit amet, consectetur adipiscit
						elit.</q-item-label
					>
				</q-item-section>

				<q-item-section side top>
					<q-item-label caption>5 min ago</q-item-label>
				</q-item-section>
			</q-item>
		</q-list>
	</div>
</template>

<script>
export default {
	name: "news-feed"
};
</script>
