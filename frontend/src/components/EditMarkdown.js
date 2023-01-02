import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const MyBlock = styled.div`
  .wrapper-class {
    width: 100%;
    max-width: 662px;
    border: 1px solid #e4e6e8;
    border-radius: 3px;
    word-break: break-all;
  }

  .toolbar-class {
    margin-bottom: 0;
  }

  .editor {
    height: 100%;
    height: 209px;
    overflow: auto;
    padding: 10px;
  }

  .public-DraftStyleDefault-block {
    margin: 0;
  }
`;

const TextEditor = ({ content, setContent }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };

  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent()),
  );

  useEffect(() => {
    setContent(editorToHtml);
  }, [editorState, editorToHtml, setContent]);

  useEffect(() => {
    const blocksFromHtml = htmlToDraft(content);

    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap,
      );

      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
    // eslint-disable-next-line
  }, []);

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

export default TextEditor;
