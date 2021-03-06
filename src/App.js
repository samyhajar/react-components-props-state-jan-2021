import './App.css';
import ExampleClassComponent from './classComponents/ExampleClassComponent';
import ExampleHooksFunctionComponent from './classComponents/ExampleHooksFunctionComponent';
import ExampleChildrenProp from './ExampleChildrenProp';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleFetchingOnLoad from './ExampleFetchingOnLoad';
import ExampleFetchingOnUpdate from './ExampleFetchingOnUpdate';
import ExampleFormsControlledComponents from './ExampleFormsControlledComponents';
import ExampleMapping from './ExampleMapping';
import ExampleProps from './ExampleProps';
import ExamplePropTypes from './ExamplePropTypes';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStyling from './ExampleStyling';
import ExampleUseEffect from './ExampleUseEffect';
import ExampleLiftingStateUpAfter from './liftingStateUp/After';
import ExampleLiftingStateUp from './liftingStateUp/Before';

function App() {
  return (
    <div className="App">
      <ExampleProps />
      <ExampleStateCounter />
      <ExampleMapping />
      <ExampleConditionalRendering />
      <ExampleFormsControlledComponents />
      <ExampleHooksFunctionComponent title="Hooks Example" />
      <ExampleClassComponent title="Classes Example" />
      <ExampleStyling />
      <ExampleLiftingStateUp />
      <ExampleLiftingStateUpAfter />
      <ExampleChildrenProp />
      <ExamplePropTypes
        // Props
        title="Prop Types"
        user={{ firstName: 'Karl' }}
      />
      <ExampleUseEffect />
      <ExampleFetchingOnLoad />
      <ExampleFetchingOnUpdate />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
