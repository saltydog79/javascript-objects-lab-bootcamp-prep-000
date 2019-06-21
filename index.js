var recipes = {

}

function updateObjectWithKeyAndValue(object, key, value) {
Object.assign({}, recipes, {[key]: value});
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

  return recipes
}
