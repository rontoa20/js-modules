import Button from "./button.js";

var container = document.querySelector("#root");
var root = ReactDOM.createRoot(container);

root.render(React.createElement(Button, null));