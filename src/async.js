// Async Utilities

//callback receives the argument
function parallel(tasks, callback) {
  let output = []
  let count = 0

  for (let i = 0; i < tasks.length; i++) {
    let taskFunction = tasks[i]
    
    taskFunction(function (error, result) {
      output[i] = result
      count++
      if (error) {
        return callback(error, output)
      }
      if (count === 2) {
        return callback(error, output)
      }
    })
  }
}

// Try to define map using parallel
function map(collection, iteratee, callback) {

}

function waterfall(tasks, callback) {

}

export default {
  waterfall,
  parallel,
  map
}
