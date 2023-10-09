import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { projects } from "../../constants";
import { NewModel } from "../../types";

export const addNewBlog = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const saveBlog = async () => {
  for (const blog of news) {
    await addDoc(collection(db, "technology"), blog);
  }
  console.log("Done and dusted");
};

const news = [
  {
    title: "CN112401287 - CASSAVA PROCESSING DEVICE",
    content: `The invention relates to a cassava processing device. The cassava processing device comprises a feeding hopper, a barrel body communicating with an outlet of the feeding hopper, an auger arranged in the barrel body, an outlet device connected with the barrel body and a driving device connected with the auger, wherein the driving device is used for driving the auger to rotate; the outlet device comprises an extruding pore plate; and the extruding pore plate is provided with a discharging hole for discharging cassava blocks. According to the cassava processing device provided by the invention, the processed cassava blocks have uniform sizes and are convenient to dry and store.`,
    image:
      "https://patentscope.wipo.int/search/docs2/nat/CN319968826/pic/KfyIy688MmoGy3c7QoT28IPjyn_fFRysTWofsJqV2yEfDwreSBTMkSwGjYFTXqGoNw2WoPiQMpCP7v-RlCT9Yg",
    office: "China",
    applicationNumber: "202011329213.0",
    applicationDate: "24.11.2020",
    publicationNumber: "112401287",
    publicationDate: "26.02.2021",
    publicationKind: "agriculture",
    ipc: "A23P 30/20 A23L 19/10",
    cpc: "A23L 19/11 A23P 30/20",
    applicant:
      "HUNAN NONGYOU AGRICULTURAL EQUIPMENT CO., LTD. 湖南省农友农业装备股份有限公司",
    inventors: "CHEN LIXIN 陈厉新 WANG KAI 王凯 GONG MIAO 龚淼",
    agents: "北京集佳知识产权代理有限公司 11227",
    note: "Text based on automatic Optical Character Recognition processes. Please use the PDF version for legal matters",
    description: `A kind of cassava processing equipment

        Technical field
        The invention relates to the technical field of secondary processing of agricultural products, in particular to a cassava processing equipment.
        Background technique
        Cassava is one of the three major tubers (cassava, sweet potato, potato) in the world. There are more than 100 species in the genus Cassava. Cassava is the only species used for economic cultivation, and the others are wild species. The world trade volume of cassava accounts for about 10% of the total output. The main products are dry flakes, granules and cassava starch. China, Japan, the United States and other countries are the main importers of cassava products in the world, accounting for about 70% to 80% of their total trade volume. .
        The main uses of cassava are food, feed and industrial development and utilization. Root starch is one of the main starch-making raw materials in industry. 65% of the world's total cassava production is used for human food, and it is the main food crop for low-income farmers in tropical wetlands. Cassava starch or dried flakes can be used to produce alcohol, citric acid, glutamic acid, lysine, cassava protein, glucose, fructose, etc. These products have important uses in food, beverages, medicine, textiles (dyed cloth), papermaking, etc. . In China it is mainly used for feed and starch extraction.
        Therefore, the cassava needs to be crushed first. In the existing technology, the cassava is usually sliced. If the finished product produced by the cassava crushing equipment needs to be dried and stored, the cassava slices are large in size and uneven in size. Larger cassava chips still have more moisture, while smaller cassava chips dry better, which makes them inconvenient for storage. After the cassava is crushed by the cassava crushing equipment, it needs to be processed immediately.
        Contents of the invention
        To solve the above technical problems, the purpose of the present invention is to provide a cassava processing equipment so that the processed cassava pieces are uniform in size and easy to dry and store.
        The technical solution of the present invention is as follows:
        A cassava processing equipment including a feeding hopper;
        A cylinder connected to the outlet of the feed hopper;
        An auger located in the barrel;
        an outlet device connected to the barrel;
        a driving device connected to the auger, the driving device being used to drive the auger to rotate;
        The outlet device includes an extrusion orifice plate, and the extrusion orifice plate is provided with a discharge hole for discharging the cassava pieces.
        Preferably, a locking device is provided at the connection between the barrel and the outlet device.
        Preferably, the gap between the inner wall of the barrel and the auger is equal.
        Preferably, the barrel has a reduced diameter shape, and the small end of the barrel is located close to the outlet device.
        Preferably, the outlet device is a conical housing.
        Preferably, the feeding hopper is a conical shell with a larger top and a smaller bottom.
        Preferably, the driving device includes an input pulley connected to the end of the auger;
        a bearing seat located between the end of the barrel and the input pulley;
        The auger is equipped with a bearing, and the bearing is installed in the bearing seat.
        Preferably, it includes a base frame, and the bearing seat is installed above the base frame.
        The invention provides a cassava processing equipment, which includes a feed hopper, a cylinder connected to the outlet of the feed hopper, an auger installed in the cylinder, an outlet device connected to the cylinder, and a driving device connected to the auger. The driving device is used to drive the auger to rotate. The outlet device includes an extrusion orifice plate. The extrusion orifice plate is provided with a discharge hole for discharging the cassava pieces. Compared with the existing technology, when cassava needs to be processed, the cassava is put into the feeding hopper, and the cassava falls from the feeding hopper into the cylinder. At this time, the driving device drives the auger to rotate, and during the rotation of the auger, Push the end of the cassava cylinder close to the driving device to the end of the outlet device. The outlet device includes an extrusion orifice plate. The cassava is extruded from the discharge hole of the extrusion orifice plate under the force of the auger. Therefore, the cassava processing equipment provided by this application makes the processed cassava pieces uniform in size and convenient for drying and storage.
        Description of the drawings
        In order to explain the embodiments of the present application or the technical solutions in the prior art more clearly, the drawings needed to be used in the description of the embodiments or the prior art will be briefly introduced below. Obviously, the drawings in the following description are only These are some embodiments recorded in this application. For those of ordinary skill in the art, other drawings can be obtained based on these drawings without exerting creative efforts.
        Figure 1 is a cross-sectional view of the cassava processing equipment provided by the embodiment of the present invention;
        Figure 2 is a cross-sectional view from another direction of the cassava processing equipment provided by the embodiment of the present invention;
        Figure 3 is a top view of the cassava processing equipment provided by the embodiment of the present invention.
        Description of numbers in the drawings: 1. Base frame; 2. Bearing seat; 3. Auger; 4. Cylinder; 5. Extrusion orifice plate; 6. Export device; 7. Input pulley; 8. Feed hopper ; 9. Locking device.
        Detailed ways
        In order to enable those in the technical field to better understand the technical solutions in the present application, the technical solutions in the embodiments of the present application will be clearly and completely described below in conjunction with the drawings in the embodiments of the present application. Obviously, the described The embodiments are only some of the embodiments of this application, not all of them. Based on the embodiments in this application, all other embodiments obtained by those of ordinary skill in the art without creative efforts should fall within the scope of protection of this application.
        In the description of the present invention, it should be understood that the terms "upper", "lower", etc. indicating the orientation or positional relationship are only for the convenience of describing the present invention and simplifying the description, but do not indicate or imply that the components or elements referred to must be Has a specific orientation, is constructed and operates in a specific orientation and is therefore not to be construed as limiting the invention.
        As shown in Figures 1 to 3, the present invention provides a cassava processing equipment, which includes a feed hopper 8, a cylinder 4 connected to the outlet of the feed hopper 8, and an auger 3 located in the cylinder 4. The outlet device 6 is connected to the cylinder 4, and the driving device is connected to the auger 3. The driving device is used to drive the auger 3 to rotate. The outlet device 6 includes an extrusion orifice plate 5. The extrusion orifice plate 5 is provided with a supply for cassava pieces. Discharge hole. Compared with the existing technology, when cassava needs to be processed, the cassava is put into the feeding hopper 8, and the cassava falls from the feeding hopper 8 into the cylinder 4. At this time, the driving device drives the auger 3 to rotate, and the auger 3 During the rotation, the end of the cassava cylinder 4 close to the driving device is pushed to the end of the outlet device 6. The outlet device 6 includes an extrusion orifice plate 5. Under the force of the auger 3, the cassava is pushed from the end of the extrusion orifice plate 5. The discharge hole is extruded. Therefore, the cassava processing equipment provided by this application makes the processed cassava pieces uniform in size and convenient for drying and storage.
        Among them, a locking device 9 is provided at the connection between the barrel 4 and the outlet device 6. When the auger 3 is working, the extrusion force is relatively large, and the setting of the locking device 9 can make the outlet device 6 and the extrusion orifice plate 5 will not fall off from the cylinder 4, thereby improving the reliability of cassava processing.
        Further, the gap between the inner wall of the cylinder 4 and the outer wall of the auger 3 is equal. Preferably, the distance of the gap is smaller than the diameter of the discharge hole. The gap between the inner wall of the cylinder 4 and the auger 3 is too large, and the cassava is easily stuck in the gap. When the auger 3 squeezes the cassava pieces out of the extrusion orifice plate 5, the auger 3 will move along its radial direction. A slight swing occurs, and if the gap between the inner wall of the cylinder 4 and the outer wall of the auger 3 is too small, friction will occur between the outer wall of the auger 3 and the inner wall of the cylinder 4, which will damage the auger 3 and the cylinder 4. Therefore, the gap between the inner wall of the cylinder 4 and the outer wall of the auger 3 is set to be smaller than the diameter of the discharge hole. On the one hand, the cassava will not be stuck in the gap. On the other hand, the outer wall of the auger 3 and There will be no friction between the inner walls of the cylinder 4, and the auger 3 and the cylinder 4 will not be damaged, thereby increasing their service life.
        Among them, the cylinder 4 has a reduced diameter shape, and the small end of the cylinder 4 is located near the outlet device 6 . The auger 3 is placed horizontally. At this time, the auger 3 is similar to a cantilever structure. The outlet device 6 is far away from the driving device. The kinetic energy of the auger 3 is gradually lost along its axial direction. Therefore, at the big end of the barrel 4, the auger 3 has the greatest force. In order to improve the crushing efficiency of cassava, more cassava can be placed here. Near the exit device 6, the crushing capacity of the auger 3 is weakened, which can reduce the processing capacity of cassava. Therefore, the cylinder 4 can be configured to have a reduced diameter. On the other hand, with this arrangement, when the auger 3 is placed horizontally, the auger 3 is similar to a cantilever structure, and the end of the auger 3 close to the outlet device 6 is less stressed, which prevents the end of the auger 3 from being broken due to excessive stress. .
        Preferably, the outlet device 6 is a conical housing. The tapered shell is similar to the material guide structure, which can speed up the discharging speed of cassava pieces.
        Among them, the feed hopper 8 is a conical shell with a large top and a small bottom. The feed hopper 8 is also similar to the material guide structure, which can speed up the speed of cassava falling into the cylinder 4 and improve the cassava processing capacity of the cassava processing equipment.
        In the embodiment provided by the present invention, the driving device includes an input pulley 7 connected to the end of the auger 3, and a bearing seat 2 disposed between the end of the barrel 4 and the input pulley 7. The auger 3 is covered with a Bearing, the bearing is installed in the bearing seat 2. The input pulley 7 is connected to the output pulley through a belt, and the output pulley is connected to the motor. In the prior art, gear transmission is mostly used to drive the auger 3. However, with the transmission structure of this embodiment, since the belt has good The elasticity can alleviate impact and vibration during the processing and crushing of cassava, reduce the load on the main shaft of the auger 3, and prevent the auger 3 from breaking. On the other hand, when the amount of cassava squeezed is too large, the auger 3 will be overloaded and the belt will slip on the input pulley 7. Unloading the excessive load on the auger 3 can prevent the auger 3 from being damaged. Finally, this transmission structure has low noise and improves the quality of the cassava processing environment. At the same time, through the arrangement of bearings and bearing seats 2, on the one hand, power transmission is satisfied. On the other hand, the transmission is smooth, preventing the auger 3 from breaking due to excessive local load.
        Among them, the cassava processing equipment includes a base frame 1, and the bearing seat 2 is installed above the base frame 1. Preferably, the outer wall of the cylinder 4 is in contact with the bottom frame 1 . First, the setting of the chassis 1 makes the bottom of the bearing seat 2 stable, preventing the uneven ground from causing a crushing load between the bearing and the auger 3, and thus causing the auger 3 to break. Second, the outer wall of the cylinder 4 is in contact with the chassis 1, so that during the processing of cassava, the chassis 1 always provides auxiliary support to the cylinder 4, so that the gap between the cylinder 4 and the auger 3 is always equal. On the one hand, the cassava will not get stuck in the gap; on the other hand, there will be no friction between the outer wall of the auger 3 and the inner wall of the cylinder 4, so that the auger 3 and the cylinder 4 will not be damaged, thereby improving their service life. .
        Each embodiment in this specification is described in a progressive manner. Each embodiment focuses on its differences from other embodiments. The same or similar parts between various embodiments can be referred to each other.
        The above description of the disclosed embodiments enables those skilled in the art to make or use the present invention. Various modifications to these embodiments will be readily apparent to those skilled in the art, and the generic principles defined herein may be practiced in other embodiments without departing from the spirit or scope of the invention. Thus, the present invention is not intended to be limited to the embodiments shown herein but is to be accorded the widest scope consistent with the principles and novel features disclosed herein.`,
    claims: `1. A cassava processing equipment, characterized in that it includes a feeding hopper (8);
        A cylinder (4) connected with the outlet of the feed hopper (8);
        An auger (3) located in the barrel (4);
        An outlet device (6) connected to the barrel (4);
        A driving device connected to the auger (3), the driving device is used to drive the auger (3) to rotate;
        The outlet device (6) includes an extrusion orifice plate (5), and the extrusion orifice plate (5) is provided with a discharge hole for discharging the cassava pieces.
        2. The cassava processing equipment according to claim 1, characterized in that a locking device (9) is provided at the connection between the cylinder (4) and the outlet device (6).
        3. The cassava processing equipment according to claim 1, characterized in that the gap between the inner wall of the cylinder (4) and the auger (3) is equal.
        4. The cassava processing equipment according to claim 1, characterized in that the cylinder (4) is in a reduced diameter shape, and the small end of the cylinder (4) is located close to the outlet device (6).
        5. Cassava processing equipment according to claim 1, characterized in that the outlet device (6) is a conical shell.
        6. The cassava processing equipment according to claim 1, characterized in that the feeding hopper (8) is a conical shell with a larger upper part and a smaller lower part.
        7. The cassava processing equipment according to claim 1, characterized in that the driving device includes an input pulley (7) connected to the end of the auger (3);
        A bearing seat (2) provided between the end of the barrel (4) and the input pulley (7);
        The auger (3) is equipped with a bearing, and the bearing is installed in the bearing seat (2).
        8. The cassava processing equipment according to claim 7, characterized in that it includes a bottom frame (1), and the bearing seat (2) is installed above the bottom frame (1).`,
  },
  {
    title: "CN110679916 - CASSAVA FLOUR PROCESSING METHOD",
    content: `The invention relates to a cassava processing device. The cassava processing device comprises a feeding hopper, a barrel body communicating with an outlet of the feeding hopper, an auger arranged in the barrel body, an outlet device connected with the barrel body and a driving device connected with the auger, wherein the driving device is used for driving the auger to rotate; the outlet device comprises an extruding pore plate; and the extruding pore plate is provided with a discharging hole for discharging cassava blocks. According to the cassava processing device provided by the invention, the processed cassava blocks have uniform sizes and are convenient to dry and store.`,
    office: "China",
    applicationNumber: "201910031892.4",
    applicationDate: "14.01.2019",
    publicationNumber: "14.01.2020",
    publicationDate: "14.01.2020",
    publicationKind: "agriculture",
    ipc: "A23L 29/30 A23L 5/10 C08B 30/02",
    cpc: "A23L 29/30 A23L 5/10 C08B 30/02",
    applicant:
      "ANHUI TIDECOM AGRICULTURAL SCIENCE AND TECHNOLOGY DEVELOPMENT CO., LTD. 安徽泰德康农业科技发展有限公司",
    inventors: "HU DONG 胡东 HU BIN 胡彬 YUAN RUI 袁锐",
    image:
      "https://patentscope.wipo.int/search/docs2/nat/CN282390259/pic/b_865yJzcMbd2577FzyA_9YgOfIDagEZ8tMJM7n4R9UQkGZusax05V2izhs_UDUXe-G-Hfy_On34b1jtTGiXk0lfy7o00e09LK0PcXzvpx4",
    description: `Cassava flour processing method
        Technical field
        The invention belongs to the field of cassava processing methods.
        Background technique
        Tapioca starch is a powder obtained by dehydrating and drying cassava after starch extraction. Cassava starch has two categories: original starch and various modified starches, which are widely used in the food industry and non-food industry. Modified starch can be customized according to the specific requirements of users to suit special purposes. The traditional cassava flour processing technology includes: cassava - cleaning - crushing - starch extraction - slurry separation - fine filtration and sand removal - juice removal - concentration and refining - dehydration - drying. The cassava flour produced by this process is raw flour, which needs further cooking before it can be eaten.
        Contents of the invention
        The technical problem to be solved by the present invention is to provide a processing method of cooked cassava flour.
        In order to achieve the above objects, the technical solutions adopted by the present invention are:
        A cassava flour processing method, which includes receiving and removing impurities from raw materials, cleaning and peeling raw materials, crushing and removing sand, dehydration, drying, and packaging. After the dehydration process, there is a ripening process. The ripening process includes frying the dehydrated cassava flour. To maturity.
        It also includes a pressing, dehydration and fermentation process. After the cassava raw materials are crushed and sanded, the potato pulp slurry is dehydrated and pressed through a filter press. After dehydration, a filter cake is formed. The filter cake is transported to the corresponding fermentation tank through a material distribution belt conveyor for fermentation.
        After the filter cake is fermented, it is broken into powder by a crusher, and then transported to the corresponding wok for frying through a material distribution belt.
        The described raw material cleaning and peeling process includes:
        Paddle cleaning machine cleaning, the raw materials after dry impurity removal enter a set of two-stage series paddle cleaning machines, which add water to the cassava to clean it and remove the remaining sand and peel;
        Brush cleaning and peeling machine removes cassava skin and difficult-to-remove impurities.
        In the drum spray cleaning machine, the cassava raw materials cleaned by the brush are transported to the drum spray cleaning machine through the belt conveyor for further cleaning, and the skin, sediment and other impurities on the surface of the material are cleaned by spraying.
        The crushing and sand removal process includes:
        After initial crushing, the completely cleaned cassava raw materials are transported into the crusher and cut into pieces of about 10mm in size. The crushed cassava pieces then enter the crusher to further crush the cassava;
        For filing and pulping, the crushing machine files and grinds the cassava pieces into potato pulp. The potato pulp includes free starch granules, fiber, fiber containing bound starch and cell fluid; the filed potato pulp passes through the sieve under the filing machine. The net enters the collecting tank, flows into the potato slurry barrel, and then is transported to the desander;
        Cyclone desanding removes small sand and heavy impurities from the cassava pulp through the desander. The desanded potato pulp is transported to the potato pulp temporary storage tank through the potato pulp transfer pump.
        During the filing process, process water needs to be added to dilute it.
        A slurry pump is installed at the bottom of the potato pulp barrel, and the potato pulp is pumped into the desander through the slurry pump to remove sand from the cassava pulp.
        It also includes a whole powder screening process, which is located after the curing process. This process includes transporting the fried whole powder to a grading screen through a screw conveyor for screening, and the large particles on the screen are crushed and then returned to continue. Sieve.
        Beneficial effects of the present invention: After the cassava flour of the present invention has been cured, the cassava flour only needs to be slightly heated before use and can be eaten without causing harm to the human body.
        Description of the drawings
        Figure 1 is a process flow diagram of the present invention.
        Detailed ways
        The present invention will be further described below in conjunction with examples.
        A cassava flour processing method as shown in Figure 1 includes processing in the following sequence:
        Receiving and removing impurities from raw materials
        Dry impurity remover: After receiving the goods, the fresh cassava raw materials are transported to the factory raw material storage yard by trucks with a load of about 5-10 tons. The cassava raw materials are transported to the raw material receiving warehouse by forklifts or manually, and are unloaded by the vibrating discharger. The belt conveyor carries the belt to the drum-type impurity remover for preliminary dry impurity removal to remove impurities such as sand, roots, straw and bark from the cassava raw materials.
        Cleaning and peeling raw materials
        Paddle cleaning machine: The raw materials after dry impurity removal enter a set of two-stage series paddle cleaning machines, which add water to the cassava to clean the remaining sand and peel to ensure that the raw materials entering the filing section are clean. . The main function of the front part of the cleaning machine is to fully soak the raw materials so that the cassava can be removed through mutual friction and stirring. The raw materials are transferred level by level through the sinks in different areas into the relatively clean sink at the next level. Clean cleaning water is added to the subsequent cleaning machine, so that the cassava is cleaned through countercurrent cleaning.
        Brush cleaning and peeling machine: In order to ensure that the surface impurities of the raw materials are cleaned as cleanly as possible, a brush cleaning and peeling machine is added to remove the cassava skin and impurities that are difficult to remove.
        Drum spray cleaning machine: The cassava raw materials after brush cleaning are transported to the drum spray cleaning machine through a belt conveyor for further cleaning. The skin, sediment and other impurities on the surface of the material are cleaned as much as possible through spraying, making them clean. The material is then transported to the crushing unit through a belt conveyor.
        Crushing and sand removal
        Preliminary crushing: Due to the large size of cassava tubers, preliminary crushing is required before crushing. The completely cleaned cassava raw materials are transported into the crusher and cut into pieces of about 10mm in size. The crushed cassava pieces then enter the crusher. Crush the cassava further.
        Filing and pulping: The crushing machine files and grinds the cassava pieces into potato pulp. The potato pulp includes free starch granules, fiber, fiber containing bound starch and cell fluid (containing soluble substances such as protein, sugar and minerals). During the filing process, process water needs to be added to dilute it. The filed potato pulp enters the collecting tank through the screen under the filing machine and flows into the potato pulp barrel. A slurry pump is installed at the bottom of the potato pulp barrel, and the potato pulp is pumped into the desander through the slurry pump to remove sand from the cassava pulp.
        Cyclone desanding: The small sand particles and heavy impurities in the cassava pulp are removed through the desander to ensure the quality of the finished product. The desanded potato pulp is transported to the potato pulp temporary storage tank through the potato pulp transfer pump.
        Pressing, dehydration and fermentation
        Dehydration and fermentation: The slurry in the temporary storage tank of potato pulp is transported to the plate and frame filter press for dehydration and pressing through the feeding screw pump. After dehydration, the filter cake is transported to the corresponding fermentation tank through the material distribution belt conveyor for fermentation.
        Filter cake crushing: The fermented filter cake is broken into powder by the crusher, and then transported to the corresponding wok for frying through the material distribution belt.
        Stir-fried packaging
         Frying and maturation: The broken filter cake is fried in a special drum type frying pan transported by the material distribution belt.
        Whole flour screening: The fried whole flour is transported to the grading screen through a screw conveyor for screening. The large particles on the screen are crushed and then returned to continue screening.
        Whole powder packaging: The whole powder screened by the grading screen enters the finished product silo, and is measured by the vibrating discharger and electronic scale before entering the packaging machine for packaging.
        The basic principles, main features and advantages of the present invention have been shown and described above. Those skilled in the art should understand that the present invention is not limited by the above embodiments. The above embodiments and descriptions only illustrate the principles of the present invention. Without departing from the spirit and scope of the present invention, ordinary people in the art can Simple modifications and replacements by skilled personnel are within the protection scope of the present invention.`,
    claims: `claims

        1. A cassava flour processing method, which includes receiving and removing impurities from raw materials, cleaning and peeling raw materials, crushing and removing sand, dehydration, drying, and packaging. It is characterized in that: a ripening process is provided after the dehydration process, and the ripening process includes dehydrating. The tapioca flour is stir-fried until cooked.
        2. The cassava flour processing method according to claim 1, characterized in that: it also includes a pressing, dehydration and fermentation process. After the cassava raw materials are crushed and sanded, the potato pulp slurry is dehydrated and squeezed through a filter press, and a filter cake is formed after dehydration. The cake is transported to the corresponding fermentation tank through the material distribution belt conveyor for fermentation.
        3. The cassava flour processing method according to claim 2, characterized in that: after the filter cake is fermented, it is broken into powder by a crusher, and then transported to the corresponding wok for frying through a material distribution belt.
        4. The cassava flour processing method according to claim 1 or 2 or 3, characterized in that: the raw material cleaning and peeling process includes:
        Paddle cleaning machine cleaning, the raw materials after dry impurity removal enter a set of two-stage series paddle cleaning machines, which add water to the cassava to clean it and remove the remaining sand and peel;
        Brush cleaning and peeling machine removes cassava skin and difficult-to-remove impurities.
        In the drum spray cleaning machine, the cassava raw materials cleaned by the brush are transported to the drum spray cleaning machine through the belt conveyor for further cleaning, and the skin, sediment and other impurities on the surface of the material are cleaned by spraying.
        5. The cassava flour processing method according to claim 1, characterized in that: the crushing and sand removal process includes:
        After initial crushing, the completely cleaned cassava raw materials are transported into the crusher and cut into pieces of about 10mm in size. The crushed cassava pieces then enter the crusher to further crush the cassava;
        For filing and pulping, the crushing machine files and grinds the cassava pieces into potato pulp. The potato pulp includes free starch granules, fiber, fiber containing bound starch and cell fluid; the filed potato pulp passes through the sieve under the filing machine. The net enters the collecting tank, flows into the potato slurry barrel, and then is transported to the desander;
        Cyclone desanding removes small sand and heavy impurities from the cassava pulp through the desander. The desanded potato pulp is transported to the potato pulp temporary storage tank through the potato pulp transfer pump.
        6. The cassava flour processing method according to claim 5, characterized in that: during the filing process, process water needs to be added to dilute it.
        7. The cassava flour processing method according to claim 5, characterized in that: a slurry pump is installed at the bottom of the potato slurry barrel, and the potato slurry is pumped into the desander through the slurry pump to remove sand from the cassava pulp.
        8. The cassava flour processing method according to claim 1, characterized in that: it also includes a whole flour screening process, which is located after the curing process, and the process includes transporting the fried whole flour to the cassava flour through a screw conveyor. The classification sieve is used for screening, and the large particles on the screen are crushed and then returned to continue screening.`,
  },
];
