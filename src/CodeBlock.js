import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {okaidia} from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeBlock({language, value}) {
    return (
        <SyntaxHighlighter language={language} style={okaidia}>
          {value}
        </SyntaxHighlighter>
      );
};
