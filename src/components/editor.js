/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from 'react'
import Codemirror from 'codemirror';
import 'codemirror/theme/dracula.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/mode/javascript/javascript'

const editor = () => {
    const codemirrorInstance = useRef(null);

    useEffect(() => {
        if (!codemirrorInstance.current) {
            const textarea = document.getElementById('realtimeEditor');
            codemirrorInstance.current = Codemirror.fromTextArea(textarea, {
                mode: { name: 'javascript', json: true, },
                theme: 'dracula',
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers: true,
            });
        }
    }, []);
    return <textarea id="realtimeEditor"></textarea>
}

export default editor;
