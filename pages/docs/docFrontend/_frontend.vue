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
<style>
.container{
  margin: 0px;  
  padding: 0px;
  max-width: 100%;
  background-color: rgba(58, 55, 55, 0.137);
}
</style>