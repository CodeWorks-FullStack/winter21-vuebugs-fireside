<template>
  <div
    class="card elevation-2"
    :class="bug.closed ? 'bg-dark lighten-5' : ''"
    style="width: 280px"
    @click="toggleBug"
  >
    <div class="card-body">
      <h4>{{ bug.title }}</h4>
      <p>{{ bug.description }}</p>
      <kbd
        class="text-white"
        :class="bug.closed ? 'bg-success text-dark' : 'bg-danger'"
        >
        <b>{{ bug.closed ? "CLOSED" : "NEEDS ATTENTION" }}</b></kbd
      >
    </div>
  </div>
</template>

<script>
import { Bug } from '../models/Bug.js'
import { bugsService } from '../services/BugsService.js'
export default {
  props: {
    bug: {
      type: Bug,
      required: true
    }
  },
  setup(props) {
    return {
      async toggleBug() {
        await bugsService.editBug({ ...props.bug, closed: !props.bug.closed })
      }
    }
  }
}
</script>
