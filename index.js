var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
var object = {};
  var objectTwo = Object.assign({}, object);
  return objectTwo
}
