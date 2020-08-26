import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import './App.css';
import MediaUpload from "./components/MediaUpload";
import FileUpload from "./components/Dropzone";
import FilesUpload from "./components/DropzoneMultiple";

function App() {

    const httpLink = createUploadLink({
        uri: 'http://localhost:1337/graphql',
    });

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    });

    return (
        <ApolloProvider client={client}>
            <div>
                <h2>My first Apollo app !</h2>

                <MediaUpload/>
                <FileUpload />
                <FilesUpload />
            </div>
        </ApolloProvider>
    );
}

export default App;
