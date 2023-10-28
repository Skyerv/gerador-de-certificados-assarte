import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../FirebaseConfiguration";
import Presentation from "../entities/Presentation";

class PresentationRepository {
  async add(presentation) {
    const docRef = await addDoc(
      collection(db, "presentations"),
      presentation.toMap()
    );
    console.log("Document written with ID: ", docRef.id);
  }

  async delete(presentationId) {
    await deleteDoc(doc(db, "presentations", presentationId));
    console.log("Document deleted with ID: ", presentationId);
  }

  async update(presentationId, updatedData) {
    await updateDoc(
      doc(db, "presentations", presentationId),
      updatedData.toMap()
    );
    console.log("Document updated with ID: ", presentationId);
  }

  async getAll() {
    let presentations = [];
    const querySnapshot = await getDocs(collection(db, "presentations"));
    querySnapshot.forEach((doc) => {
      const presentationData = doc.data();
      const presentation = new Presentation(
        doc.id,
        presentationData.title,
        presentationData.day,
        presentationData.startTime,
        presentationData.endTime,
        presentationData.presenter,
        presentationData.responsible
      );
      presentations.push(presentation);
    });
    return presentations;
  }

  async fetchPresentationById(presentationId) {
    var presentation;
    const presentationRef = doc(db, "presentations", presentationId);
    const docSnapshot = await getDoc(presentationRef);

    if (docSnapshot.exists()) {
      const presentationData = docSnapshot.data();
      presentation = new Presentation(
        docSnapshot.id,
        presentationData.title,
        presentationData.day,
        presentationData.startTime,
        presentationData.endTime,
        presentationData.presenter,
        presentationData.responsible
      );
    } else {
      console.log("Document does not exist");
    }

    return presentation;
  }
}

export default PresentationRepository;
