<template>
  <article>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'docsLayout',

  async asyncData ({ $content, params}) {
    const page = await $content('Docs', params.docs).fetch()

    return {
      page
    }
  }
}
</script>