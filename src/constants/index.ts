import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  ai,
  aiicon,
  analyze,
  chemistry,
  dataicon,
  knowledgeicon,
  laptop,
  location,
  mail,
  office,
  phone,
  spreadicon,
  supporticon,
} from "../assets";
import { storage } from "../firebase";
import { GeneralListModel, Menus } from "../types";

export const dashBaordUrl = "https://83.229.69.76:91/webLogin.aspx";

export const adminRootPath = "app";
export const navLinks: Menus[] = [
  {
    id: "home",
    title: "Home",
  },

  {
    id: "aboutus",
    title: "About us",
  },

  {
    id: "cooperation",
    title: "Resources",
    subNav: [
      {
        id: "cooperation",
        title: "Cooperation",
      },
      {
        id: "projects",
        title: "projects",
      },
      {
        id: "policies",
        title: "Policies",
      },
      {
        id: "guidelines",
        title: "Standard & Guidelines",
      },
      {
        id: "framework",
        title: "Frameworks",
      },
    ],
  },

  {
    id: dashBaordUrl,
    title: "Dashboard",
  },

  // {
  //   id: "statistics",
  //   title: "Statistics",
  // },

  {
    id: "technologies",
    title: "Technology Innovations",
  },

  {
    id: "contactus",
    title: "Contact us",
  },
];
export const adminNavLinks: Menus[] = [
  {
    id: adminRootPath + "/",
    title: "Home Page",
  },

  {
    id: adminRootPath + "/news",
    title: "news",
  },
  {
    id: adminRootPath + "/projects",
    title: "projects",
  },

  {
    id: adminRootPath + "/gallery",
    title: "Gallery",
  },

  {
    id: adminRootPath + "/technology",
    title: "Technology",
  },

  {
    id: adminRootPath + "/messages",
    title: "Messages",
  },
];

export const services: GeneralListModel[] = [
  {
    id: "feedback-1",
    content: `Research information is the lifeblood of progress and understanding. It encompasses the collective efforts of inquisitive minds, driven by the pursuit of knowledge and the desire to unravel the mysteries of our world. Whether exploring the cosmos, delving into the intricacies of biology, or analyzing socioeconomic trends, research information provides the foundation upon which innovation and discovery thrive.

    This vast tapestry of data, studies, and findings empowers us to make informed decisions, shape policies, and address global challenges. It bridges disciplines, connecting experts and enthusiasts across borders, cultures, and generations. Research information is a beacon of truth in an age of uncertainty, a guiding light that illuminates the path toward progress.
    
    In today's interconnected world, access to research information is paramount. It fuels innovation, drives solutions to complex problems, and fosters a deeper understanding of our universe and ourselves. It is a testament to human curiosity and the relentless pursuit of knowledge, offering endless possibilities for a better future.`,
    title: "Research Information",
    img: office,
  },
  {
    id: "feedback-2",
    title: "Strategic planning",
    img: chemistry,
    content: `Strategic planning is the compass that guides organizations toward their desired future. It's a disciplined process that involves setting goals, defining strategies, and making informed decisions to achieve long-term success. In a rapidly changing world, strategic planning is essential for businesses, governments, and non-profit organizations alike.

    This process begins with a thorough analysis of an organization's strengths, weaknesses, opportunities, and threats. It involves a deep understanding of market dynamics, competition, and trends. With this knowledge, strategic planners formulate strategies that leverage strengths, mitigate weaknesses, and capitalize on opportunities.
    
    Strategic planning isn't just about setting a course; it's about monitoring progress, adapting to changing circumstances, and remaining agile. It's a dynamic and iterative process that ensures an organization stays relevant and competitive.
    
    Successful strategic planning aligns all levels of an organization with a common purpose, motivating teams and stakeholders to work cohesively toward a shared vision. It's a roadmap to success, providing direction and focus in a constantly evolving landscape.`,
  },
  {
    id: "feedback-3",
    title: "Data Analysis",
    img: analyze,
    content: `Data analysis is the systematic process of inspecting, cleaning, transforming, and interpreting data to discover meaningful patterns, insights, and trends. In today's data-driven landscape, it is a fundamental tool across various domains, including business, science, healthcare, and technology.

    At its core, data analysis involves collecting vast datasets and applying statistical and computational techniques to extract valuable information. It enables organizations to make data-informed decisions, optimize operations, and gain a competitive edge.
    
    Data analysis is not just about historical assessment; it also aids in predictive modeling, helping anticipate future developments and uncertainties. With the rise of big data and advanced analytics, it has become increasingly sophisticated, leveraging machine learning and artificial intelligence to uncover hidden insights.
    
    In essence, data analysis is the key to unlocking the potential within data. It empowers us to uncover valuable insights, drive innovation, and solve complex problems, ultimately guiding our decision-making processes and shaping our understanding of the world.`,
  },
];

export const aboutsMenu: Menus[] = [
  { id: "aboutus/NTIS", title: "What is STI MIS?" },
  { id: "aboutus/vision", title: "Vision & Mission" },
  { id: "aboutus/implementation", title: "Implementation" },
  { id: "aboutus/programdetails", title: "Program Details" },
  { id: "aboutus/services", title: "Main Services" },
  { id: "aboutus/gallery", title: "Gallery" },
  { id: "aboutus/news", title: "News" },
];

export const technologyMenu: Menus[] = [
  { id: "technologies/agriculture", title: "Agriculture and food processing" },
  {
    id: "technologies/vision",
    title: "Environment, waste management and circular economy",
  },
  { id: "technologies/implementation", title: "Manufacturing" },
  {
    id: "technologies/programdetails",
    title: "Information and communication technology (ICT)",
  },
  { id: "technologies/services", title: "Renewable energy" },
  { id: "technologies/gallery", title: "Health and Pharmaceuticals" },
  { id: "technologies/news", title: "Mining & Mineral Processing" },
  { id: "technologies/news", title: "Oil and Gas" },
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
    id: "https://statsghana.gov.gh",
    title: "GSS",
    content: "Ghana Statistical Service",
  },
  {
    id: "https://gtec.edu.gh",
    title: "GTEC",
    content: "Ghana Tertiary Education Commission",
  },
  {
    id: "https://unevoc.unesco.org/home/Explore+the+UNEVOC+Network/centre=2988",
    title: "CTVET",
    content: "Council for Technical and Vocational Education and Training",
  },
  {
    id: "https://rgd.gov.gh/Industrial%20Property.html",
    title: "RGD",
    content:
      "Registrar Generals Department. GIPO - Ghana Intellectual Property Office",
  },
  {
    id: "https://www.venturecapitalghana.com.gh",
    title: "VCTF",
    content: "Venture Capital Trust Fund",
  },
  {
    id: "https://cordis.europa.eu/project/id/957339",
    title: "Overseas Institutes",
    content: "EU (CORDIS), Japan (KAKEN)",
  },
  {
    id: "https://www.gepaghana.org",
    title: "GEPA",
    content: "Ghana Export Promotion Authority",
  },
  {
    id: "https://www.cagd.gov.gh",
    title: "CAGD - ",
    content: "Controller and Accountant General Department",
  },
  {
    id: "https://mofep.gov.gh",
    title: "MoF",
    content: "Ministry of Finance",
  },
  {
    id: "https://agighana.org/ghana-industrial-summit-exhibition-2023/",
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
      "Advancement of intelligent STI MIS through opening, sharing, and collaboration",
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
        title: "Easy and convenient advancement of intelligent STI MIS",
      },
    ],
  },

  {
    id: "2",
    title:
      "Advancement of intelligent STI MIS through opening, sharing, and collaboration",
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
      "Advancement of intelligent STI MIS through opening, sharing, and collaboration",
    content: [
      {
        id: "1",
        title:
          "Establishment of STI MIS information resources through cloud conversion",
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

// open any given link in new tab
export const handleOpenLinkInNewTab = (urlToOpen: string) => {
  window.open(urlToOpen, "_blank");
};

// upload image
export function isObjectEmpty(obj: any) {
  if (!obj || Object.keys(obj).length === 0) return true;
  else return false;
}

export const uploadImage = async (image: any, imageName: string) => {
  try {
    // if upload file if any
    const storageRef = ref(storage, `/files/${imageName}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, image);

    const snapshot = await uploadTask;

    // Get the download URL after the upload is complete
    const imageurl = await getDownloadURL(snapshot.ref);

    return imageurl;
  } catch (e) {
    console.error("Error uploading: ", e);

    throw e;
  }
};

// delete image from storag
export const deleteImage = async (imageUrl: string) => {
  try {
    const path = await getPathName(imageUrl);

    if (!path) {
      return { message: "Not valid path" };
    }
    // delete the image if the path is valide
    const desertRef = ref(storage, path);

    // Delete the file
    await deleteObject(desertRef);
    return { message: "success" };
  } catch (error) {
    console.error("Error deleting image: ", error);

    return { message: "error" };
  }
};

//get image path from the naem
export const getPathName = (imageUrl: string) => {
  const url = new URL(imageUrl);
  const path = decodeURIComponent(url.pathname);

  // Split the path by "o/" and take the second part
  const parts = path.split("o/");
  if (parts.length === 2) {
    const actualPath = parts[1];

    return actualPath;
  } else {
    console.error("Invalid URL format");
    return null;
  }
};

// constant info
export const contactInfo: GeneralListModel[] = [
  {
    id: "1",
    title: "Location",
    content: "Qasimia, Street No 2 , 3rd floor",
    img: location,
  },
  {
    id: "2",
    title: "Email",
    content: "info@stimis.com",
    img: mail,
  },
  {
    id: "3",
    title: "Phone",
    content: "+9792929292",
    img: phone,
  },
];

export const externalLinks: GeneralListModel[] = [
  {
    id: "https://mesti.gov.gh",
    title: "MESTI",
    img: "https://mesti.gov.gh/wp-content/uploads/2020/02/cropped-cropped-cropped-MESTI-logo-3-300x300.png",
  },

  {
    id: "https://mesti.gov.gh/wp-content/uploads/2022/08/CSIR.jpg",
    title: "CSIR",
    img: "https://mesti.gov.gh/wp-content/uploads/2022/08/CSIR.jpg",
  },

  {
    id: "https://mesti.gov.gh/wp-content/uploads/2022/08/EPA.jpg",
    title: "EPA",
    img: "https://mesti.gov.gh/wp-content/uploads/2022/08/EPA.jpg",
  },

  {
    id: "https://mesti.gov.gh/wp-content/uploads/2022/08/GAE.jpg",
    title: "GAE",
    img: "https://mesti.gov.gh/wp-content/uploads/2022/08/GAE.jpg",
  },

  {
    id: "https://mesti.gov.gh/wp-content/uploads/2022/08/NRA.jpg",
    title: "NRA",
    img: "https://mesti.gov.gh/wp-content/uploads/2022/08/NRA.jpg",
  },

  {
    id: "https://mesti.gov.gh/wp-content/uploads/2022/08/NBA.jpg",
    title: "NBA",
    img: "https://mesti.gov.gh/wp-content/uploads/2022/08/NBA.jpg",
  },
];
