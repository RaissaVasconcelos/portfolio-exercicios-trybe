const { states, cities, regions } = require('./data');

const mapCities = () => {
  const object = cities.reduce((acc, curr) => {
    console.log(acc)
    console.log(curr.region);
    return acc + curr.region;
  }, {});
  return object;
}

console.log(mapCities());

