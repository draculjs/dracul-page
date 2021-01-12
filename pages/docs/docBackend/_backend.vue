<template>
<div class="white">
  <article class="mx-5 white">
    <nuxt-content :document="page" />
  </article>
</div>
</template>

<script>
export default {
  layout: 'docsLayout',

  async asyncData ({ $content, params}) {
    const page = await $content('Backend', params.backend).fetch()

    return {
      page
    }
  }
}
</script>