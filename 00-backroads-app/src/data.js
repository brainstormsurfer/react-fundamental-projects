import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    icon: "fas fa-wallet fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    title: "endless hiking",
    icon: "fas fa-tree fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    title: "amazing comfort",
    icon: "fas fa-socks fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const toursData = [
  {
    id: 1,
    imagePath: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: "6 days",
    cost: "from $2100",
  },
  {
    id: 2,
    imagePath: tour2,
    date: "october 1th, 2024",
    title: "Best of java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: "11 days",
    cost: "from $1400",
  },
  {
    id: 3,
    imagePath: tour3,
    date: "september 15th, 2024",
    title: "Explore hong kong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: "8 days",
    cost: "from $5000",
  },
  {
    id: 4,
    imagePath: tour4,
    date: "december 5th, 2024",
    title: "Kenya highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: "20 days",
    cost: "from $3300",
  },
  {
    id: 5,
    imagePath: tour5,
    date: "march 3rd, 2024",
    title: "Namibia safari",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "namibia",
    duration: "9 days",
    cost: "from $7000",
  },
  {
    id: 6,
    imagePath: tour6,
    date: "september 15th, 2024",
    title: "the spirit of india",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: "21 days",
    cost: "from $8500",
  },
];
