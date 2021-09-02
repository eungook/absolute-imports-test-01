/**
 * Relative Imports (default)
 * import logo from './logo.svg';
 * import './App.css';
 */

/**
 * Absolute Imports
 * jsconfig.json를 만들고, compilerOptions.baseUrl과 include를 설정해주는 것으로 끝난다.
 * vscode쪽에도 특별히 설정해줘야하지 않는듯?
 * (참고: javascript.preferences.importModuleSpecifier가 있는데 기본값인 shortest로도 잘 되는 듯? 알아서 jsconfig.json을 참고하는걸로 보임)
 * @see {@link https://create-react-app.dev/docs/importing-a-component/#absolute-imports}
 */
import logo from 'logo.svg';
import 'App.css';
import MyP from 'MyP';

// * 참고: jsconfig.json의 baseUrl은 src 혹은 node_modules밖에 안 된다.
// root로 할 수 없다.
// 
// * 관련 에러 메세지: 
// Error: Your project's `baseUrl` can only be set to `src` or `node_modules`. Create React App does not support other values at this time.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyP />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
