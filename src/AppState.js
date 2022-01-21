import { reactive } from 'vue'
import { Bug } from './models/Bug.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  bugs: [new Bug({
    title: 'Bug 1',
    description: 'testing',
    creator: 'jake',
    id: 'somthinghrere',
    closed: false
  }), new Bug({
    title: 'Bug 2',
    description: 'testing',
    creator: 'jake',
    id: 'somthinghrere',
    closed: true
  })]
})
