
//Get root element
var rootHtmlElement = document.getElementById("root");

///Initialize react root element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//Create basic react element 
var headingReactSectionElement = React.createElement(
    "header",
    { className: "site-yellow", id: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello from JSX"
    ),
    React.createElement(
        "h2",
        null,
        "JSX is awesome"
    ),
    React.createElement(
        "p",
        null,
        "Lorem  ipsum dolor sit, amet consectetur dipisicing. Libero, corrupti?"
    )
);

//Create component without JSX
function Main(props) {
    return React.createElement('main', {}, React.createElement('h3', {}, props.title), React.createElement('ul', {}, React.createElement('li', {}, 'The matrix'), React.createElement('li', {}, 'Man of culture')));
}

var siteContent = React.createElement('div', {}, headingReactSectionElement, React.createElement(Main, { title: 'Best movies' }));

var siteContentJSX = React.createElement(
    "div",
    null,
    headingReactSectionElement,
    React.createElement(Main, { title: "Best movies" })
);
//Render content
rootReactElement.render(siteContentJSX);