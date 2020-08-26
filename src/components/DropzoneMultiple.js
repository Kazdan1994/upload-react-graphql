import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {useMutation} from "@apollo/client";
import {UPLOAD_FILE} from "../GraphQL/mutations/upload";

const FileUpload = () => {
    const [uploadFile] = useMutation(UPLOAD_FILE);

    const onDrop = useCallback(async (acceptedFiles) => {

        const file = acceptedFiles[0];

        await uploadFile({
            variables: { file }
        })
    }, [uploadFile]);
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

export default FileUpload;
