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
  5. Replace <script src="<%= static_path(@conn, "/js/app.js") %>"></script> with  
    <%= if Mix.env == :dev do %>
  <script src='http://localhost:8080/app.js'></script>
<% else %>
  <script src="<%= static_path(@conn, "/js/app.js") %>"></script>
<% end %>

6. Replace <script src="<%= static_path(@conn, "/css/app.css") %>"></script> with 
<%= if Mix.env != :dev do %>
  <script src="<%= static_path(@conn, "/css/app.css") %>"></script>
<% end %>
