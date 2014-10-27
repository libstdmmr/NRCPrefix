NRCPrefix (JavaScript)
======================

Prefixer for Myanmar National Registration Card's No Format


## Usage

#### Convert format

```js
var nrc = MMNRC("12/OUKAMA (NAING) 123456");

nrc.getFormat() // 12/OUKAMA(N)123456
```

#### Test Equal

```js
var nrc = MMNRC("12/OUKAMA(NAING)123456");

nrc.isEqual('၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆') // return true;
```