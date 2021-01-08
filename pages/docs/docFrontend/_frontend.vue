<template>
  <article>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'docsLayout',

  async asyncData ({ $content, params}) {
    const page = await $content('Frontend', params.frontend).fetch()

    return {
      page
    }
  }
}
</script>