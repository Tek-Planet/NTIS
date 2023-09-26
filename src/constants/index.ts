import {
  aiicon,
  analyze,
  blog,
  chemistry,
  dataicon,
  knowledgeicon,
  office,
  spreadicon,
  supporticon,
} from "../assets";
import { GeneralListModel, Menus } from "../types";

export const navLinks: Menus[] = [
  {
    id: "home",
    title: "Homepage",
  },

  {
    id: "cooperation",
    title: "cooperation",
  },

  {
    id: "statistics",
    title: "statistics",
  },

  {
    id: "aboutus",
    title: "About Us",
  },
];

export const feedback: GeneralListModel[] = [
  {
    id: "feedback-1",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus.",

    img: office,
  },
  {
    id: "feedback-2",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus.",

    img: chemistry,
  },
  {
    id: "feedback-3",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus.",
    img: analyze,
  },
];

export const lastest: GeneralListModel[] = [
  {
    id: "feedback-1",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus.",

    img: blog,
  },
  {
    id: "feedback-2",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus.",

    img: blog,
  },
  {
    id: "feedback-3",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus.",
    img: analyze,
  },
];

export const projects: GeneralListModel[] = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet",
    createdAt: "20 Sep,2023",
    img: "https://picsum.photos/200",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus. Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus. Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus.",
  },

  {
    id: "2",
    title: "Lorem ipsum dolor sit amet",
    createdAt: "20 Sep,2023",
    img: "https://picsum.photos/200",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus. Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus. Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus.",
  },

  {
    id: "3",
    title: "Lorem ipsum dolor sit amet",
    createdAt: "20 Sep,2023",
    img: "https://picsum.photos/200",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus. Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus. Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus.",
  },
];

export const aboutsMenu: Menus[] = [
  { id: "aboutus/NTIS", title: "What is NTIS?" },
  { id: "aboutus/vision", title: "Vision & Mission" },
  { id: "3", title: "Implementation" },
  { id: "4", title: "Program Details" },
  { id: "5", title: "Main Services" },
  { id: "6", title: "Gallery" },
  { id: "7", title: "News" },
];

export const NTISList: Menus[] = [
  { id: "1", title: "Enhancement of data analysis services", img: dataicon },
  { id: "2", title: "User-centered intelligence advancement", img: aiicon },
  {
    id: "3",
    title: "Knowledge sharing collaborating system",
    img: knowledgeicon,
  },
  { id: "4", title: "Spread of national R&D results", img: spreadicon },
  {
    id: "5",
    title: "Advancement of national R&D cycle support",
    img: supporticon,
  },
];

export const infoPartners: GeneralListModel[] = [
  {
    id: "1",
    title: "Representative research management institutes",
    content: "18 relevant ministers and institutes",
  },
  {
    id: "2",
    title: "Project management institutes",
    content: "",
  },
  {
    id: "3",
    title: "Research & Development outcome management institutes",
    content: "",
  },
  {
    id: "4",
    title: "National Research Council of S&T",
    content: "Government funded research instutues",
  },
  {
    id: "5",
    title: "Open Science",
    content: "ScienceON, EDISON, DataON",
  },
  {
    id: "6",
    title: "Overseas Institutes",
    content: "EU (CORDIS), Japan (KAKEN)",
  },
  {
    id: "7",
    title: "Integrated Research Support System (IRIS)",
    content: "PMS, NRI",
  },
  {
    id: "8",
    title: "Regional R&D information system",
    content: "",
  },
];
