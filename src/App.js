import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Tasks</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Task Number</th>
            <th>Repository Link</th>
            <th>Deployment Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>my-react-app</td>
            <td>
              <a href="https://github.com/Aniket-explorer/Task3_My_React_App">Link 1</a>
            </td>
            <td>
              <a href="https://task3-my-react-app-alpha.vercel.app/">Link 1</a>
            </td>
          </tr>
          <tr>
            <td>react-calculator-app</td>
            <td>
              <a href="https://github.com/Aniket-explorer/Task3_Calculator">Link 2</a>
            </td>
            <td>
              <a href="https://task3-calculator-two.vercel.app//">Link 2</a>
            </td>
          </tr>
          <tr>
            <td>color-picker-react-app</td>
            <td>
              <a href="https://github.com/Aniket-explorer/Task3_Color_Picker">Link 3</a>
            </td>
            <td>
              <a href="https://task3-color-picker-orpin.vercel.app/">Link 3</a>
            </td>
          </tr>
          <tr>
            <td>usertable-react-app</td>
            <td>
              <a href="https://github.com/Aniket-explorer/Task3_Usertable_React_App">Link 4</a>
            </td>
            <td>
              <a href="https://task3-usertable-react-app-puce.vercel.app/">Link 4</a>
            </td>
          </tr>
          <tr>
            <td>age-calculator-react-app</td>
            <td>
              <a href="https://github.com/Aniket-explorer/Task3_Age_Calculator">Link 5</a>
            </td>
            <td>
              <a href="https://task3-age-calculator-gamma.vercel.app/">Link 5</a>
            </td>
          </tr>
          <tr>
            <td>portfolio</td>
            <td>
              <a href="https://github.com/Aniket-explorer/Task3_Portfolio_React">Link 6</a>
            </td>
            <td>
              <a href="https://task3-portfolio-react-xi.vercel.app/">Link 6</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
