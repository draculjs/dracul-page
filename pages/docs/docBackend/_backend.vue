<template>
  <article>
    <nuxt-content :document="page" />
  </article>
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