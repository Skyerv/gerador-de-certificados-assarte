import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../FirebaseConfiguration";
import Student from "../entities/Student";

class StudentRepository {
  async addStudent(name) {
    const docRef = await addDoc(collection(db, "students"), {
      name: name,
    });
    console.log("Document written with ID: ", docRef.id);
  }

  async deleteStudent(studentId) {
    await deleteDoc(doc(db, "students", studentId));
    console.log("Document deleted with ID: ", studentId);
  }

  async updateStudent(studentId, updatedData) {
    await updateDoc(doc(db, "students", studentId), updatedData);
    console.log("Document updated with ID: ", studentId);
  }

  async getAllStudents() {
    let students = [];
    const querySnapshot = await getDocs(collection(db, "students"));
    querySnapshot.forEach((doc) => {
      const studentData = doc.data();
      const student = new Student(
        doc.id,
        studentData.name,
        studentData.watchedPresentations
      );
      students.push(student);
    });
    return students;
  }

  async registerWatchedPresentations(studentId, presentationId) {
    const studentRef = doc(db, "students", studentId);

    await updateDoc(studentRef, {
      watchedPresentations: arrayUnion(presentationId),
    });
    console.log(
      `Presentation ${presentationId} added to watchedPresentations for student ${studentId}`
    );
  }

  async removeWatchedPresentation(studentId, presentationId) {
    const studentRef = doc(db, "students", studentId);
    await updateDoc(studentRef, {
      watchedPresentations: arrayRemove(presentationId),
    });
  }

  async getWatchedPresentations(studentId) {
    const studentRef = doc(db, "students", studentId);
    const studentDoc = await getDoc(studentRef);

    if (studentDoc.exists()) {
      const studentData = studentDoc.data();
      return studentData.watchedPresentations || [];
    } else {
      return [];
    }
  }
}

export default StudentRepository;
