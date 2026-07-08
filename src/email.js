// Obfuscated email to prevent spam harvesting
// Decoded at runtime via a simple XOR cipher

const _key = 0x07
const _encoded = [102,96,107,104,112,111,104,106,98,111,98,102,107,115,111,71,115,98,107,114,116,41,105,98,115]

export function getEmail() {
  return String.fromCharCode(..._encoded.map(b => b ^ _key))
}
