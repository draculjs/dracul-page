<template>
<div class="error">
  <article class="mx-5 error">
    <h1>Installation</h1>
    <nuxt-content :document="install" />
  </article>
</div>
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