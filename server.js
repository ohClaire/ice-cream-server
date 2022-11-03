const { response } = require('express');
const express = require('express');
const app = express();
const iceCreams = require('./data/');

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Ice Cream';

app.get('/', (request, response) => {
  response.send('I want Ice Cream!');
});

app.locals.iceCream = [
  {
    brand: 'bj',
    key: '0_bj',
    name: 'Salted Caramel Core',
    subhead:
      'Sweet Cream Ice Cream with Blonde Brownies & a Salted Caramel Core',
    description:
      'Find your way to the ultimate ice cream experience with our Cores. Whether your primal urges lead you to the center of salted caramel or directly to the blonde brownies, you’ll be in total control of your own ice cream destiny.',
    rating: 3.7,
    rating_count: 208,
    ingredients:
      'CREAM, SKIM MILK, LIQUID SUGAR (SUGAR, WATER), WATER, BROWN SUGAR, SUGAR, MILK, WHEAT FLOUR, EGG YOLKS, CORN SYRUP, EGGS, BUTTER (CREAM, SALT), BUTTEROIL, PECTIN, SEA SALT, SOYBEAN OIL, VANILLA EXTRACT, GUAR GUM, SOY LECITHIN, BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORN STARCH, MONOCALCIUM PHOSPHATE), BAKING SODA, SALT, CARRAGEENAN, LACTASE',
  },
  {
    brand: 'bj',
    key: '1_bj',
    name: "Netflix & Chilll'd™",
    subhead:
      'Peanut Butter Ice Cream with Sweet & Salty Pretzel Swirls & Fudge Brownies',
    description:
      'There’s something for everyone to watch on Netflix & flavors for everyone to enjoy from Ben & Jerry’s, so we’ve teamed up to bring you a chillaxing new creation that’s certain to satisfy any sweet or salty snack craving. It’s a flavorful world, and everyone is invited to grab a spoon.',
    rating: 4,
    rating_count: 127,
    ingredients:
      'CREAM, SKIM MILK, LIQUID SUGAR (SUGAR, WATER), WATER, SUGAR, PEANUTS, WHEAT FLOUR, CANOLA OIL, EGG YOLKS, CORN STARCH, PEANUT OIL, COCOA POWDER, SALT, SOYBEAN OIL, INVERT CANE SUGAR, MILK FAT, EGGS, EGG WHITES, GUAR GUM, SOY LECITHIN, TAPIOCA STARCH, BAKING SODA, CARRAGEENAN, VANILLA EXTRACT, BARLEY MALT, MALTED BARLEY FLOUR',
  },
];

app.get('/api/v1/ice-creams', (req, res) => {
  console.log(req, '<>>>>request');
  const iceCreams = app.locals.iceCreams;
  response.json({ iceCreams });
  // res.status(200).json(iceCreams);
});

app.listen(app.get('port'), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get('port')}.`
  );
});
