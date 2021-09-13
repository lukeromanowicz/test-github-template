<template>
  <SfHeaderNavigationItem :label="caption" :link="link" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navigation',
  props: {
    caption: {
      type: String,
    },
    link: {
      type: String,
    },
  },
})
</script>
