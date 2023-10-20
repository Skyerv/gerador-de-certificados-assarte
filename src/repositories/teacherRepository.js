import { addDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseConfiguration";

class TeacherRepository {
  async addTeacher(teacher) {
    const docRef = await addDoc(collection(db, "teachers"), teacher.toMap());
    console.log("Document written with ID: ", docRef.id);
  }
}

export default TeacherRepository;
