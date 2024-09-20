
const ratingService = require('../services/rating.service.js');

const createRating= (req, res) => {
  try {
    const user = req.user
    const reqBody = req.body;
    
    const rating = ratingService.createRating(reqBody, user);
    
    res.status(202).jso(rating);
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong' });
  }
};

const getProductsRating=async (req, res) => {
  try {
    const productId = req.params.productId;
    const ratings =await ratingService.getProductsRating(productId);
    res.status(200).send(ratings);
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong' });
  }
};

module.exports = {getProductsRating,createRating}
