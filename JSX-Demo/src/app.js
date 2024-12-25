
//Get root element
const rootHtmlElement = document.getElementById("root");

///Initialize react root element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//Create basic react element 
const headingReactSectionElement = (
    <header className="site-yellow" id="site-header">
        <h1>Hello from JSX</h1>
        <h2>JSX is awesome</h2>
        <p>Lorem  ipsum dolor sit, amet consectetur dipisicing. Libero, corrupti?</p>
    </header>
);

//Create component without JSX
function Main(props){
    return React.createElement('main',
    {},
    React.createElement('h3', {}, props.title),
    React.createElement(
        'ul',
        {},
        React.createElement(
            'li',
            {},
            'The Matrix'
        ),
        React.createElement(
            'li',
            {},
            'The moon'
        )  
    ));
}

const siteContent = React.createElement(
    'div',
    {},
    headingReactSectionElement,
    React.createElement(
        Main, 
        {title: 'Best movies'},
     )

);

 const siteContentJSX = (
   <div>
        {headingReactSectionElement}
        <Main title="Best movies"/>
   </div>
 )
//Render content
rootReactElement.render(siteContentJSX);
