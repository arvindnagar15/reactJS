import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!! My name is Arvind.asasa
			<p>yahoo.com</p>
			<Header/>
			<Content/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header of page</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h1>Content of page</h1>
         </div>
      );
   }
}

export default App;
