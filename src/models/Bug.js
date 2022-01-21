export class Bug{
  constructor(data = {}){
    this.description = data.description
    this.title = data.title
    this.user = data.user
    this.closed = data.closed
    this.closedAt = data.closedAt
    this.id = data.id
  }

}
