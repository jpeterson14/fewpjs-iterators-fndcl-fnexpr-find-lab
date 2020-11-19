const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array){
  let stats = array.find(stat => stat.result === "W")

if (stats){
  return stats.year
} else {
  return stats
}
}
