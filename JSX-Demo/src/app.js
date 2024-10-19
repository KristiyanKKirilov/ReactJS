
//Get root element
const rootHtmlElement = document.getElementById("root");

///Initialize react root element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//Create basic react element 
const headingReactSectionElement = (
    <header>
        <h1>Hello from JSX</h1>
        <h2>JSX is awesome</h2>
        <p>Lorem  ipsum dolor sit, amet consectetur dipisicing. Libero, corrupti?</p>
    </header>
);


//Render content
rootReactElement.render(headingReactSectionElement);
