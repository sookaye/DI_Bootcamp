
import React from 'react';
import BuggyCounter from './Buggycounter';
import ErrorBoundary from './ErrorBoundary';
import BuggyCounter2 from './Buggycounter2';
import Lifecycle from './Lifecycle';

function App() {
  return (
    <>
    <div>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
    <div>
      <BuggyCounter2 />
    </div>
    <div>
      <Lifecycle />
    </div>
   </>
  );
}

export default App;
