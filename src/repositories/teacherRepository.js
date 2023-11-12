import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../FirebaseConfiguration";

class TeacherRepository {
  async addTeacher(teacher) {
    const docRef = await addDoc(collection(db, "teachers"), teacher.toMap());
    console.log("Document written with ID: ", docRef.id);
  }

  async registerTeacher(email) {
    const teacherData = {
      email: email,
    };
    const docRef = await addDoc(
      collection(db, "teachersRegistered"),
      teacherData
    );
    console.log("Document written with ID: ", docRef.id);
  }

  async fetchTeacher() {
    let teachers = [];
    const querySnapshot = await getDocs(collection(db, "teachersRegistered"));
    querySnapshot.forEach((doc) => {
      const teacherData = doc.data();

      teachers.push({
        id: doc.id,
        ...teacherData,
      });
    });
    return teachers;
  }

  async deleteTeacher(teacherId) {
    await deleteDoc(doc(db, "teachersRegistered", teacherId));
    console.log("Teacher document deleted with ID: ", teacherId);
  }

  async updateTeacher(teacherId, updatedData) {
    await updateDoc(doc(db, "teachersRegistered", teacherId), updatedData);
    console.log("Teacher document updated with ID: ", teacherId);
  }
}

export default TeacherRepository;
