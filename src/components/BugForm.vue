<template>
  <div class="card elevation-2" style="width:500px">
    <h4 class="px-4 pt-4">{{editable.id ? 'Edit Bug': 'Create a new Bug'}}</h4>
    <form @submit.prevent="handleSubmit" class="card-body">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" class="form-control" v-model="editable.title" />
      </div>
      <div class="form-group">
        <label for="title">Description:</label>
        <input
          type="text"
          class="form-control"
          v-model="editable.description"
        />
      </div>
      <div class="form-group" v-if="editable.id">
        <label for="title">Close:</label>
        <input v-model="editable.closed" type="checkbox" />
      </div>
      <div class="my-2 d-flex justify-content-between">
        <button class="btn btn-dark" type="cancel">Cancel</button>
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from '@vue/runtime-core'
import { Bug } from '../models/Bug.js'
import { bugsService } from '../services/BugsService.js'

export default {
  props: {
    bug: {
      type: Bug,
      default: () => new Bug({})
    }
  },
  setup(props) {
    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...props.bug }
    })


    return {
      editable,
      async handleSubmit() {
        if (editable.value.id) {
          // TODO an edit
          await bugsService.editBug(editable.value)
        } else {
          await bugsService.createBug(editable.value)
          editable.value = new Bug()
        }
      }
    }
  }
}
</script>

<style>
</style>
