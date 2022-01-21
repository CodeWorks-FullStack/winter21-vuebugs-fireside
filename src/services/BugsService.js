import Axios from 'axios'
import { AppState } from '../AppState.js'
import { Bug } from '../models/Bug.js'

export const api = Axios.create({
  baseURL: 'http://localhost:3000/api/jake/bugs',
  timeout: 8000
})

class BugsService {
  // get (?)

  async getBugs() {
    const res = await api.get()
    AppState.bugs = res.data.map(d => new Bug(d))
  }
  async createBug(data) {
    data.creator = 'jake' // fake auth
    const res = await api.post('', data)
    AppState.bugs.push(new Bug(res.data))
  }

  async editBug(bug) {
    const res = await api.put(bug.id, bug)
    AppState.bugs.splice(AppState.bugs.findIndex(b => b.id == bug.id), 1, new Bug(res.data))
  }

  async deleteBug(id) {
    await api.delete(id)
    AppState.bugs = AppState.bugs.filter(b => b.id != id)
  }
}
export const bugsService = new BugsService()
