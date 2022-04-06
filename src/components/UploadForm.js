import React, { useState } from 'react'
import Progressbar from './Progressbar';
import cx from 'classnames';

function UploadForm({ theme }) {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const onChangeInput = (e) => {
        const selectedFiles = e.target.files[0];

        console.log('selectedFiles', selectedFiles);

        if (selectedFiles && types.includes(selectedFiles.type)) {
            setFile(selectedFiles)
            setError('')
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    const imLabel = cx('im-label', {
        light: theme === 'light',
        dark: theme === 'dark'
    })

    return (
        <form>
            <label className={imLabel} style={
                {
                    border: theme == 'light' ? ' 2px solid black' : ' 2px solid #f5f5f5e7',
                    color: theme == 'light' ? 'black' : '#f5f5f5e7'
                }
            } >
                <input type="file" onChange={(e) => onChangeInput(e)} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className='error' >{error}</div>}
                {file && <div className='file' >{file.name}</div>}
                {file && <Progressbar file={file} setFile={setFile} />}

            </div>
        </form>
    )
}

export default UploadForm