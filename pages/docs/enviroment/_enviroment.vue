<template>
  <article>
    <nuxt-content :document="enviroment" />
  </article>
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