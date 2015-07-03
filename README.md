NRCPrefix
=========

Prefixer for Myanmar National Registration Card's No Format

## Match Formats

`[State Number]\[District]([NAING])[Register No]`

- 12/OKM(N)123456
- 12/OUKAMA(N)123456
- 12/OKM(NAING)123456
- 12/OUKAMA(NAING)123456
- ၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆

[NOTE]:
Three Character district are not complete format! And So some function can't be do.
Read README on specific languages

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
