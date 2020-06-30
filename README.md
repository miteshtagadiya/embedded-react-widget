<h1>Embedded React Widget</h1>

## Demo

<img width="600px" src="./demo.gif" />

## Running the widget

### Install dependencies

```sh
$ npm install
```

### Start the development server

```sh
$ npm start
```

### Production build
```
$ npm run build
... create files in /dist
```
## How to add Embedded widgets to you website?
- Add /dist/widget.js file to your project.
- import widget.js file.
  ```
  <script src="./widget.js"></script>
  ```
- Mount EmbeddableWidget.
```
` <script>
      EmbeddableWidget.mount();
  </script>
```
## Acknowledgments
I found helpful guidance in this project from the following site:

https://github.com/seriousben/embeddable-react-widget

