# payment-formatter

> A flexible, lightweight (1.5kB), non-dependant library to format payment card input fields. 

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
    <script src="https://unpkg.com/payment-formatter@latest/umd/index.js"></script>
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

Type: `string` (required for `inputType = 'cvc'`)<br>
Type of card. E.g.: `mastercard`, `amex`, `visa`

#### inputType

Type: `string` (required)<br>
Type of payment input. Available: `cardNumber`, `cvc`, `expiry`

#### selector

Type: `string` (required)<br>
CSS selector of the targeted input field.

## License

MIT © [Medipass Solutions](https://medipass.com.au/)
