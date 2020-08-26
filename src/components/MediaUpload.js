import React, {Fragment, useState} from "react";
import {useMutation} from "@apollo/client";
import {UPLOAD_FILES} from "../GraphQL/mutations/upload";

function MediaUpload() {
    const [uploadFiles, {data}] = useMutation(UPLOAD_FILES);
    const [files, setFiles] = useState([]);
    const [ref, setRef] = useState('veterinary');
    const [refId, setRefId] = useState(1);
    const [field, setField] = useState('medias');

    const handleSubmit = async e => {
        e.preventDefault();

        await uploadFiles({
            variables: {
                files,
                ref,
                refId,
                field
            }
        })
    }

    return (
        <Fragment>
            {data && data.upload.map(file => <div key={file}>
                {JSON.stringify(file)}
            </div>)}

            <form onSubmit={handleSubmit}>
                <input
                    id="files"
                    type="file"
                    multiple
                    value={files}
                    onChange={e => setFiles([
                        ...files,
                        {
                            file: e.target.files[0]
                        }
                    ])}
                />
                <input
                    type="text"
                    value={ref}
                    onChange={e => setRef(e.target.value)}
                />
                <input
                    type="number"
                    value={refId}
                    onChange={e => setRefId(parseInt(e.target.value))}
                />
                <input
                    type="text"
                    value={field}
                    onChange={e => setField(e.target.value)}
                />
                <button type="submit">Upload</button>
            </form>
        </Fragment>
    )
}

export default MediaUpload;
