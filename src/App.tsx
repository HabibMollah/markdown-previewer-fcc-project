import { marked } from 'marked';
import { useState, useRef, useEffect } from 'react';

export default function App() {
  const [preview, setPreview] = useState(`# Heading 1
  ## Heading 2
  \`<InlineCode/>\`
  \`\`\`
  // Code block
  console.log("Hello World")
  \`\`\`

  - item 1
  - item 2
  There's also [links](https://mollah.vercel.app), and
  > Block Quotes!

  **bold**

  ### I know I look awful. This is just to pass the test
  ![Habib's image](https://avatars.githubusercontent.com/u/115046415?v=4)
  `);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const data = marked.parse(preview);
    if (ref.current) ref.current.innerHTML = data;
  }, [preview]);

  return (
    <main>
      <div>
        <h1 className="text-center">Markdown Previewer</h1>
        <h2 className="text-center mb-64px">by Habibur Rahman Mollah</h2>
        <h3 className="text-center underline">Editor</h3>
        <div className="editorWrap">
          <textarea
            value={preview}
            onChange={(e) => setPreview(e.target.value)}
            className=""
            id="editor"
          />
        </div>
        <h3 className="text-center underline">Preview</h3>
        <div className="previewWrap">
          <div ref={ref} id="preview"></div>
        </div>
      </div>
    </main>
  );
}
