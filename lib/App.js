'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./App.css');

var _componentsSearch = require('./components/search');

var _componentsSearch2 = _interopRequireDefault(_componentsSearch);

function App() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(_componentsSearch2['default'], null)
  );
}

exports['default'] = App;
module.exports = exports['default'];