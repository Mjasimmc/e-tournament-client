import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import "./profile.css"

const MyEditor = ({ image, setCropImage, handleUpdateImage, ratioOfImage }) => {
    const [size, setSize] = useState(1000);
    const editorRef = useRef(null);



    const handleSave = () => {
        if (editorRef.current) {
            const canvas = editorRef.current.getImageScaledToCanvas();
            const editedImage = canvas.toDataURL('image/png');
            handleUpdateImage(editedImage)
            setCropImage('')
        }
    };

    return (
        <div className="mn-edtr-bx-invoke">
            <button onClick={() => setCropImage('')}>cancel</button>
            <div>
                <AvatarEditor
                    ref={editorRef}
                    width={ratioOfImage.width}
                    height={ratioOfImage.length}
                    image={image}
                    scale={size / 1000}
                    borderRadius={20}
                />
                <p>zoom : {size / 1000} x</p>
                <input type="range" min={1000} max={5000} value={size}
                    onChange={(e) => setSize(e.target.value)}
                    style={{
                        width: '200px'
                    }} />
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default MyEditor;
