const res = await fetch('http://localhost:3000/');
process.exit(res.ok ? 0 : 1);
