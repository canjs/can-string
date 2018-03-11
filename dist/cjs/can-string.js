/*can-string@0.0.0#can-string*/
'use strict';
var strUndHash = /_|-/, strColons = /\=\=/, strWords = /([A-Z]+)([A-Z][a-z])/g, strLowUp = /([a-z\d])([A-Z])/g, strDash = /([a-z\d])([A-Z])/g, strQuote = /"/g, strSingleQuote = /'/g, strHyphenMatch = /-+(.)?/g, strCamelMatch = /[a-z][A-Z]/g, convertBadValues = function (content) {
        var isInvalid = content === null || content === undefined || isNaN(content) && '' + content === 'NaN';
        return '' + (isInvalid ? '' : content);
    };
var string = {
    esc: function (content) {
        return convertBadValues(content).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(strQuote, '&#34;').replace(strSingleQuote, '&#39;');
    },
    capitalize: function (s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    },
    camelize: function (str) {
        return convertBadValues(str).replace(strHyphenMatch, function (match, chr) {
            return chr ? chr.toUpperCase() : '';
        });
    },
    hyphenate: function (str) {
        return convertBadValues(str).replace(strCamelMatch, function (str) {
            return str.charAt(0) + '-' + str.charAt(1).toLowerCase();
        });
    },
    underscore: function (s) {
        return s.replace(strColons, '/').replace(strWords, '$1_$2').replace(strLowUp, '$1_$2').replace(strDash, '_').toLowerCase();
    },
    undHash: strUndHash
};
module.exports = string;