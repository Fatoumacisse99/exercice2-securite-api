import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

const app = express();
const port = 3018;

app.use(helmet());

// Limite les requêtes à 100 toutes les 15 minutes
const limiter = rateLimit({
  windowMs: 1* 60 * 1000, 
  max: 3,
  message: 'veuillez réessayer après 1 minutes.',
});


app.use(limiter);
app.use(cors({
  origin: 'http://example.com', 
}));

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello world' });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
