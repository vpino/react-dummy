# React for Dummy

> Create your WEBPACK to React

Install npm in debian jessie

```bash
$ apt install curl apt-transport-https

$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash 

$ apt install -y nodejs

$ npm install --global npm@latest
```

## Start the webpack 

Init project of Nodejs

```bash
$ npm init -y
```

Install depends of development for webpack with React

```bash
$ npm i -D webpack webpack-dev-server babel-loader babel-cli babel-preset-es2015 babel-preset-react
```

Install React

```bash
$ npm i -S react react-dom
```

Create file of babel ```.babelrc``` with the following content:


```bash
{
  "presets": [
    "es2015",
    "react"
  ]
}
```

Create the file to webpack ```webpack.config```:

```bash
const path = require('path');

module.exports = {

  resolve: {
    extensions: ['.js', '.jsx']
  },

  context: __dirname,

  entry: {
    app: [path.resolve(__dirname, 'src', 'index.jsx')]
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, 'build')
  },
 
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },

  /* Apartado importante de webpack, 
  ** el que realiza las transformaciones
  */
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        include: path.resolve(__dirname),
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        
        query: {
          presets: ['es2015'],
        }

      }
    ]
  }

}
```

Now add scripts to the file ```package.json```:

```javascript
"scripts": {
    "build": "webpack --colors",
    "serve": "webpack-dev-server --progress --colors",
    "start": "npm run build && npm run serve"
  },
```


Create folder ```build``` with the file ```index.html```

```html
<!DOCTYPE html>
<html>
<head>
	<title> React Sabe</title>
</head>
<body>
	<div id="root"> </div>
</body>
</html>
```

Create folder ```src``` with the file ```index.jsx```:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render () {
    return <h1> Hi React! </h1>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

And execute

```bash
$ npm start
```
