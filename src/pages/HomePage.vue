<template>
  <div>
    <div class="d-flex flex-wrap">
      <Bug v-for="b in bugs" :key="b.id" :bug="b" class="m-4" />
    </div>
    <div class="p-5">
      <BugForm />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { onMounted } from '@vue/runtime-core'
import { bugsService } from '../services/BugsService.js'
export default {
  name: 'Home',
  setup() {

    onMounted(() => {
      bugsService.getBugs()
    })

    return {
      bugs: computed(() => AppState.bugs)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
