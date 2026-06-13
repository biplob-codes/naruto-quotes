import express from 'express';
import type { Request, Response } from 'express';
import { prisma } from './lib/prisma';
const app = express();
app.get('/', (req: Request, res: Response) => {
   res.send('Hello World!');
});
app.get('/api/quote', async (req: Request, res: Response) => {
   const count = await prisma.quote.count();
   const random = Math.floor(Math.random() * count);

   const quote = await prisma.quote.findFirst({
      skip: random,
      take: 1,
      include: { author: true },
   });
   res.json(quote);
});

const port = process.env.PORT || '3000';
app.listen(port, () => {
   console.log(`Server is running on  http://localhost:${port}`);
});
