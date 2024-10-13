const mongoose = require('mongoose');
const {WatchlistSchema} = require('../Schemas/WatchlistSchema');

const Watchlist = mongoose.model('Watchlist',WatchlistSchema);

module.exports.Watchlist = Watchlist;