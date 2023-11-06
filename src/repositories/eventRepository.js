import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../FirebaseConfiguration";

class EventRepository {
  async add(event) {
    const eventWithTimestamp = {
      ...event.toMap(),
      created_at: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "events"), eventWithTimestamp);
    console.log("Document written with ID: ", docRef.id);
    event.id = docRef.id;
  }

  async getLastAddedEvent() {
    const eventsCollection = collection(db, "events");
    const querySnapshot = await getDocs(
      query(eventsCollection, orderBy("created_at", "desc"), limit(1))
    );

    if (!querySnapshot.empty) {
      const lastAddedEvent = {
        id: querySnapshot.docs[0].id,
        ...querySnapshot.docs[0].data(),
      };
      return lastAddedEvent;
    } else {
      return null;
    }
  }

  async get(id) {
    const eventRef = doc(db, "event", id);
    const docSnapshot = await getDoc(eventRef);
    if (docSnapshot.exists()) {
      console.log(docSnapshot.data());
      return docSnapshot.data();
    } else {
      return null;
    }
  }
}

export default EventRepository;
