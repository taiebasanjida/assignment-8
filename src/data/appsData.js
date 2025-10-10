import app1 from "../assets/demo-app (1).webp";
import app2 from "../assets/demo-app (2).webp";
import app3 from "../assets/demo-app (3).webp";
import app4 from "../assets/demo-app (4).webp";
import app5 from "../assets/demo-app (5).webp";
import app6 from "../assets/demo-app (6).webp";
import app7 from "../assets/demo-app (1).webp";
import app8 from "../assets/demo-app (2).webp";
import app9 from "../assets/demo-app (3).webp";
import app10 from "../assets/demo-app (4).webp";
import app11 from "../assets/demo-app (6).webp";
import app12 from "../assets/demo-app (5).webp";




const appsData = [
  {
    image: app1,
    title: "NoteMaster",
    companyName: "SparkDev",
    id: 1,
    description: "A lightweight notes app with tags and cloud sync.",
    size: 24,
    reviews: 320,
    ratingAvg: 4.5,
    downloads: 45000,
    ratings: [
      { name: "1 star", count: 10 },
      { name: "2 star", count: 20 },
      { name: "3 star", count: 40 },
      { name: "4 star", count: 90 },
      { name: "5 star", count: 160 }
    ],
  },
  {
    image: app2,
    title: "FitTrack",
    companyName: "Wellness Inc",
    id: 2,
    description: "Track workouts, calories and progress.",
    size: 38,
    reviews: 1240,
    ratingAvg: 4.3,
    downloads: 125000,
    ratings: [
      { name: "1 star", count: 40 },
      { name: "2 star", count: 60 },
      { name: "3 star", count: 120 },
      { name: "4 star", count: 300 },
      { name: "5 star", count: 720 }
    ],
  },
  {
    image:app3,
    title: "PhotoFlow",
    companyName: "Pixelate",
    id: 3,
    description: "Quick edits, filters and collage maker.",
    size: 52,
    reviews: 540,
    ratingAvg: 4.6,
    downloads: 82000,
    ratings: [
      { name: "1 star", count: 8 },
      { name: "2 star", count: 15 },
      { name: "3 star", count: 50 },
      { name: "4 star", count: 120 },
      { name: "5 star", count: 347 }
    ],
  },
  {
    image: app4,
    title: "BudgetBuddy",
    companyName: "Finwise",
    id: 4,
    description: "Expense tracker with budget plans.",
    size: 18,
    reviews: 210,
    ratingAvg: 4.1,
    downloads: 41000,
    ratings: [
      { name: "1 star", count: 15 },
      { name: "2 star", count: 30 },
      { name: "3 star", count: 50 },
      { name: "4 star", count: 60 },
      { name: "5 star", count: 55 }
    ],
  },
  {
    image: app5,
    title: "LearnLang",
    companyName: "EduNext",
    id: 5,
    description: "Fun language lessons & speaking practice.",
    size: 72,
    reviews: 890,
    ratingAvg: 4.7,
    downloads: 210000,
    ratings: [
      { name: "1 star", count: 12 },
      { name: "2 star", count: 18 },
      { name: "3 star", count: 70 },
      { name: "4 star", count: 200 },
      { name: "5 star", count: 590 }
    ],
  },
  {
    image: app5,
    title: "WeatherNow",
    companyName: "SkyCast",
    id: 6,
    description: "Minute-by-minute weather & radar.",
    size: 28,
    reviews: 430,
    ratingAvg: 4.2,
    downloads: 98000,
    ratings: [
      { name: "1 star", count: 20 },
      { name: "2 star", count: 30 },
      { name: "3 star", count: 100 },
      { name: "4 star", count: 180 },
      { name: "5 star", count: 100 }
    ],
  },
  {
    image: app6,
    title: "TaskFlow",
    companyName: "Prodify",
    id: 7,
    description: "Kanban style tasks and reminders.",
    size: 26,
    reviews: 150,
    ratingAvg: 4.0,
    downloads: 37000,
    ratings: [
      { name: "1 star", count: 5 },
      { name: "2 star", count: 10 },
      { name: "3 star", count: 30 },
      { name: "4 star", count: 50 },
      { name: "5 star", count: 55 }
    ],
  },
  {
    image: app7,
    title: "PocketRecipes",
    companyName: "Cookly",
    id: 8,
    description: "Hungry? search recipes & save favorites.",
    size: 45,
    reviews: 610,
    ratingAvg: 4.4,
    downloads: 70000,
    ratings: [
      { name: "1 star", count: 12 },
      { name: "2 star", count: 22 },
      { name: "3 star", count: 60 },
      { name: "4 star", count: 160 },
      { name: "5 star", count: 356 }
    ],
  },
  {
    image: app8,
    title: "Mindful",
    companyName: "Calmly",
    id: 9,
    description: "Meditation & breathing exercises.",
    size: 31,
    reviews: 980,
    ratingAvg: 4.8,
    downloads: 340000,
    ratings: [
      { name: "1 star", count: 6 },
      { name: "2 star", count: 10 },
      { name: "3 star", count: 40 },
      { name: "4 star", count: 200 },
      { name: "5 star", count: 724 }
    ],
  },
  {
    image: app9,
    title: "LanguageCards",
    companyName: "Cardio",
    id: 10,
    description: "Flashcards for vocabulary learning.",
    size: 14,
    reviews: 120,
    ratingAvg: 3.9,
    downloads: 14000,
    ratings: [
      { name: "1 star", count: 10 },
      { name: "2 star", count: 20 },
      { name: "3 star", count: 40 },
      { name: "4 star", count: 30 },
      { name: "5 star", count: 20 }
    ],
  },
  {
    image: app10,
    title: "TravelMate",
    companyName: "Wander",
    id: 11,
    description: "Trip planner & offline maps.",
    size: 88,
    reviews: 440,
    ratingAvg: 4.3,
    downloads: 95000,
    ratings: [
      { name: "1 star", count: 25 },
      { name: "2 star", count: 35 },
      { name: "3 star", count: 90 },
      { name: "4 star", count: 150 },
      { name: "5 star", count: 140 }
    ],
  },
  {
    image: app11,
    title: "SoundScape",
    companyName: "AudioLab",
    id: 12,
    description: "Ambient sounds to focus and relax.",
    size: 34,
    reviews: 210,
    ratingAvg: 4.2,
    downloads: 56000,
    ratings: [
      { name: "1 star", count: 6 },
      { name: "2 star", count: 14 },
      { name: "3 star", count: 40 },
      { name: "4 star", count: 80 },
      { name: "5 star", count: 70 }
    ],
  }
  
];

export default appsData;
