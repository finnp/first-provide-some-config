# first-provide-some-config

Simple config that asks the user of a script the first time to provide some values and
then never again. Useful for those single-purpose scripts where all you need to set is some
minor config the first time.

If the user runs the script again with the `--edit` flag, it will show questions again but prefill
the saved values. The `--reset` flag will reset each value that is being accessed by the script.

## Usage

```js
import config from "first-provide-some-config";

const favoriteNumber = await config(
  "favoriteNumber",
  "Please let us know your favorite number"
);
console.log("Your favorite number is", favoriteNumber);
```

The first time you run this it will show the prompt like

```
? Please let us know your favorite number once more ›
```

And print it out after you supply it

```
✔ Please let us know your favorite number … 10
Your favorite number is 10
```

The second time you run it it will just return the saved value and print the message

```
Your favorite number is 10
```
