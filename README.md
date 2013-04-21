#valid-email

##Validate Email Addresses w/o pure regular expressions.
Regular expression validation is often useful, but also often inaccurate.
Sometimes it's just better to do it manually



## Example

```js
    console.log(require('valid-email')('john@iamjohnhenry.com'))//#true
    console.log(require('valid-email')('iamjohnhenry.com'))//#false
```