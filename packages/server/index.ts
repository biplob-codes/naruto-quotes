import express from 'express';
import type { Request, Response } from 'express';
const app = express();
app.get('/', (req: Request, res: Response) => {
   res.send('Hello World!!!');
});
app.get('/api/hello', (req: Request, res: Response) => {
   res.json({ message: 'Hello from the Server!' });
});

const port = process.env.PORT || '3000';
app.listen(port, () => {
   console.log(`Server is running on  http://localhost:${port}`);
});
