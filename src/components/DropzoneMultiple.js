import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {useMutation} from "@apollo/client";
import {UPLOAD_FILES} from "../GraphQL/mutations/upload";

const FilesUpload = () => {
    const [uploadFiles] = useMutation(UPLOAD_FILES);

    const onDrop = useCallback((acceptedFiles) => {

        uploadFiles({
            variables: {
                files: acceptedFiles,
                ref: 'veterinary',
                refId: 1,
                field: 'medias'
            }
        })
            .then(() => console.log('files uploads'))

    }, [uploadFiles]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });
    return (
        <>
            <div {...getRootProps()} className={`dropzone ${isDragActive && "isActive"}`}>
                <input {...getInputProps()} />
                {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
            </div>
        </>
    );
};

export default FilesUpload;
