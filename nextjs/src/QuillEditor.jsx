import $ from "jquery";
import katex from "katex";
import React, { useEffect, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";

if (typeof window !== "undefined") {
  window.katex = katex;
  window.jQuery = window.$ = $;
  window.mathquill4quill = require("mathquill4quill");
  require("@edtr-io/mathquill/build/mathquill.js");
}

const QuillEditor= ({ options }) => {
  const reactQuillRef = useRef(null);
  const didAttachQuillRefs = useRef(false);

  useEffect(() => {
    if (!didAttachQuillRefs.current) {
      attachQuillRefs();
      didAttachQuillRefs.current = true;
    }
  }, []);

  const attachQuillRefs = () => {
    const enableMathQuillFormulaAuthoring = window.mathquill4quill({ Quill, katex });
    enableMathQuillFormulaAuthoring(
      reactQuillRef.current?.getEditor(),
      options
    );
  };

  return (
    <ReactQuill
      ref={reactQuillRef}
      modules={{
        formula: true,
        toolbar: [["bold", "italic", "underline", "formula"]]
      }}
      theme="snow"
      placeholder="Compose an epic ..."
      bounds=".quill"
    />
  );
};

export default QuillEditor;
