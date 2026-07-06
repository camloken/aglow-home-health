// Obfuscated email to prevent spam harvesting
// Decoded at runtime via a simple XOR cipher
// aglowhomehealth@telus.net

const _key = 0x07
const _encoded = [110,105,97,104,71,102,96,107,104,112,111,104,106,98,111,98,102,107,115,111,41,100,102]

export function getEmail() {
  return String.fromCharCode(..._encoded.map(b => b ^ _key))
}
