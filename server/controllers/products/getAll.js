const { Products } = require('../../products');
const { HttpError } = require('../helpers/HttpError');
const ctrlWrp = require('../helpers/controllersWrapper');

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite = null } = req.query;
  const skip = (page - 1) * limit;

  //   if (favorite) {
  //     try {
  //       const result = await Products.find({ favorite });
  //       return res.json(result);
  //     } catch (error) {
  //       throw HttpError(400, 'Check the correctness of the entered data');
  //     }
  //   }

  const result = await Contact.find({ owner }, null, { skip, limit });
  res.json(result);
};

module.exports = {
  getAll: ctrlWrp(getAll),
  getById: ctrlWrp(getById),
};
