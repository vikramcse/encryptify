# encryptify
cli tool for encrypting and decrypting of files

## Install

```sh
$ npm install -g encryptify
```

## Example

```sh
encryptify encrypt a.txt a.out
Enter your password
// -> Will output a.out as encrypted file

encryptify decrypt a.out a.txt
Enter your password
// -> Will output a.out as decrypted file
```

### This cli tool is using AES-256 encryption

#### `encryptify [encrypt|decrypt] input-file output-file`

**Arguments**:
- `encrypt|decrypt`: The operation which you want to execute
- `input-file`: The file which you want to encrypt
- `output-file`: The file which you want to decrypt

**Returns**: Return a file which is encrypted/decrypted

## License

&copy; 2016 vikram. MIT Licence
