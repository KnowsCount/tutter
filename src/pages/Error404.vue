<!--
 * @Date: 07/03/2021 08.58.13 +0800
 * @Author: KnowsCount
 * @LastEditTime: 07/03/2021 09.21.28 +0800
 * @FilePath: /tutter/src/pages/Error404.vue
-->
<template>
    <div
        class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
    >
        <div>
            <div style="font-size: 30vh">
                404
            </div>

            <div class="text-h2" style="opacity:.4">
                Oops. Nothing here...
            </div>

            <q-btn
                class="q-mt-xl"
                color="white"
                text-color="blue"
                unelevated
                to="/"
                label="Go Home"
                no-caps
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "Error404"
};
</script>
