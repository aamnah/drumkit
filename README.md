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

### Delays in playing Audio
This seems to be a browser thing. Chrome plays audio on click just fine, without any delays. Opera and Safari seem to have issues with audio playback where there's a 0.5 sec delay, even after the audio file has already loaded.

Other people seem to have had the [same](https://stackoverflow.com/questions/9811429/html5-audio-tag-on-safari-has-a-delay) [issue](https://stackoverflow.com/questions/46836692/delay-in-javascript-audio-playback)

- Preloading `<audio>` and `<video>` on iOS devices is disabled to save bandwidth. My delay issue persists though even after the files have downloaded, and i'm not on an iOS device.
- You also [can't load multiple audio/video files](https://stackoverflow.com/questions/7862391/mobile-safari-audio-cache-manifest/7972609#7972609). 
> If you play one file, go and play another, and then come back and it'll just load that file all over again. 
 
### Converting audio files to reduce file sizes
Download [Media Converter (macOS)](http://media-converter.sourceforge.net/)

- Just converting the file from `.wav` to `.mp3` reduced the file size from 439kb to 70kb.
- For universal browser supported, it's better to convert the files to `.webm`
- Converting all 11 sound files from `wav` to `web` reduced the overall size from 1.1mb to 414kb 

Converting file formats and reducing file sizes massively sped up the audio playback, the delay is barely noticeable now. And i haven't gotten into _preloading_ or _merging_ all audios in one file and playing at aspecific position yet

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