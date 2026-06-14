import { useState, useEffect } from 'react';
import { QuoteCard } from './components/QuoteCard';

interface Quote {
   id: number;
   title: string;
   author: {
      name: string;
      image: string;
   };
}

export default function App() {
   const [quote, setQuote] = useState<Quote | null>(null);
   const [loading, setLoading] = useState(true);

   const fetchQuote = async () => {
      setLoading(true);
      const res = await fetch('/quote');
      const data = await res.json();
      setQuote(data);
      setLoading(false);
   };

   useEffect(() => {
      fetchQuote();
   }, []);

   return (
      <div className="grid-bg min-h-screen flex items-center justify-center p-6">
         {!quote && loading ? (
            <p className="text-sm text-neutral-500">Loading...</p>
         ) : (
            <QuoteCard
               quote={quote!}
               onRefresh={fetchQuote}
               isLoading={loading}
            />
         )}
      </div>
   );
}
