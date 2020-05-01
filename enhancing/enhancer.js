module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  const newEnhancement = item.enhancement

  if(newEnhancement === 20 ) {
    return {...item}
  } 
  else if (newEnhancement > 20) {
    return null
  } else if (newEnhancement < 20) {
    return {...item, enhancement: newEnhancement + 1}
  }
};

function fail(item) {
  return { ...item };
}

function repair(item) {
  const newItem = { name: item.name ,durability: 100, enhancement: item.enhancement};
  return newItem;
}

function get(item) {
  return { ...item };
}
