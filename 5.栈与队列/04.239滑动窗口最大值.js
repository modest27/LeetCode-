var maxSlidingWindow = function(nums, k) {
  class monoQueue {
      constructor(){
          this.queue = []
      }

      enqueue(value){
          let back = this.queue[this.queue.length-1]
          while(back!==undefined && back<value){
              this.queue.pop()
              back = this.queue[this.queue.length-1]
          }
          this.queue.push(value)
      }

      dequeue(value){
          let font = this.font()
          if(font === value){
              this.queue.shift()
          }
      }

      font(){
          return this.queue[0]
      }
  }
      let helperQueue = new monoQueue()
      let res = []
      let i = 0, j = 0
      while(j<k){
          helperQueue.enqueue(nums[j++])
      }
      res.push(helperQueue.font())
      while(j<nums.length){
          helperQueue.enqueue(nums[j])
          helperQueue.dequeue(nums[i])
          res.push(helperQueue.font())
          i++,j++
      }
      return res
}