<template >
<div class="error">
  <article class="mx-5 error">
    <nuxt-content :document="enviroment" />
  </article>
</div>
</template>

<script>
export default {
  layout: 'docsLayout',

  async asyncData ({ $content, params}) {
    const enviroment = await $content('Enviroment', params.enviroment).fetch()

    return {
      enviroment
    }
  }
}
</script>