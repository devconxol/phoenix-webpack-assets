# phoenix-webpack-assets

## Setup
Clone the repo replacing the assets folder of your project
```
 1. git clone https://github.com/devconxol/phoenix-webpack-assets.git path/to/assets
 2. cd path/to/assets
 3. npm install or yarn install
 4. change the watchers on `config/dev.exs` file
      `watchers: [node: ["node_modules/webpack-dev-server/bin/webpack-dev-server.js", "--watch-stdin --hot",
                    cd: Path.expand("../assets", __DIR__)]]`
  
