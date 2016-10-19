if ((window && window.__adobe_cep__) || (global.window && global.window.__adobe_cep__)) {
  module.exports = require('./lib/CSInterface.js');
} else {
  module.exports = false;
}