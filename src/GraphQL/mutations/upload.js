import {gql} from "@apollo/client";

export const UPLOAD_FILE = gql`
    mutation ($file: Upload!, $ref: String!, $refId: ID, $field: String) {
        upload(
            file: $file
            ref: $ref
            refId: $refId
            field: $field
        ) {
            id
            name
            width
            height
            hash
            size
            formats
            ext
            mime
            provider
            previewUrl
            provider_metadata
            caption
        }
    }
`

export const UPLOAD_FILES = gql`
    mutation ($files: [Upload]!, $ref: String!, $refId: ID, $field: String) {
        multipleUpload(
            files: $files
            ref: $ref
            refId: $refId
            field: $field
        ) {
            id
            name
            width
            height
            hash
            size
            formats
            ext
            mime
            provider
            previewUrl
            provider_metadata
            caption
        }
    }
`
