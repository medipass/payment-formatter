# payment-formatter

> A flexible, lightweight library to format payment card numbers

## Install

```
$ npm install payment-formatter
```

## Usage

```js
import paymentFormatter from 'payment-formatter';

paymentFormatter({
  selector: 'input#card-number',
  type: 'cardNumber'
});
```

or with pure HTML (useful for payment fields within an iframe):

```html
<html>
  <body>
    <input id="card-number" auto-complete="cc-number" pattern="[0-9]*" placeholder="Card number" type="text">
    <script src="https://unpkg.com/payment-formatter@1.0.0/umd/index.js" />
    <script>
    paymentFormatter({
      selector: 'input#card-number',
      type: 'cardNumber'
    })
    </script>
  </body>
</html>
```

## API

### paymentFormatter({ selector, type })

#### selector

Type: `string`

CSS selector of the targeted input field.

#### type

Type: `string`<br>

Type of payment field. Available: `cardNumber`, `cardCVC`, `cardExpiry`

## License

MIT © [jxom](http://jxom.io)
