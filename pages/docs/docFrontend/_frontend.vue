<template>
<div class="error">
  <article class="mx-5 error">
    <nuxt-content :document="page" />
  </article>
</div>
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