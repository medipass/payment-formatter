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
  inputType: 'cardNumber'
});
paymentFormatter({
  inputType: 'expiry',
  selector: 'input#card-expiry'
})
paymentFormatter({
  cardType: 'mastercard',
  inputType: 'cvc',
  selector: 'input#card-cvc'
})
```

or with pure HTML (useful for payment fields within an iframe):

```html
<html>
  <body>
    <input id="card-number" auto-complete="cc-number" pattern="[0-9]*" placeholder="Card number" type="text">
    <input id="card-expiry" auto-complete="cc-expiry" pattern="[0-9]*" placeholder="Card expiry" type="text">
    <input id="card-cvc" auto-complete="cc-cvc" pattern="[0-9]*" placeholder="Card cvc" type="text">
    <script src="https://unpkg.com/payment-formatter@1.0.0/umd/index.js" />
    <script>
      paymentFormatter({
        inputType: 'cardNumber',
        selector: 'input#card-number'
      })
      paymentFormatter({
        inputType: 'expiry',
        selector: 'input#card-expiry'
      })
      paymentFormatter({
        cardType: 'mastercard',
        inputType: 'cvc',
        selector: 'input#card-cvc'
      })
    </script>
  </body>
</html>

```

## API

### paymentFormatter({ cardType, inputType, selector })

#### cardType

Type: `string` (optional)<br>
Type of card. E.g.: `mastercard`, `amex`, `visa`

#### inputType

Type: `string` (required)<br>
Type of payment input. Available: `cardNumber`, `cvc`, `expiry`

#### selector

Type: `string` (required)<br>
CSS selector of the targeted input field.

## License

MIT © [jxom](http://jxom.io)
