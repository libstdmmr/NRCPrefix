/**
 * Myanmar National Registration Card Format Prefix
 *
 * Version: 0.1.0 (beta)
 * Language: JavaScript
 *
 * [State Number]\[District]([NAING])[Register No]
 *
 */

var MM_NUM = "\u1040-\u1049";
var MM_NUM_CHARS = "\u1040\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1040";
var mmChar = "\u1000\u1001\u1002\u1003\u1004\u1005\u1006\u1007\u1008\u100A\u100E\u100F\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101A\u101B\u101C\u101D\u101E\u101F\u1020\u1025\u1027";
var NAING_MM = "\u1014\u102D\u102F\u1004\u103A";
var regx_eng = /^([\d]{1,2})\/([\w]{3}|[\w]{6})\(?:N|NAING\)([\d]{6})$/;
var regx_mm = new RegExp("^(["+MM_NUM+"]{1,2})\/(["+mmChar+"]{3}|["+mmChar+"]{6})\((?:"+NAING_MM+")\)(["+MM_NUM+"]{6})$");

var states = [
  {en:"Kachin", mm:"\u1000\u1001\u103B\u1004\u103A\u1015\u103C\u100A\u103A\u1014\u101A\u103A"},
  {en:"Kayah", mm:"\u1000\u101A\u102C\u1038\u1015\u103C\u100A\u103A\u1014\u101A\u103A"},
  {en:"Kayin", mm:"\u1000\u101B\u1004\u103A\u1015\u103C\u100A\u103A\u1014\u101A\u103A"},
  {en:"Chin", mm:"\u1001\u103B\u1004\u103A\u1038\u1015\u103C\u100A\u103A\u1014\u101A\u103A"},
  {en:"Sagaing", mm:"\u1005\u1005\u103A\u1000\u102D\u102F\u1004\u103A\u1038\u1010\u102D\u102F\u1004\u103A\u1038"},
  {en:"Tanintharyi", mm:"\u1010\u1014\u1004\u103A\u1039\u101E\u102C\u101B\u102E\u1010\u102D\u102F\u1004\u103A\u1038"},
  {en:"Bago", mm:"\u1015\u1032\u1001\u1030\u1038\u1010\u102D\u102F\u1004\u103A\u1038"},
  {en:"Magway", mm:"\u1019\u1000\u103D\u1031\u1038\u1010\u102D\u102F\u1004\u103A\u1038"},
  {en:"Mandalay", mm:"\u1019\u1014\u1039\u1010\u101C\u1031\u1038\u1010\u102D\u102F\u1004\u103A\u1038"},
  {en:"Mon", mm:"\u1019\u103D\u1014\u103A\u1015\u103C\u100A\u103A\u1014\u101A\u103A"},
  {en:"Rakhine", mm:"\u101B\u1001\u102D\u102F\u1004\u103A\u1015\u103C\u100A\u103A\u1014\u101A\u103A"},
  {en:"Yangon", mm:"\u101B\u1014\u103A\u1000\u102F\u1014\u103A\u1010\u102D\u102F\u1004\u103A\u1038"},
  {en:"Shan", mm:"\u101B\u103E\u1019\u103A\u1038\u1015\u103C\u100A\u103A\u1014\u101A\u103A"},
  {en:"Ayeyarwaddy", mm:"\u1027\u101B\u102C\u101D\u1010\u102E\u1010\u102D\u102F\u1004\u103A\u1038"}
];

// ref: http://en.wiktionary.org/wiki/Appendix:Unicode/Myanmar
var CHARACTERS = {
  // MM -> ENG
  "\u1000": "KA",
  "\u1001": "KH",
  "\u1002": "GA",
  "\u1003": "GH",
  "\u1004": "NG",
  "\u1005": "CA",
  "\u1006": "CH",
  "\u1007": "JA",
  "\u1008": "JH",
  // TODO: NNYA
  "\u100A": "NY",
  "\u100E": "DD",
  // TODO: NNA
  "\u100F": "NN",
  "\u1010": "TA",
  "\u1011": "TH",
  "\u1012": "DA",
  "\u1013": "DH",
  "\u1014": "NA",
  "\u1015": "PA",
  "\u1016": "PH",
  "\u1017": "BA",
  "\u1018": "BH",
  "\u1019": "MA",
  "\u101A": "YA",
  "\u101B": "RA",
  "\u101C": "LA",
  "\u101D": "WA",
  "\u101E": "SA",
  "\u101F": "HA",
  "\u1020": "LL",
  "\u1025": "U",
  "\u1027": "E",
  // ENG -> MM
  "KA": "\u1000",
  "KH": "\u1001",
  "GA": "\u1002",
  "GH": "\u1003",
  "NG": "\u1004",
  "CA": "\u1005",
  "CH": "\u1006",
  "JA": "\u1007",
  "JH": "\u1008",
  "NY": "\u100A",
  "DD": "\u100E",
  "NN": "\u100F",
  "TA": "\u1010",
  "TH": "\u1011",
  "DA": "\u1012",
  "DH": "\u1013",
  "NA": "\u1014",
  "PA": "\u1015",
  "PH": "\u1016",
  "BA": "\u1017",
  "BH": "\u1018",
  "MA": "\u1019",
  "YA": "\u101A",
  "RA": "\u101B",
  "LA": "\u101C",
  "WA": "\u101D",
  "SA": "\u101E",
  "HA": "\u101F",
  "LL": "\u1020",
  "OU": "\u1025",
  "AE": "\u1027"
};

/**
 * Constructor
 * {String} NRC String
 */
var MMNRC = function(nrc){
  nrc = nrc.trim();
  nrc = nrc.replace(/\s/g, "");
  return new this.prototype.init(nrc);
};

MMNRC.prototype = {
  inti: function(nrc){
    if((this.match = regx_eng.exec(nrc))){
      this.lang = "en";
      this.state = this.match[1];
      this.dist = parseInt(this.match[2], 10);
      this.num = parseInt(this.match[3], 10);
      // 3 Characters Districts are not compete and can"t be generate Full Format
      if(this.dist.length === 3)
        this.inCompleteInfo = true;
      return this;
    } else if ((this.match = regx_mm.exec(nrc))){
      this.lang = "mm";
      this.state = MMNRC.toEngNum(this.match[1], 10);
      this.dist = MMNRC.convDistrict(this.match[2], 10);
      this.num = MMNRC.toEngNum(this.match[3], 10);
      return this;
    }
    // Return for error
    throw new Error("Type Not Match!");
  },

  isEqual: function(nrc){
    return MMNRC.formatConvert(nrc).fullcode === this.getFormat();
  }
};

MMNRC.prototype.init.prototype = MMNRC.prototype;

/**
 * Get Default Format
 */
MMNRC.prototype.getFormat = function (lang){
  if(lang && lang === "mm" && !this.inCompleteInfo) {
    MMNRC.toMyaNum(this.state) + "/" + MMNRC.convDistrict(this.dist) + "("+NAING_MM+")" + MMNRC.toMyaNum(this.num);
  } else {
    this.state + "/" + this.dist + "(N)" + this.num;
  }
};

/**
 * Get State 
 */

MMNRC.prototype.getState= function (lang) {
  if (lang === "mm") {
    return states[this.dist].mm;
  } else {
    return states[this.dist].en;
  }
};

/**
 * Convert Myanmar Number type to English
 */
MMNRC.toEngNum = function(MM_NUM){
  var _res = "";
  for (var i = 0; i < MM_NUM.length; i++) {
    _res += MM_NUM_CHARS.indexOf(MM_NUM[i]);
  }
  return parseInt(_res);
};

/**
 * Convert English Number type to Myanmar
 */
MMNRC.toMyaNum = function(enNum){
  var _res = "";
  while(enNum > 0){
    _res = enNum%10 + _res;
    enNum = enNum / 10;
  }
  return parseInt(_res);
};

MMNRC.convDistrict = function(dist){
  var _res = "";
  for (var i = 0; i < dist.length; i++) {
    if(!CHARACTERS[dist[i]])
      return null;
    _res += CHARACTERS[dist[i]];
  }
  return _res;
};

MMNRC.formatConvert = function(nrc){
  var _res = {};
  var _match;
  if((_match = regx_eng.exec(nrc))){
    _res.lang = "en";
    _res.state += _match[1];
    _res.dist += parseInt(_match[2], 10);
    _res.number = parseInt(_match[3], 10);
    _res.fullcode = _res.state + "/" + _res.dist + "(N)" + _res.number;
    // 3 Characters Districts are not compete and can"t be generate Full Format
    if(_res.dist.length === 3)
      console.warn("Incomplete format!");
    return _res;
  } else if ((_match = regx_mm.exec(nrc))){
    _res.lang = "mm";
    _res.state += MMNRC.toEngNum(_match[1], 10);
    _res.dist = MMNRC.convDistrict(_match[2], 10);
    _res.number = MMNRC.toEngNum(_match[3], 10);
    _res.fullcode = _res.state + "/" + _res.dist + "(N)" + _res.number;
    return _res;
  }
  return null;
};

module.exports = MMNRC;
