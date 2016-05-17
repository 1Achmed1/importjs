# importjs
Makes adding scripts to documents a little easier, cutting out the annoying `<script src="whatever.js" type="whatever/whatever">` DOM and replacing it with `importjs('whatever');`. ImportJS requires jQuery.

## Usage
Here's a pre-importjs code snippet:
```html
<script src="horizontal-nav.js" type="text/javascript"></script>
<script src="content-loader.js" type="text/javascript"></script>
<script src="variables.js" type="text/javascript"></script>
```

Let's beautify that with importjs:
```html
<script src="importjs.js" type="text/javascript"></script>
<script type="text/javascript">
  importjs("horizontal-nav");
  importjs("content-loader");
  importjs("variables");
</script>
```
You can also make a separate js file for this purpose:

HTML:
```html
<script src="importjs.js" type="text/javascript"></script>
<script src="jsimports.js" type="text/javascript"></script>
```
`jsimports.js`:
```javascript
importjs("horizontal-nav");
importjs("content-loader");
importjs("variables");
```

## Download ImportJS
You can use either online always-updated code or download the code for production.

To use it from the online source, add this script in your project:
`//raw.githubusercontent.com/1Achmed1/importjs/master/importjs.js` <br/>
\>\> As a side note, you can remove the `http[x]:` thing from URLs (as I have above), as it will automatically use the same HTTP protocol this way.

For production releases, download the a source release: <br/>
https://github.com/1Achmed1/importjs/releases
