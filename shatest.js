const cryptoJS = require('crypto-js');
const { SHA256: sha256, DES: des } = cryptoJS;

let pre = 0;
let hashed = false;
while (!hashed) {
   const hash = sha256(pre + 'Test Message' + Date.now() + Math.random()).toString(
      cryptoJS.enc.Hex
   );
   console.log(`Testing ${pre++} against hash: ${hash}`);
   if (hash.substring(0, 4) === '1234') hashed = true;
}
