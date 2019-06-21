var recipes = {

}

function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

  return recipes
}
