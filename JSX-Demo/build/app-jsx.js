
//Get root element
var rootHtmlElement = document.getElementById("root");

///Initialize react root element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//Create basic react element 
var headingReactSectionElement = React.createElement(
    "header",
    null,
    React.createElement(
        "h1",
        null,
        "Hello from JSX"
    ),
    React.createElement(
        "h2",
        null,
        "JSX is awesome"
    )
);

//Render content
rootReactElement.render(headingReactSectionElement);