//const {jsonSuccess, jsonError} = require('./responseJson');

//let action = fn => (...args) => fn(...args).catch(args[2])

const cities = [
  {
    name: 'athens',
    "img": "../../images/cities/athens.jpg",
    "items": ["Wine", "Olives", "Cereals"]
  },
  {
    name: 'barcelona',
    "img": "../../images/cities/barcelona.jpg",
    "items": ["a", "a"]
  }
];
module.exports = {
  read: (req, res) => {
    res.json(cities.filter(city => city.name === req.params.name)[0]);
  },

  list:(req, res) => {
    let list;
    console.log('list!');
    list = [];//await getList();

    res.json(list));
  }
}
