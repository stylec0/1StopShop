const Item = require('../models/item');

const BUCKET = process.env.BUCKET;

module.exports = {
    index
}


async function index(req, res) {
	try {
	  // this populates the user when you find the posts
	  // so you'll have access to the users information
	  // when you fetch teh posts
	  const items = await Item.find({}).populate("user").exec();
	  res.status(200).json({ items: items });
	} catch (err) {
	  res.status(400).json({ err });
	}
  }