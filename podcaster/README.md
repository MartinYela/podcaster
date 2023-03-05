## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result

## Deploy on server 

```bash
docker run build
docker build -t podcaster .
docker run -it -p 80:80 --name podcaster podcaster
```

Open [http://localhost](http://localhost) with your browser to see the result