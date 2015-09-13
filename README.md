NRCPrefix
=========

Prefixer for Myanmar National Registration Card's No Format

## Match Formats

`[State Number]\[District]([NAING/N])[Register No]`

- `12/OKM(N)123456`
- `12/OUKAMA(N)123456`
- `12/OKM(NAING)123456`

Prefer formats
- `12/OUKAMA(N)123456`
- `12/OUKAMA(NAING)123456`
- `၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆`

*NOTE*

Three english characters in district are not complete format.  
So you should be avoid using six english characters

Prefixer for Myanmar National Registration Card's No Format

## Usage
### Get format

```js
var nrc = MMNRC("12/OuKaMa (NAING) 123456");

nrc.getFormat() // 12/OUKAMA(N)123456
nrc.getFormat("mm") // ၁၂/ဉကမ(နိုင်)၁၂၃၄၅၆
```

### Test Equal

```js
var nrc = MMNRC("12/OUKAMA (N) 123456");

nrc.isEqual('၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆') // return true;
```

### Get district name

```js
var nrc = MMNRC("14/PaPaNa(N)123456");

```
