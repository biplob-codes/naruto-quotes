import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

function App() {
   const [message, setMessage] = useState('');
   useEffect(() => {
      fetch('/api/hello')
         .then((res) => res.json())
         .then((data) => setMessage(data.message));
   }, []);
   return (
      <div className="p-10">
         <p className="font-bold text-2xl mb-5">{message}</p>
         <Button> Click me</Button>
      </div>
   );
}

export default App;
