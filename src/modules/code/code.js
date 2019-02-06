import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/styles/prism';

class Code extends React.Component {
  render() {
    return <SyntaxHighlighter language='javascript' style={dark}>{this.props.code}</SyntaxHighlighter>;
  }
}

export default Code
