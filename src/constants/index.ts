import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  ai,
  aiicon,
  analyze,
  award,
  blog,
  bond,
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
  supporticon,
} from "../assets";
import { storage, db } from "../firebase";
import { GeneralListModel, Menus, NewModel } from "../types";

export const adminRootPath = "app";
export const navLinks: Menus[] = [
  {
    id: "home",
    title: "Homepage",
  },

  {
    id: "cooperation",
    title: "Cooperation",
  },

  {
    id: "statistics",
    title: "Statistics",
  },

  {
    id: "projects",
    title: "projects",
  },

  {
    id: "aboutus",
    title: "About us",
  },

  {
    id: "technologies",
    title: "Technology Areas",
  },

  {
    id: "contactus",
    title: "Contact us",
  },
];
export const adminNavLinks: Menus[] = [
  {
    id: adminRootPath + "/",
    title: "Dashboard",
  },

  {
    id: adminRootPath + "/news",
    title: "news",
  },
  {
    id: "app/projects",
    title: "projects",
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
    createdAt: 1696776986852,
    image: "https://picsum.photos/200",
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
    createdAt: 1696776986842,
    image: "https://picsum.photos/200",
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
    createdAt: 1696776986857,
    image: "https://picsum.photos/200",
    content: `Strengthening Science, Technology and Innovation (STI) is an initiative within UNESCO’s global framework for monitoring, policy support and advocacy for the “UNESCO Recommendation on Science and Scientific Researchers” (November 2017). Phase I: 2020-2022. Phase II: 2022-2025. The 2017 RS|SR defines both the values on the basis of which science can contribute to sustainable development in all its dimensions, and the institutional organization that can enable science institutions in each UNESCO Member State to perform their required role. Responding to the requirements of the 2017 RS|SR is directly and operationally relevant to SDG achievement at national level in the developing countries. The initiative thus includes a vital component of advocacy, conducted Africa-wide, in direct synergy with the specific national interventions in a necessarily limited number of countries.`,
  },

  {
    id: "4",
    title: "THE GHANA UK STI STRATEGY",
    createdAt: 1696776986850,
    image: "https://picsum.photos/200",
    content: `The UK and Ghana have a history of successful alliances and partnerships that have strengthened the capability of both nations to deliver impactful outputs in ST&I. As the UK renews its commitments to advancing ST&I, both countries envision a sustainable partnership that is founded on mutual respect, transparency, trust, equity, and shared knowledge. Ghana shares the UK’s conviction that these fields are imperative for the success of our socio-economic agendas and to support the health, wellbeing, wealth, prosperity, and security of our respective citizenry. This strategy puts forward ambitions for joint efforts in the ST&I space and sets out how these could be achieved using HMG’s own-collaborate-access model to achieve our respective developmental goals.  `,
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
  { id: "technologies/NTIS", title: "Agriculture and food processing" },
  {
    id: "technologies/vision",
    title: "environment, waste management and circular economy",
  },
  { id: "technologies/implementation", title: "Manufacturing" },
  {
    id: "technologies/programdetails",
    title: "information and communication technology (ICT)",
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

export const news: NewModel[] = [
  {
    id: 1,
    title:
      "Hon. Dr. Kwaku Afriyie, Ghana’s Minister of Environment, Science, Technology, and Innovation, Addresses ICCM5 in Bonn",
    content: `Hon. Dr. Kwaku Afriyie, the Minister of Environment, Science, Technology, and Innovation for Ghana, delivered a compelling address at the Fifth International Chemicals Management Conference (ICCM5) in Bonn, Germany, on September 29, 2023.In his speech, Minister Afriyie underscored the pivotal objective of ICCM5: to establish a robust global framework for the responsible management of chemicals and waste. The aim is to mitigate adverse impacts on human health and the environment, emphasizing the urgency of elevating chemical issues on the political agenda to ensure a sustainable and safe use of chemicals worldwide.

      Recognizing pollution as one of the three pressing planetary crises, alongside climate change and biodiversity loss, Minister Afriyie emphasized the far-reaching consequences of chemical pollution on socio-economic development, particularly in developing nations such as Ghana. He highlighted the challenges stemming from knowledge disparities, weak regulatory systems, and the toll chemical pollution exacts on populations.
      
      Minister Afriyie commended ICCM5 for addressing the interconnectedness of chemicals management, climate change, and biodiversity loss. Ghana, he noted, is a committed party to various international chemical and waste agreements and frameworks, including the Strategic Approach to International Chemicals Management (SAICM).
      
      However, he highlighted the pressing issue of insufficient and unsustainable financial support for implementing these agreements, stressing the need for an integrated approach to financing sound chemical and waste management. This integration would entail aligning activities with national development agendas, aiming to meet the 2030 Global Agenda for Sustainable Development. The Minister called for the establishment of a dedicated international fund to support these efforts. Ghana’s proactive stance on confronting chemical and waste challenges was emphasized. The country has enacted multiple legislations and policies to address environmental issues, including climate change. Notably, Ghana has developed a comprehensive 10-year strategic plan for the sound management of chemicals and waste in 2021.

      Furthermore, through the Climate Action Programme for the Chemical Industry (CAPCI), initiated by the Government of Germany, Ghana is actively engaged in capacity-building efforts. These initiatives lay the groundwork for addressing the nexus between chemistry and climate change, culminating in a roadmap for the chemical industry to contribute to the net-zero climate change agenda and fulfill commitments under the Paris Agreement.
      
      In conclusion, Minister Afriyie urged decisive action and reaffirmed Ghana’s readiness to collaborate with the global community to create a planet free from harm caused by chemicals and waste, securing a healthy and sustainable future for all.`,
    image: "https://mesti.gov.gh/wp-content/uploads/2023/09/2-6.jpg",
    imageTwo: "https://mesti.gov.gh/wp-content/uploads/2023/09/2-6.jpg",
    imageThree:
      "https://mesti.gov.gh/wp-content/uploads/2023/09/3-6-300x225.jpg",
    createdAt: "Bonn, Germany – September 29, 2023",
  },
  {
    id: 2,
    title:
      "Ghana’s Minister for Environment, Science, Technology, and Innovation Graces Awards Ceremony for Outstanding University of Ghana Students",
    content: `In a distinguished ceremony attended by Dr. Kwaku Afriyie, Ghana’s Minister for Environment, Science, Technology, and Innovation, three exceptionally talented Ghanaian students from the University of Ghana were honored with prestigious awards by the International Atomic Energy Agency (IAEA). The recipients of these esteemed awards are Ms. Samuella Chiakwor Otuteye, Mr. Philip Fiifi Ghanney, and Mr. Caleb Senyo Ansah.

      These awards recognize and celebrate the exceptional dedication, academic excellence, and outstanding contributions these students have made in their respective fields. Their commitment to academic pursuits, research endeavors, and their positive impact on the community has set them apart as promising leaders and innovators.
      
      Notably, the event was attended by a distinguished Ghanaian delegation, including renowned figures such as Prof. Aba Bentil Andam, Prof. Dickson Adomako, Dr. Nii Kwashie Allotey, Prof. Augustine Faanu, Dr. Emmanuel Ampomah-Amoako, Hon. Dr. Emmanuel Marfo, Hon. Ebenezer Tei-Larbi, Hon. Della Adjoa Sowah, Hon. Lydia Seyram Alhassan, Hon. Samuel Atta Akyea, Mr. Abdalla Ibrahim Gariba, Dr. Kwaku Anning, and Prof. Samuel B. Dampare.
      
      These awards symbolize the government’s commitment to nurturing and recognizing exceptional talent in the fields of environment, science, technology, and innovation. The honored students serve as inspiring examples of Ghana’s promising future in these critical domains.`,
    image: "https://mesti.gov.gh/wp-content/uploads/2023/09/1-6.jpg",
    imageTwo: "https://mesti.gov.gh/wp-content/uploads/2023/09/3-4-300x225.jpg",
    createdAt: "Vienna, September 27, 2023",
  },
  {
    id: 3,
    title:
      "Hon. Dr. Kwaku Afriyie, Ghana’s Minister of Environment, Science, Technology, and Innovation, Engages in High-Level Discussions at ICCM5",
    content: `Hon. Dr. Kwaku Afriyie, distinguished as Ghana’s Minister of Environment, Science, Technology, and Innovation, and concurrently the Executive Director of the Environmental Protection Agency (EPA) of Ghana, recently played a pivotal role in a prestigious roundtable discussion. This high-level discourse centered on fostering innovation in sustainable chemistry within economic and industrial sectors. The occasion was hosted as part of the ongoing International Conference on Chemicals Management (ICCM5).

      The illustrious gathering witnessed the participation of notable global leaders, among them Antonio Guterres, the Secretary-General of the United Nations, Inger Anderson, the Executive Director of the United Nations Environment Programme (UNEP), and Sheffield Lemke, Minister for the Environment, Nature Conservation, Nuclear Safety, and Consumer Protection. Furthermore, numerous other influential figures graced this critical discussion with their presence.
      
      The event served as an invaluable platform for advancing leadership initiatives and promoting solutions aimed at addressing environmental challenges inherent in value chains. Dr. Kwaku Afriyie’s active engagement underscored Ghana’s unwavering commitment to sustainable development and responsible environmental stewardship.
      
      Notably, during the course of the day, Minister Dr. Kwaku Afriyie and his team held a bilateral meeting with Inger Anderson, the Executive Director of UNEP. This collaborative exchange focused on key environmental issues, including chemical waste management, innovative plastic waste recycling models, climate-related concerns, and the preservation of biodiversity.`,
    image: "https://mesti.gov.gh/wp-content/uploads/2023/09/2-5.jpg",
    imageTwo: "https://mesti.gov.gh/wp-content/uploads/2023/09/1-7-300x225.jpg",
    imageThree:
      "https://mesti.gov.gh/wp-content/uploads/2023/09/3-5-300x225.jpg",
    createdAt: "Bonn, Germany – September 28, 2023",
  },
  {
    id: 4,
    title:
      "Minister of Environment Leads Delegation in Pivotal Bilateral Meeting with UK Counterpart",
    content: `This morning marked a significant moment in the realm of international collaboration as Dr. Kwaku Afriyie, the Minister of Environment, Science, Technology, and Innovation, led a distinguished technical committee delegation from the Ghana Atomic Energy Commission (GAEC) to engage in a bilateral meeting with His Excellency Andrew Bowie, the United Kingdom’s Minister for Nuclear and Network, along with a prominent UK delegation.

      The meeting, characterized by its constructive and forward-looking discussions, served as a platform for both nations to explore synergies and deepen their cooperation in the fields of nuclear energy, network development, and environmental sustainability.
      
      Joining Minister Dr. Kwaku Afriyie on this diplomatic mission were Prof. Samuel Damprah, Director-General of GAEC, and concurrently the Board Chairman of GAEC, Dr. Kwaku Anning. Their collective presence underscored the gravity of the subjects under deliberation.
      
      The outcomes of this high-level interaction are poised to facilitate innovative solutions and mutually beneficial endeavors between Ghana and the United Kingdom. As global concerns about nuclear energy, network expansion, and environmental conservation grow, this bilateral meeting reaffirms Ghana’s commitment to fostering international partnerships that contribute to sustainable development.`,
    image: "https://mesti.gov.gh/wp-content/uploads/2023/09/1-5.jpg",
    imageTwo: "https://mesti.gov.gh/wp-content/uploads/2023/09/2-3-300x225.jpg",
    createdAt: "Vienna, 27.09.2023",
  },
  {
    id: 5,
    title:
      "Republic of Ghana Commends IAEA Partnership and Unveils Nuclear Progress",
    content: `In a historic address at the 67th Regular Session of the International Atomic Energy Agency (IAEA) General Conference, Hon. Dr. Kwaku Afriyie, Minister for Environment, Science, Technology, and Innovation of the Republic of Ghana, expressed gratitude for the vital partnership between Ghana and the IAEA, highlighting significant advancements in Ghana’s nuclear efforts.

      Dr. Afriyie began by extending warm congratulations to Madam President and the members of the Bureau for their election, commending their professional conduct during the session. He also conveyed heartfelt congratulations to Mr. Rafael Mariano Grossi, Director-General of the IAEA, on his reappointment for a second term.
      
      The Minister acknowledged the critical role played by the IAEA and development partners in providing technical and financial assistance to Ghana across various sectors. He emphasized the importance of this partnership in driving Ghana’s economic growth and development through the peaceful applications of nuclear technologies.
      
      In the realm of nuclear power, Ghana’s efforts have been progressing steadily. Dr. Afriyie announced the issuance of a follow-up Request for Information (RFI) to prospective vendors, with responses and an assessment report expected to reach Cabinet for consideration by the close of 2023. Ghana remains committed to the IAEA Milestones Approach for adopting international best practices and looks forward to continued support from the IAEA.
      
      The Minister highlighted the instrumental role of the IAEA’s Technical Cooperation Programmes in shaping the competencies and skills of Ghana’s nuclear regulator, owner/operators, and the Ghana Atomic Energy Commission (GAEC). He also expressed gratitude for the Division for Africa’s support in procuring a Thermal Hydraulic Loop, which will enhance the training of postgraduates in nuclear engineering and related fields.
      
      Dr. Afriyie revealed that Ghana had renewed bilateral technical cooperation agreements with the United States and Japan, aiming to build capacity in its nuclear industry to support infrastructure development. The country has also received academic opportunities from advanced nuclear nations such as South Korea, China, and Russia, enriching its nuclear program.
      
      Radiation safety is paramount in Ghana’s nuclear journey, and the country is actively upgrading and expanding its Secondary Standard Dosimetry Laboratory. Ghana is also willing to share its expertise in radioactive waste management with other Member States.
      
      In addressing plastic waste challenges, Ghana welcomed the IAEA NUTEC Plastic Initiative, which supports research on recycling and microplastic monitoring using nuclear technology. The Marine Laboratory at GAEC has been designated as a Regional Laboratory for Microplastic Monitoring in the Marine Environment.
      
      Dr. Afriyie acknowledged the pressing issue of cancer care in Ghana and West Africa due to a shortage of modern treatment facilities. The National Cancer Control Programme is under review, and Ghana seeks the IAEA’s technical input. He emphasized the importance of expanding facilities and announced Ghana’s intention to establish additional radiotherapy centers with the IAEA’s support.
      
      Ghana has benefited from the IAEA ZODIAC project, ensuring timely responses to zoonotic disease outbreaks. Recently, the country faced an anthrax outbreak, producing 286,000 doses of anthrax spore vaccine with the IAEA’s assistance.
      
      In agriculture, Ghana’s comprehensive intervention, in collaboration with the IAEA, has significantly increased cassava yields and addressed food security challenges. Dr. Afriyie recognized the potential of food irradiation and expressed Ghana’s interest in acquiring an irradiation facility for food preservation.
      
      Ghana applauded the IAEA/FAO Partnership’s efforts in addressing food insecurity and malnutrition, especially the “Atoms4Food” initiative. Dr. Afriyie announced that the Biotechnology and Nuclear Agriculture Research Institute (BNARI) of the GAEC had been designated as an IAEA Collaborating Centre for Mutation Breeding and Related Technologies for Sustainable Food and Nutrition Security.
      
      In closing, Dr. Afriyie reaffirmed Ghana’s unwavering support for the IAEA in fulfilling its statutory duties and kindly requested the Agency’s continued support as Ghana applies peaceful uses of nuclear science and technology for sustainable development.`,
    image: "https://mesti.gov.gh/wp-content/uploads/2023/09/1-4.jpg",
    createdAt: "Vienna, AUSTRIA September 25, 2023",
  },
  {
    id: 6,
    title:
      "Honorable Dr. Kwaku Afriyie, Minister for MESTI, Addresses Crucial Biological Weapons Convention Workshop",
    content: `Honorable Dr. Kwaku Afriyie, Minister for Environment, Science, Technology, and Innovation (MESTI), extended a warm welcome to esteemed guests, delegates, and experts gathered at the National Legislative Review Workshop for the Biological Weapons Convention, held at the Kempinski Hotel on Wednesday, September 13th, 2023.

      In his opening remarks, Minister Dr. Kwaku Afriyie underscored the significance of reconvening this essential Working Group, emphasizing the urgent need to reinvigorate the implementation of the Biological and Toxin Weapons Convention (BWC) in Ghana. The workshop provides a unique opportunity to modernize the convention in response to evolving biosecurity risks and the lessons learned from the COVID-19 pandemic.

      Minister Afriyie emphasized the importance of establishing an appropriate legal framework to operationalize the BWC within Ghana. He reiterated Ghana’s commitment to the BWC, underscoring the country’s adherence to Article IV of the Convention. This article obliges State Parties to prohibit and prevent the development, production, stockpiling, acquisition, or retention of biological agents, toxins, weapons, equipment, and means of delivery as detailed in Article I.

      Ghana, as a dedicated State Party to the BWC, is actively working to incorporate the Convention into its local laws, mirroring the efforts being made with the Chemical Weapons Convention (CWC). Minister Afriyie acknowledged the cooperation and support received from international bodies such as the United Nations Office for Disarmament Affairs (UNODA) and the Organization for the Prohibition of Chemical Weapons (OPCW) in this endeavor.

      Minister Afriyie also highlighted Ghana’s comprehensive biosafety framework, including the Biosafety Act, 2011 (Act 831), which established the National Biosafety Authority (NBA). While Act 831 effectively addressed biosafety concerns, it also revealed gaps related to biosecurity and bioterrorism. The Biological and Toxin Weapons Bill aims to bridge these legislative gaps while harmonizing provisions pertaining to biological and toxin weapons.

      In his closing remarks, Minister Afriyie expressed confidence in the collaboration among various Ministries, Departments, and Agencies (MDAs) and the guidance provided by UNODA facilitators. He stressed that this workshop would effectively address the growing risks associated with the spread of new pathogens and infectious diseases, as exemplified by the COVID-19 pandemic.

      The Minister warmly welcomed all participants to this critical workshop and extended a heartfelt “AKWAABA” to international visitors. He concluded by inviting all attendees to embrace the discussions and enjoy their stay in Ghana.

      Overall, your initial text was well-constructed, and the revisions provided aim to enhance readability and clarity while maintaining correct grammar and sentence structure.`,
    image: "https://mesti.gov.gh/wp-content/uploads/2023/09/4-1.jpg",
    imageTwo: "https://mesti.gov.gh/wp-content/uploads/2023/09/1-3-225x300.jpg",
    imageThree:
      "https://mesti.gov.gh/wp-content/uploads/2023/09/1-3-225x300.jpg",
    createdAt: "Accra, September 13, 2023",
  },
  {
    id: 7,
    title:
      "Assistant Secretary Anna Ganzer Meets with Hon. Dr. Kwaku Afriyie, Minister for Environment, Science, Technology & Innovation, Ghana",
    content: `Assistant Secretary for International Security and Nonproliferation, Anna Ganzer, held a crucial meeting today with Honourable Dr. Kwaku Afriyie, Minister for Environment, Science, Technology & Innovation of Ghana. The meeting follows the official request from the U.S. Embassy in Ghana to discuss ongoing collaborations and the upcoming regional conference under the Foundational Infrastructure for Responsible Use of Small Modular Reactor Technology (FIRST) program.

      Under the FIRST program, Ghana and the United States have been working together to advance Ghana’s nuclear energy program while ensuring it adheres to international standards in nuclear security, safety, and nonproliferation. Over the past year, Ghana has actively participated in various FIRST program initiatives, including workshops and study tours that have significantly bolstered its capacity for implementing a nuclear power program.
      
      One of the key highlights of the discussion was the upcoming regional conference, co-hosted by the U.S. FIRST program and the Ghana Atomic Energy Commission (GAEC). This two-day in-person event, scheduled for September 13th to 14th, 2023, in Accra, Ghana, will bring together officials from Sub-Saharan Africa. The conference will center on civil nuclear energy, with a particular focus on small modular reactors (SMRs) and microreactors. It aims to explore the role of nuclear energy in meeting clean energy needs, addressing climate goals, and ensuring safety and security.
      
      During the meeting, Minister Kwaku Afriyie reaffirmed Ghana’s commitment to the peaceful use of nuclear technology and highlighted the progress made in transitioning to phase 2 of the nuclear program. He emphasized the significance of ongoing collaboration with the United States and GAEC in realizing Ghana’s nuclear energy aspirations.
      
      Ghana is currently evaluating various vendor technologies, including U.S. technology, as part of its nuclear program development. The Minister underscored the importance of this assessment in selecting the technology and vendor that aligns with Ghana’s long-term goals.
      
      Assistant Secretary Ganzer expressed her appreciation for Ghana’s commitment to the FIRST program and its dedication to sustainable and responsible nuclear energy development. The meeting concluded with a shared sense of optimism for the future of nuclear energy collaboration between the United States and Ghana.`,
    image: "https://mesti.gov.gh/wp-content/uploads/2023/09/2.jpeg",
    imageTwo: "https://mesti.gov.gh/wp-content/uploads/2023/09/1-300x225.jpeg",
    imageThree:
      "https://mesti.gov.gh/wp-content/uploads/2023/09/3-300x225.jpeg",
    createdAt: "Accra, September 12, 2023",
  },
  {
    id: 8,
    title:
      "Ghana’s Minister of Environment Explores Membership in the Alliance for Drought Resilience",
    content: `Nairobi, Kenya – [06.09.2023] — Following a dynamic morning engagement at the prestigious Africa Public Sector Conference & Awards 2023, Honourable Dr. Kwaku Afriyie, Ghana’s Minister of Environment, Science, Technology, and Innovation, led a high-level delegation in discussions with the Executive Director of the United Nations Convention to Combat Desertification (UNCCD). The primary agenda of this meeting was to explore Ghana’s potential membership in the Alliance for Drought Resilience.

      The Africa Public Sector Conference & Awards 2023 provided an invaluable platform for key stakeholders to deliberate on critical issues facing the African continent. Building upon the momentum of this significant event, Ghana’s distinguished delegation, including Dr. Henry Kwabena Kokofu, Executive Director of the Environmental Protection Agency (EPA), and Dr. Peter Justice Dery, Director of Environment at the Ministry of Environment, Science, Technology, and Innovation, engaged in substantive discussions with the Executive Director of UNCCD regarding Ghana’s potential membership in the Alliance for Drought Resilience.
      
      This initiative underscores Ghana’s steadfast commitment to taking proactive measures to address the challenges posed by drought and desertification. The Alliance for Drought Resilience is a global partnership dedicated to enhancing the resilience of communities and ecosystems in regions susceptible to drought and desertification.
      
      During the meeting, Honourable Dr. Kwaku Afriyie and the delegation explored potential areas of collaboration and mutual interest. Ghana, with its rich history and extensive experience in environmental conservation and sustainable land management, stands poised to make substantial contributions to the Alliance’s objectives.
      
      The discussions highlighted the critical importance of regional cooperation and knowledge sharing in mitigating the adverse effects of drought and desertification. Ghana’s active engagement with the Alliance for Drought Resilience underscores the nation’s broader commitment to sustainable development and environmental stewardship.
      
      As these discussions progress, further details regarding Ghana’s potential membership and its role within the Alliance will be disclosed to the public. This partnership with the Alliance for Drought Resilience signifies Ghana’s dedication to proactive and collaborative efforts aimed at building a more resilient and sustainable future for all.`,
    image: "https://mesti.gov.gh/wp-content/uploads/2023/09/4-2048x1463.jpg",
    imageTwo: "https://mesti.gov.gh/wp-content/uploads/2023/09/1-2-300x214.jpg",
    imageThree:
      "https://mesti.gov.gh/wp-content/uploads/2023/09/3-2-300x214.jpg",
    createdAt: "Nairobi, Kenya, 06.09.2023",
  },
  {
    id: 9,
    title:
      "Minister of Environment, Science, Technology, and Innovation of Ghana, actively participated in the Africa Public Sector Conference & Awards 2023.",
    content: `This morning, the Honorable Dr. Kwaku Afriyie, Minister of Environment, Science, Technology, and Innovation of Ghana, actively participated in the Africa Public Sector Conference & Awards 2023.

      The conference, held on the sidelines of the Africa Climate Summit in Nairobi, marks a significant step toward fostering sustainable development and innovation in Africa.
      
      Hon. Dr. Kwaku Afriyie, a stalwart in Ghana’s environmental and technological initiatives, brought his expertise to the conference, where crucial discussions on the pressing issues of our time took place. His presence signifies Ghana’s unwavering commitment to tackling climate change and advancing the science and technology sectors.
      
      Accompanying the Honorable Minister was Dr. Peter Justice Dery, Ghana’s esteemed Director of Environment. Together, they showcased Ghana’s dedication to environmental stewardship and its pursuit of cutting-edge technological solutions for a sustainable future.
      
      This participation reaffirms Ghana’s role as a key player in addressing the challenges posed by climate change while harnessing the potential of science and technology to drive innovation and progress.`,
    image: "https://mesti.gov.gh/wp-content/uploads/2023/09/2-1-2048x1463.jpg",
    imageTwo: "https://mesti.gov.gh/wp-content/uploads/2023/09/1-1-300x214.jpg",
    imageThree:
      "https://mesti.gov.gh/wp-content/uploads/2023/09/3-1-300x214.jpg",
    createdAt: "Nairobi, Kenya, 06.09.2023",
  },
  {
    id: 10,
    title:
      "Ghana’s Minister of Environment, Science, Technology, and Innovation, Hon. Dr. Kwaku Afriyie, Plays Active Role in Africa Climate Summit Discussions",
    content: `Nairobi, Kenya – Today, Hon. Dr. Kwaku Afriyie, Ghana’s Minister of Environment, Science, Technology, and Innovation, actively participated in ministerial discussions addressing the African carbon market during the ongoing Africa Climate Summit held in Nairobi, the capital of Kenya.

      Accompanied by esteemed delegates, including the Executive Director of the Environmental Protection Agency (EPA), Dr. Henry Kwabena Kokofu, and the Director of Environment, Dr. Peter Justice Dery, Hon. Dr. Kwaku Afriyie showcased Ghana’s commitment to environmental sustainability and climate action on the international stage.
      
      In addition to his engagements at the Africa Climate Summit, the honorable Minister is set to accompany His Excellency the President of Ghana for several crucial bilateral meetings, including:
      
      Rt Hon. Patricia Scotland, Secretary-General of the Commonwealth (London).
      Mr. Jang Sung Min, Special Presidential Envoy of the Republic of Korea.
      Ban Ki-Moon, President of the Global Green Growth Institute.
      These meetings aim to strengthen international cooperation and foster global partnerships to combat climate change and promote sustainable development.`,
    image: "https://mesti.gov.gh/wp-content/uploads/2023/09/2.jpg",
    imageTwo: "https://mesti.gov.gh/wp-content/uploads/2023/09/3-225x300.jpg",
    createdAt: "Nairobi, 5th September 2023",
  },
];

export const handleOpenLinkInNewTab = () => {
  const urlToOpen = "https://83.229.69.76:91/webLogin.aspx";
  window.open(urlToOpen, "_blank");
};

export function isObjectEmpty(obj: {}) {
  return Object.keys(obj).length === 0;
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
