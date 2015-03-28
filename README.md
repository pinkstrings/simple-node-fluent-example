## simple-node-fluent-example

### Installation

1.  Clone to your computer
- `cd` into the repository
- run `npm install`

### Usage

1.  `npm start`
 * will bounce `public/foo.mp3` to `public/foo2.mp3`
2. `npm clean`
 * deletes `public/foo2.mp3`

### Result

Should be something similar to:
```
$ npm start

> fluent-test@0.0.0 start /Users/tom/Sites/fluent-test
> NODE_ENV=production node ./bin/www

ffmpeg-tests started.
Processing finished !
```
