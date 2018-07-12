# Drumkit

[Source - JavaScript 30 by Wes Bos](https://www.youtube.com/watch?v=VuN8qwZoego)

### NOTES

- Uses `<kbd>` and `<audio>` elements and custom `data-` data attributes
- Using `<kbd>` elements for keyboard keys. Nothing special, most browsers would use a monospace font for `<kbd>` elements.
- The key to making the drumkit work is `data` attributes. Data attributes let you make up your own attributes. `data-blah`. We're using them to link keys to their sounds and to be able to easily target them in javascript

```html
<div data-key="keyG" class="key">
  <kbd class="keyTitle">G</kbd>
  <span class="keyDesc">Boom</span>
</div>

<audio data-key="keyG" src="sounds/boom.wav" />
```

- For some reason i can't understand, the following code works with `e.key` values but not with `e.code` values

Works:

```html
<audio data-key="g" src="sounds/boom.wav" />
```
```js
let audio = this.document.querySelector(`audio[data-key="${e.key}"]`)
```

Doesn't work:

```html
<audio data-key="keyG" src="sounds/boom.wav" />
```
```js
let audio = this.document.querySelector(`audio[data-key="${e.code}"]`)
```

- The `play()` method comes from the `HTMLMediaElement` / `HTMLAudioElement` interface
- `transitionend` event is fired when a CSS transition has completed


Links
---
- [Keycode.info](http://keycode.info/)
- [MDN: click](https://developer.mozilla.org/en-US/docs/Web/Events/click)
- [MDN: keydown](https://developer.mozilla.org/en-US/docs/Web/Events/keydown)
- [MDN: HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/)
- [MDN: .play()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play)
- [MDN: events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN: transitionend](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend)
- [EJS: Handling Events](https://eloquentjavascript.net/15_event.html)