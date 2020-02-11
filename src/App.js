import React from 'react';
import logo from './logo.svg';
import './App.css';
import GitHubCard from "./components/githubcard";
import Footer from "./components/footer";
import {Provider} from "react-redux";
import store from "./store";
import FormDialog from "./components/form";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <GitHubCard/>
                <Footer/>
                <FormDialog/>
            </div>
        </Provider>
    );
}

export default App;
