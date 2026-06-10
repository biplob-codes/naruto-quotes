import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { RefreshCw } from 'lucide-react';

interface Quote {
   id: number;
   title: string;
   author: {
      name: string;
      image: string;
   };
}

interface QuoteCardProps {
   quote: Quote;
   onRefresh: () => void;
   isLoading?: boolean;
}

export function QuoteCard({ quote, onRefresh, isLoading }: QuoteCardProps) {
   return (
      <div className="w-full max-w-xl">
         <p className="text-xs tracking-[0.18em] uppercase text-center mb-6 text-orange-500">
            Naruto · Words of the Shinobi
         </p>

         <div className="rounded-sm p-8 bg-[#1a1a24] border border-[#2e2e3e]">
            <div className="w-10 h-1 rounded-full mb-6 bg-linear-to-r from-orange-500 to-amber-400" />

            <p className="text-lg leading-relaxed mb-8 text-[#e8e6e0] font-normal">
               {quote.title}
            </p>

            <div className="flex items-center justify-between pt-5 border-t border-[#2e2e3e]">
               <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 ring-2 ring-orange-500/25">
                     <AvatarImage
                        src={quote.author.image}
                        alt={quote.author.name}
                     />
                     <AvatarFallback className="text-xs font-semibold bg-[#2e2e3e] text-orange-500">
                        {quote.author.name
                           .split(' ')
                           .map((n) => n[0])
                           .join('')}
                     </AvatarFallback>
                  </Avatar>
                  <div>
                     <p className="text-sm font-semibold text-[#f0ede8]">
                        {quote.author.name}
                     </p>
                     <p className="text-xs text-neutral-600">Konohagakure</p>
                  </div>
               </div>

               <Button
                  variant="ghost"
                  onClick={onRefresh}
                  disabled={isLoading}
                  className="gap-2 text-xs cursor-pointer text-orange-500 hover:text-orange-400 hover:bg-transparent"
               >
                  <RefreshCw
                     className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`}
                  />
                  New quote
               </Button>
            </div>
         </div>

         <p className="text-center text-sm mt-4 text-neutral-600">
            From the hidden leaf, to your screen.
         </p>
      </div>
   );
}
