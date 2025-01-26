import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Movie App",
    description: "A Mobile app for movie create using themoviedb",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Flutter", "Android", "Bloc", "REST API"],
    githubUrl: "https://gitlab.com/avijitbera775/movieapp",
    liveUrl: "",
    category: "mobile"
  },
  {
    title: "Wallpaper App",
    description: "A mobile app for wallpapers download and set wallpaper.",
    image: "https://plus.unsplash.com/premium_photo-1721091923768-413bbbd1b2bd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Flutter", "Provider", "REST API"],
    githubUrl: "https://gitlab.com/avijitbera775/wallpaperapp.git",
    liveUrl: "",
    category: "mobile"
  },
  {
    title: "Movie Downloader",
    description: "A Movie Downloader using Next.Js and TypeScript.",
    image: "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "TypeScript", "REST API", "SEO"],
    githubUrl: "https://gitlab.com/avijitbera775/nextmovie.git",
    liveUrl: "",
    category: "frontend"
  },
  {
    title: "Android app downloader",
    description: "A Android app downloader using Next.Js and Typescript.",
    image: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.Js", "Typescript", "SEO", "REST API"],
    githubUrl: "https://gitlab.com/avijitbera775/androidweb.git",
    liveUrl: "",
    category: "frontend"
  },
  {
    title: "Video to mp3 Converter",
    description: "Scalable microservices architecture for video to mp3 conversion with kubernetes.",
    image: "https://images.unsplash.com/photo-1607608879766-56659d03ea0a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "Docker", "Kubernetes", "MongoDB", "MySQL", "RabitMQ"],
    githubUrl: "https://github.com/Avijitbera/TuneTapper.git",
    liveUrl: "",
    category: "backend"
  },
  {
    title: "Wallpaper API",
    description: "A REST API for wallpapers upload and management.",
    image: "https://images.unsplash.com/photo-1534521989089-2084a311b5be?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Javascript", "Firebase", "Node.JS"],
    githubUrl: "https://gitlab.com/avijitbera775/wallpaper_backend",
    liveUrl: "",
    category: "backend"
  },
  {
    title: "Downloader Server",
    description: "A Node.js server for downloading apk and movies.",
    image: "https://plus.unsplash.com/premium_photo-1683697495253-8037ae992c43?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Javascript", "Firebase", "Node.JS"],
    githubUrl: "https://gitlab.com/avijitbera775/movieservier",
    liveUrl: "",
    category: "backend"
  },
  {
    title: "Automated LinkedIn Connections",
    description: "A Python scritp for automating LinkedIn connections.",
    image: "https://images.unsplash.com/photo-1592093506632-92ef342e2591?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "Selenium", "Automation"],
    githubUrl: "https://github.com/Avijitbera/python_linkedin",
    liveUrl: "",
    category: "other"
  },
  {
    title: "Mongrid",
    description: "Mongrid is a npm package. It is a fully featured MongoDB ORM in typescript.",
    image: "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["MongoDB", "Typescript", "Node.Js", "ORM", "Jest", "Open Source"],
    githubUrl: "https://github.com/Avijitbera/mongrid",
    liveUrl: "",
    category: "other"
  },
  {
    title: "EdgeORM",
    description: "EdgeORM is a npm package. It is a fully featured Neo4j ORM in typescript.",
    image: "https://plus.unsplash.com/premium_vector-1709212299200-262160b91eac?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Neo4j", "Typescript", "Node.Js", "ORM", "Open Source"],
    githubUrl: "https://github.com/Avijitbera/edgeorm",
    liveUrl: "",
    category: "other"
  },
  {
    title: "StackBuilder",
    description: "StackBuilder is a open source static and dynamic website builder project.",
    image: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: [ "Typescript", "Node.Js", "Open Source", "PostgreSQL", "React.Js", "Tailwindcss"],
    githubUrl: "https://github.com/Avijitbera/stackbuilder.git",
    liveUrl: "",
    category: "frontend"
  },
  {
    title: "Whoppl",
    description: "Whoppl is a studio booking app.",
    image: "https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: [ "Flutter", "Dart", "Node.Js", "PostgreSQL", "Firebase"],
    githubUrl: "",
    liveUrl: "https://play.google.com/store/apps/details?id=com.whoppl.studio",
    category: "mobile"
  },
  {
    title: "hiiCampus",
    description: "Whoppl is a collage event management app.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: [ "Flutter", "Dart","Bloc", "Node.Js", "Firebase", "Typescript", "MongoDB"],
    githubUrl: "",
    liveUrl: "https://play.google.com/store/apps/details?id=com.hiicampus.app",
    category: "mobile"
  },
  {
    title: "Swasthi Health+ Tracker",
    description: "Swasthi is a Comprehensive Health & Wellness app.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: [ "Flutter", "Dart","Provider", "Node.Js", "Firebase", "Typescript", "PostgreSQL"],
    githubUrl: "",
    liveUrl: "https://play.google.com/store/apps/details?id=fit.swasthi.app",
    category: "mobile"
  },
  
];