import Header from '../partials/Header.js';
import Footer from '../partials/Footer.js';

function Welcome(props) {
    return <h1>Velkommen til {props.name}</h1>;
}


const App = () => {
    return (
        <div className ="App">
            <Header />
            <Welcome name="Magnus" />
            <Welcome name="Keld" />
            <Footer />
        </div>
    );
}

export default App;