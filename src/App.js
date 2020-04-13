import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact
      name="Landon Dixon"
      avatar='https://randomuser.me/api/portraits/men/82.jpg'
      online
      />
      <Contact
      name="Sarah Campbell"
      avatar='https://randomuser.me/api/portraits/women/52.jpg'
      />
      <Contact
      name="Darrell Phillips"
      avatar='https://randomuser.me/api/portraits/men/5.jpg'
      online
      />
    </div>
  );
}

export default App;
