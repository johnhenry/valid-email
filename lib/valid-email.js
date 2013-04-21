/*!
 * Valid Email
 * Copyright(c) 2013 John Henry
 * MIT Licensed
 */

/**
 * Valid-Email:
 *
 * An alternative to using a regular expression to validate email.
 * Inspired by: 
 *      http://stackoverflow.com/questions/997078/email-regular-expression
 *      http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address
 *
 * Examples:
 *     console.log(require('valid-email')('john@iamjohnhenry.com'))//#true
 *     console.log(require('valid-email')('iamjohnhenry.com'))//#false
 *
 * @param {String} email 
 * // potential email address
 * @return {Boolean}
 * @api public
 */
module.exports = function valid(email){
    var at = email.search("@");
    if (at <0) return false;
    var user = email.substr(0, at);
    var domain = email.substr(at+1);
    var userLen = user.length;
    var domainLen = domain.length;
    if (userLen < 1 || userLen > 64) return false;// user part length exceeded
    if (domainLen < 1 || domainLen > 255) return false;// domain part length exceeded
    if (user.charAt(0) === '.' || user.charAt(userLen-1) === '.') return false;// user part starts or ends with '.'
    if (user.match(/\.\./)) return false;// user part has two consecutive dots
    if (!domain.match(/^[A-Za-z0-9.-]+$/)) return false;// character not valid in domain part
    if (domain.match( /\\.\\./)) return false;// domain part has two consecutive dots
    if (!user.replace("\\\\","").match(/^(\\\\.|[A-Za-z0-9!#%&`_=\\/$\'*+?^{}|~.-])+$/)) if (!user.replace("\\\\","").match(/^"(\\\\"|[^"])+"$/)) return false
    return true;
}