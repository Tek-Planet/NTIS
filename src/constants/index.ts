import {
  ai,
  aiicon,
  analyze,
  blog,
  bond,
  brain,
  chemistry,
  dataicon,
  knowledgeicon,
  lab,
  laptop,
  office,
  solar,
  spreadicon,
  stars,
  supporticon,
  virus,
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
  { id: "aboutus/implementation", title: "Implementation" },
  { id: "aboutus/programdetails", title: "Program Details" },
  { id: "aboutus/services", title: "Main Services" },
  { id: "aboutus/gallery", title: "Gallery" },
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

export const vision = [
  {
    id: "1",
    title: "User Group",
    content: [
      {
        id: "1",
        title:
          "Researcher + General user + Ministry and agency (specialized institution) officer",
      },
    ],
  },

  {
    id: "2",
    title: "Key Element",
    content: [
      {
        id: "1",
        title: "Opening & Sharing",
      },
      {
        id: "2",
        title: "Cooperation",
      },
      {
        id: "3",
        title: "Intelligent Advancement",
      },
      {
        id: "4",
        title: "Spread of performance utilization",
      },
      {
        id: "5",
        title: "Link",
      },
    ],
  },

  {
    id: "3",
    title: "Innovative Growth Support",
    content: [
      {
        id: "1",
        title: "Intelligent cooperative ecosystem",
      },

      {
        id: "2",
        title: "Acceleration of innovation",
      },

      {
        id: "3",
        title: "Acceleration system of virtuous cycle",
      },
    ],
  },
  {
    id: "4",
    title: "Goal",
    content: [
      {
        id: "1",
        title:
          "Providing innovative growth engines through sharing scientific data. knowledge and experiences and cooperation",
      },
    ],
  },
];

export const strategy = [
  {
    id: "1",
    title:
      "Advancement of intelligent NTIS through opening, sharing, and collaboration",
    content: [
      {
        id: "1",
        title: "Strengthening demand-responsive data analysis services",
      },

      {
        id: "2",
        title:
          "Establishment of knowledge sharing services in which users participate",
      },

      {
        id: "3",
        title:
          "Strengthening public experience services for the spread of national R&D achievements",
      },

      {
        id: "4",
        title: "Easy and convenient advancement of intelligent NTIS",
      },
    ],
  },

  {
    id: "2",
    title:
      "Advancement of intelligent NTIS through opening, sharing, and collaboration",
    content: [
      {
        id: "1",
        title: "Strengthening national R&D decision-making support",
      },
    ],
  },

  {
    id: "3",
    title:
      "Advancement of intelligent NTIS through opening, sharing, and collaboration",
    content: [
      {
        id: "1",
        title:
          "Establishment of NTIS information resources through cloud conversion",
      },
      {
        id: "2",
        title: "Building a Data Lake for Intelligent Data Analytics",
      },
    ],
  },
];

export const implementation: GeneralListModel[] = [
  {
    id: "1",
    title:
      "Open science-based establishment of an intelligent cooperation system",
    content:
      "It contributes to digital transformation by sharing secondary information and machine learning data that combines national R&D information, scientific information, external data (overseas R&D, regional R&D, trends, top journal/conference information by field, etc.).It contributes to digital transformation by sharing machine learning data. It expands the venue for user participation in various ways and provides a knowledge-sharing cooperation system so that the public can actually experience the results of national R&D.",
  },
  {
    id: "2",
    img: ai,
  },
  {
    id: "3",
    img: laptop,
  },
  {
    id: "4",
    title: "Enhancement of a demand-responsive data analysis services",
    content:
      "It provides customized analysis information according to the analysis demand by user (researchers, ministries, general users, etc.). Provide customized analysis information. It lays the foundation for analysis automation, such as building a Data Lake** platform for integrated data analysis with Data Warehouse*, which is the basis of the service. It supports easier use of analysis information and raw data by major issues. * A high quality database with integrated data to efficiently support the information processing functions required for decision-making of the users. ** A system that effectively collects, manages, and analyzes large-scale data of various types.",
  },
];

export const mainServices: GeneralListModel[] = [
  {
    id: "1",
    title: "Enhancement of data analysis services",
    img: dataicon,
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa.",
  },
  {
    id: "2",
    title: "User-centered intelligence advancement",
    img: aiicon,
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa.",
  },
  {
    id: "3",
    title: "Knowledge sharing collaborating system",
    img: knowledgeicon,
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa.",
  },
  {
    id: "4",
    title: "Spread of national R&D results",
    img: spreadicon,
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa.",
  },
  {
    id: "5",
    title: "Advancement of national R&D cycle support",
    img: supporticon,
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa.",
  },
];

export const gallery: GeneralListModel[] = [
  {
    id: "1",
    img: stars,

    subdata: [
      { id: "1", img: bond },
      { id: "1", img: virus },
      { id: "1", img: lab },
      { id: "1", img: brain },
    ],
  },
  {
    id: "2",
    img: ai,
  },
  {
    id: "3",
    img: laptop,
  },
  {
    id: "4",
    img: solar,
  },
];
