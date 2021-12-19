
# cssmin

Fast css minifier

## Features

 - CLI
 - JavaScript API
 - Support recursive
 - Create ".min.css" file automatically
 - Support watch mode


## Installation

Install cssmin with npm

```bash
npm install @erwinstone/cssmin -g
```

## Usage/Examples

### cli:
```bash
cssmin dist/css
cssmin dist/css --watch
```

### javascript api:
```bash
npm install @erwinstone/cssmin
```
```javascript
import { cssmin, cssminStr } from '@erwinstone/cssmin'

await cssmin({
	path: 'dist/css',
})

// or

await cssmin({
	path: 'dist/css',
	watch: true,
})

// or

await cssminStr(`
	div {
		color: yellow;
	}
`)
```
