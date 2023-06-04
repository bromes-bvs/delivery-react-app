const { Products } = require('../models/products');
const { HttpError } = require('../helpers/HttpError');
const ctrlWrp = require('../helpers/controllersWrapper');

const getAll = async (req, res, next) => {
  const result = await Products.find();
  res.status(200).json(result);
};

const getById = async (req, res, next) => {
  const { productId } = req.params;
  const result = await Products.findById(productId);
  if (!result) {
    throw HttpError(404, `Not found contact with id ${contactId}`);
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrp(getAll),
  getById: ctrlWrp(getById),
};
