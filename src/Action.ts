export type Action =  
| {
    type: 'click'
    value: number
  }
| {
    type: 'jump'
    value: number
  }