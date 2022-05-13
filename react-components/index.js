import App from "./app.js";

var container = document.querySelector("#root");
var root = ReactDOM.createRoot(container);

root.render(React.createElement(App, null));