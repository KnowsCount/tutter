<!--
 * @Date: 07/03/2021 09.31.44 +0800
 * @Author: KnowsCount
 * @LastEditTime: 07/03/2021 10.02.38 +0800
 * @FilePath: /tutter/src/components/navBar.vue
-->

<template>
    <div class="q-pa-md" style="max-width: 350px">
        <q-list>
            <q-item clickable v-ripple to="/">
                <q-item-section avatar>
                    <q-icon color="primary" name="home" size="md" />
                </q-item-section>

                <q-item-section class="text-h6 text-weight-bold"
                    >Home</q-item-section
                >
            </q-item>
            <q-item clickable v-ripple to="/">
                <q-item-section avatar>
                    <q-icon color="primary" name="explore" size="md" />
                </q-item-section>

                <q-item-section class="text-h6 text-weight-bold"
                    >Explore</q-item-section
                >
            </q-item>
        </q-list>
    </div>
</template>

<script>
export default {
    name: "nav-bar"
};
</script>
