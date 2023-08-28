import { marked } from 'marked';
import { useState, useRef, useEffect } from 'react';

export default function App() {
  const [preview, setPreview] =
    useState(`# Edit in the editor above 👆 to see changes

  You can use markdown syntax in the editor to preview anything you want
  
  # Markdown Previewer by Habib 🔥 
  Here are some details about me written in MD: 👇
  
  # Technologies I Know
  
  <table overflow="hidden">
    <tr>
      <td align="center" height="100" width="100">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
          width="48"
          height="48"
          alt="TypeScript"
        />
        <br /><strong>TypeScript</strong>
      </td>
      <td align="center" height="100" width="100">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          width="48"
          height="48"
          alt="React"
        />
        <br /><strong>React</strong>
      </td>
      <td align="center" height="100" width="100">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          width="48"
          height="48"
          alt="Redux"
        />
        <br /><strong>Redux</strong>
      </td>
      <td align="center" height="100" width="100">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          width="48"
          height="48"
          alt="Next.js"
        />
        <br /><strong>Next.js</strong>
      </td>
      <td align="center" height="100" width="100">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          width="48"
          height="48"
          alt="Sass"
        />
        <br /><strong>Sass</strong>
      </td>
      <td align="center" height="100" width="100">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          width="48"
          height="48"
          alt="Tailwind"
        />
        <br /><strong>Tailwind</strong>
      </td>
      <td align="center" height="100" width="100">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
          width="48"
          height="48"
          alt="Bootstrap"
        />
        <br /><strong>Bootstrap</strong>
      </td>
      <td align="center" height="100" width="100">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
          width="48"
          height="48"
          alt="Material UI"
        />
        <br /><strong>Material UI</strong>
      </td>
    </tr>
    <tr>
    </tr>
  </table>
  
  ## My Github Stats 📊
  
  <p align="center">
    <img src="https://streak-stats.demolab.com?user=HabibMollah&theme=material&hide_border=true&border_radius=25"/>
  </p>
  
  📫 To reach me [hrmollah2002@gmail.com](mailto:hrmollah2002@gmail.com)
  
  <!-- <p>📫 To reach me <a href="mailto:hrmollah2002@gmail.com">hrmollah2002@gmail.com</a></p> -->
  
  <!-- <p align="left">An enthusiastic and determined learner from Bangladesh 🇧🇩, committed to expanding my knowledge and skills in order to make a positive impact on my community and the world.</p> -->
  <!--
  <h3 align="center">⚙ Languages and technologies 🛠:</h3>
  <p align="center">
      <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
      <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
      <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a>
      <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a>
      <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
      <a href="https://react.dev/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a>
      <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>
      <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a>
  </p> -->
  
  <!--<p align="center"><img src="https://github-readme-streak-stats.herokuapp.com/?user=habibmollah&theme=dark" alt="habibmollah" /></p>-->
  
  <!-- <p align="center">&nbsp;<img src="https://github-readme-stats.vercel.app/api?username=habibmollah&show_icons=true&theme=merko&title_color=ffffff&text_color=ffffff&bg_color=000000&locale=en" alt="habibmollah" /></p> -->
  
  <!-- <h3 align="center">Connect with me</h3>
  <p align="center">
  <a href="https://twitter.com/habibalbd" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="habibalbd" height="30" width="40" /></a>
  <a href="https://linkedin.com/in/habib-ibn-tofazzal" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="habib-ibn-tofazzal" height="30" width="40" /></a>
  <a href="https://fb.com/habib.ibn.tofazzal" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="habib.ibn.tofazzal" height="30" width="40" /></a>
  </p> -->
  
  <!-- <p align="left"> <img style="width:130px" src="https://komarev.com/ghpvc/?username=habibmollah&label=Profile%20views&color=34AEEB&style=flat" alt="habibmollah" /> </p> -->`);
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
          <div ref={ref} id="preview" className=""></div>
        </div>
      </div>
    </main>
  );
}
