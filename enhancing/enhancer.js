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
   else if (newEnhancement < 20) {
    return {...item, enhancement: newEnhancement + 1}
  }
};

function fail(item) {
  const newEnhancement = item.enhancement;

  if(newEnhancement > 16){
    return {...item, durability: item.durability - 10, enhancement: newEnhancement - 1}
  } else if (newEnhancement < 15) {
    return {...item, durability: item.durability - 5}
  } else{
    return {...item, durability: item.durability - 10}
  }
};

function repair(item) {
  const newItem = { name: item.name ,durability: 100, enhancement: item.enhancement};
  return newItem;
};

function get(item) {
  if(item.enhancement === 0) {
  return { ...item }
} else {
  return {...item, name: `[+${item.enhancement}]${item.name}`}
}
}
