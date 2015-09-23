var React = require('react/addons');
var ZRender = require('../../../vendors/zrender/index');
var Tools = require('../../../utils/tools');

var _BarOption = require('../config/option');

var BarOption = Tools.clone(_BarOption);

delete BarOption.xAxis[0].boundaryGap;

BarOption.tooltip.axisPointer = { type : 'shadow'}


module.exports = BarOption;
