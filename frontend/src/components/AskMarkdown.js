import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const MyBlock = styled.div`
  .wrapper-class {
    width: 100%;
    max-width: 851px;
    margin-bottom: 4rem;
    margin-top: 30px;
  }
  .editor {
    height: 500px !important;
    border: 1px solid #e4e6e8 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

const TestEditorForm = ({ setContent }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent()),
  );

  useEffect(() => {
    setContent(editorToHtml);
  }, [editorState, editorToHtml, setContent]);

  return (
    <MyBlock>
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor"
        toolbarClassName="toolbar-class"
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
        placeholder=""
        localization={{
          locale: 'ko',
        }}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </MyBlock>
  );
};

export default TestEditorForm;
