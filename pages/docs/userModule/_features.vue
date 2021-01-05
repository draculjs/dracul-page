<template>
  <article>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'docsLayout',

  async asyncData ({ $content, params}) {
    const page = await $content('Docs/User', params.features).fetch()

    return {
      page
    }
  }
}
</script>