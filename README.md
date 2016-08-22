# Salvador

Control lights without knowing a thing about the DALI protocol!

## Usage

The functions provided by this library require you to implement a function with the signature `dali(command, address, cb?)`, where command is the DALI command and address is the target ballast's address. The callback, if present should be called with the DALI response.

Commands must be sent over Dali in the order the dali function is called.

Commands 0xA5 and 0xA7 should be sent twice in rapid succession.
