import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { news } from "../../constants";
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

// export const saveBlog = async () => {
//   for (const blog of news) {
//     await addDoc(collection(db, "news"), blog);
//   }
//   console.log("Done and dusted");
// };
