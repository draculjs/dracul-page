<template >
<div class="white">
  <article class="mx-5 white">
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