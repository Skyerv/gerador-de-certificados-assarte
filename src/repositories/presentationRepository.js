import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../FirebaseConfiguration";
import Presentation from "../entities/Presentation";

class PresentationRepository {
  async add(presentation, eventId) {
    const docRef = await addDoc(
      collection(db, "events", eventId, "presentations"),
      presentation.toMap()
    );
    console.log("Document written with ID: ", docRef.id);
  }

  async delete(presentationId, eventId) {
    await deleteDoc(
      doc(db, "events", eventId, "presentations", presentationId)
    );
    console.log("Document deleted with ID: ", presentationId);
  }

  async update(presentationId, updatedData, eventId) {
    await updateDoc(
      doc(db, "events", eventId, "presentations", presentationId),
      updatedData.toMap()
    );
    console.log("Document updated with ID: ", presentationId);
  }

  async getAll(eventId) {
    let presentations = [];

    const querySnapshot = await getDocs(
      query(
        collection(db, "events", eventId, "presentations"),
        orderBy("day", "desc"),
        orderBy("startTime", "desc")
      )
    );

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

  async fetchPresentationById(presentationId, eventId) {
    var presentation;
    const presentationRef = doc(
      db,
      "events",
      eventId,
      "presentations",
      presentationId
    );
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
