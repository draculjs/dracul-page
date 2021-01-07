<template>
  <article>
    <h1>Installation</h1>
    <nuxt-content :document="install" />
  </article>
</template>

<script>
export default {
  layout: 'docsLayout',

  async asyncData ({ $content, params}) {
    const install = await $content('Installation', params.installation).fetch()

    return {
      install
    }
  }
}
</script>