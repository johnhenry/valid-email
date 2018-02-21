# valid-email

## Validate Email Addresses w/o pure regular expressions.
Regular expression validation is often useful, but also often inaccurate.
Sometimes it's just better to do it manually.

## Example

```javascript
    console.log(require('valid-email')('john@iamjohnhenry.com'))//#true
    console.log(require('valid-email')('iamjohnhenry.com'))//#false
```

## Accuracy

There are some cases in which this library present the user with false negatives (See [this issue](https://github.com/johnhenry/valid-email/issues/1). 

This library is considered a "good enough" implementation for most use cases and is meant to provide a simple method of validating email about which most coders can reason. 

There are other methods which may be more accurate but more difficult ensure that it's doing what it's doing. (See [https://emailregex.com/](https://emailregex.com/)). 

Please be aware of the levels of accuracy your application needs.

