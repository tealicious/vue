npm install -g vue-cli

(after globally installing vue-cli with npm)...

(select webpack or webpack-simple)

vue init webpack-simple vue-cli

cd vue-cli

npm install

(run localhost and project dependencies)

npm run dev

add this to package.json for sass support:

"vue-style-loader": "^2.0.5"

other must haves:

"vue-router": "^2.0.1",
"vuex": "^2.4.0",
"babel-preset-stage-2": "^6.24.1"
