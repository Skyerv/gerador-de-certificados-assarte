import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../FirebaseConfiguration";

class EventInfoRepository {
  async edit(eventInfo) {
    const eventInfoRef = doc(db, "eventInfo", "ID");
    await setDoc(eventInfoRef, eventInfo.toMap());
  }

  async get() {
    const eventInfoRef = doc(db, "eventInfo", "ID");
    const docSnapshot = await getDoc(eventInfoRef);
    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      return null;
    }
  }
}

export default EventInfoRepository;
