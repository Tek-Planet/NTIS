import {
  ai,
  aiicon,
  analyze,
  award,
  blog,
  bond,
  brain,
  chemistry,
  dataicon,
  knowledgeicon,
  lab,
  laptop,
  meeting,
  moseum,
  office,
  present,
  selfie,
  solar,
  speaker,
  spreadicon,
  stadium,
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

  {
    id: "contactus",
    title: "Contact Us",
  },
];

export const feedback: GeneralListModel[] = [
  {
    id: "feedback-1",
    content: "Research Information",
    title: "Research Information",
    img: office,
  },
  {
    id: "feedback-2",
    title: "Strategic planning",
    img: chemistry,
  },
  {
    id: "feedback-3",
    title: "Data Analysis",
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
    img: lab,
  },

  {
    id: "feedback-4",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus.",
    img: bond,
  },

  {
    id: "feedback-5",
    content:
      "Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis varius sodales at mauris et. Ipsum vel senectus mauris augue massa. Sapien pulvinar molestie orci senectus.",
    img: solar,
  },
];

export const projects: GeneralListModel[] = [
  {
    id: "1",
    title: "The K-Innovation Partnership Project",
    createdAt: "",
    img: "https://picsum.photos/200",
    content: `In 2021, the Government of Ghana through the Ministry of Environment, Science, Technology and Innovation (MESTI) and the Science and Technology and Policy Institute (STEPI) of the Republic of Korea launched the K-Innovation Partnership Program between Ghana and Korea, to support the development of a robust and economically viable technological innovation system in Ghana, through the effective operationalisation of the Ghana Innovation and Research Commercialisation Centre (GIRC-Center).
      Through this partnership: 
      
        •	A detailed analysis of Technological Innovation Support Programs (TISPs) in Ghana and Sharing the Korean Experiences.
        •	A masterplan for the establishment of the GIRC Centre / GIA has been developed with investment plan.
        •	Capacity Building Workshops has been held. 
        •	A study tour and capacity building has been held for a Ghanaian delegation in Korea.`,
  },

  {
    id: "2",
    title: "The Ghana Digital Innovation Week (GDIW)",
    createdAt: "",
    img: "https://picsum.photos/200",
    content: `Ghana Digital Innovation Week (GDIW) is a nationwide series of events, showcasing and celebrating milestones in Ghana’s Digital Innovation Ecosystem. GDIW provides a platform for various actors to learn, share ideas and create connections to enhance the progress of the landscape.

      The week is co-created and co-owned by actors from private sectors, academia, policymakers, Development Partners, and Civil Society Organizations.
      
      It is much more than a festival; it is an unforgettable and impactful lifetime experience for the 
      innovators and stakeholders who take part.
      
      The intention behind it is as simple as fostering the growth of technology and innovation that have been growing rapidly in Ghana. Workshops, competitions, and company visits are some of the activities involved during the event. With numerous event options, there’s something for everyone!
      
      The Ghana Digital Innovation Week (GDIW) is borne out of a Trilateral Cooperation of Ghana, Germany, and Israel through MESTI, German Development Organisation (GIZ) and Embassy of Israel (MASHAV) and in its 3rd year of celebration`,
  },

  {
    id: "3",
    title: "STRENGTHENING STI SYSTEMS FOR SUSTAINABLE DEVELOPMENT IN AFRICA",
    createdAt: "",
    img: "https://picsum.photos/200",
    content: `Strengthening Science, Technology and Innovation (STI) is an initiative within UNESCO’s global framework for monitoring, policy support and advocacy for the “UNESCO Recommendation on Science and Scientific Researchers” (November 2017). Phase I: 2020-2022. Phase II: 2022-2025. The 2017 RS|SR defines both the values on the basis of which science can contribute to sustainable development in all its dimensions, and the institutional organization that can enable science institutions in each UNESCO Member State to perform their required role. Responding to the requirements of the 2017 RS|SR is directly and operationally relevant to SDG achievement at national level in the developing countries. The initiative thus includes a vital component of advocacy, conducted Africa-wide, in direct synergy with the specific national interventions in a necessarily limited number of countries.`,
  },

  {
    id: "4",
    title: "THE GHANA UK STI STRATEGY",
    createdAt: "",
    img: "https://picsum.photos/200",
    content: `The UK and Ghana have a history of successful alliances and partnerships that have strengthened the capability of both nations to deliver impactful outputs in ST&I. As the UK renews its commitments to advancing ST&I, both countries envision a sustainable partnership that is founded on mutual respect, transparency, trust, equity, and shared knowledge. Ghana shares the UK’s conviction that these fields are imperative for the success of our socio-economic agendas and to support the health, wellbeing, wealth, prosperity, and security of our respective citizenry. This strategy puts forward ambitions for joint efforts in the ST&I space and sets out how these could be achieved using HMG’s own-collaborate-access model to achieve our respective developmental goals.  `,
  },
];

export const aboutsMenu: Menus[] = [
  { id: "aboutus/NTIS", title: "What is NTIS?" },
  { id: "aboutus/vision", title: "Vision & Mission" },
  { id: "aboutus/implementation", title: "Implementation" },
  { id: "aboutus/programdetails", title: "Program Details" },
  { id: "aboutus/services", title: "Main Services" },
  { id: "aboutus/gallery", title: "Gallery" },
  { id: "aboutus/news", title: "News" },
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
    title: "GSS",
    content: "Ghana Statistical Service",
  },
  {
    id: "2",
    title: "GTEC",
    content: "Ghana Tertiary Education Commission",
  },
  {
    id: "3",
    title: "CTVET",
    content: "Council for Technical and Vocational Education and Training",
  },
  {
    id: "4",
    title: "RGD",
    content:
      "Registrar Generals Department. GIPO - Ghana Intellectual Property Office",
  },
  {
    id: "5",
    title: "VCTF",
    content: "Venture Capital Trust Fund",
  },
  {
    id: "6",
    title: "Overseas Institutes",
    content: "EU (CORDIS), Japan (KAKEN)",
  },
  {
    id: "7",
    title: "GEPA",
    content: "Ghana Export Promotion Authority",
  },
  {
    id: "8",
    title: "CAGD - ",
    content: "Controller and Accountant General Department",
  },
  {
    id: "8",
    title: "MoF",
    content: "Ministry of Finance",
  },
  {
    id: "8",
    title: "AGI",
    content: "Association of Ghana Industries",
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
    img: speaker,
  },
  {
    id: "2",
    img: stadium,
  },
  {
    id: "3",
    img: selfie,
  },
  {
    id: "4",
    img: award,
  },
  {
    id: "5",
    img: meeting,
  },
  {
    id: "6",
    img: present,
  },
  {
    id: "7",
    img: moseum,
  },
];

export const news: GeneralListModel[] = [
  {
    id: "1",
    img: moseum,
    title: "Lorem ipsum dolor sit amet consectetur.",
    content: "It contributes to digital transformation by sharing secondary",
  },

  {
    id: "2",
    img: meeting,
    title: "Lorem ipsum dolor sit amet consectetur.",
    content:
      "It contributes to digital trans by sharing secondary It contributes to digital trans by sharing secondary  It contributes to digital trans by sharing secondary",
  },

  {
    id: "3",
    img: present,
    title: "Lorem ipsum dolor sit amet consectetur.",
    content: "It contributes to digital transformation by sharing secondary",
  },

  {
    id: "4",
    img: selfie,
    title: "Lorem ipsum dolor sit amet consectetur.",
    content: "It contributes to digital transformation by sharing secondary",
  },
];
