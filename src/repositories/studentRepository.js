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
  async addStudent(name, eventId) {
    const docRef = await addDoc(collection(db, "events", eventId, "students"), {
      name: name,
    });
    console.log("Document written with ID: ", docRef.id);
  }

  async deleteStudent(studentId, eventId) {
    await deleteDoc(doc(db, "events", eventId, "students", studentId));
    console.log("Document deleted with ID: ", studentId);
  }

  async updateStudent(studentId, updatedData, eventId) {
    await updateDoc(
      doc(db, "events", eventId, "students", studentId),
      updatedData
    );
    console.log("Document updated with ID: ", studentId);
  }

  async getAllStudents(eventId) {
    let students = [];
    const querySnapshot = await getDocs(
      collection(db, "events", eventId, "students")
    );
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

  async registerWatchedPresentations(studentId, presentationId, eventId) {
    const studentRef = doc(db, "events", eventId, "students", studentId);

    await updateDoc(studentRef, {
      watchedPresentations: arrayUnion(presentationId),
    });
    console.log(
      `Presentation ${presentationId} added to watchedPresentations for student ${studentId}`
    );
  }

  async removeWatchedPresentation(studentId, presentationId, eventId) {
    const studentRef = doc(db, "events", eventId, "students", studentId);
    await updateDoc(studentRef, {
      watchedPresentations: arrayRemove(presentationId),
    });
  }

  async getWatchedPresentations(studentId, eventId) {
    const studentRef = doc(db, "events", eventId, "students", studentId);
    const studentDoc = await getDoc(studentRef);

    if (studentDoc.exists()) {
      const studentData = studentDoc.data();
      return studentData.watchedPresentations || [];
    } else {
      return [];
    }
  }

  async getAllStudentsFromAllEvents() {
    try {
      const eventsQuery = await getDocs(collection(db, "events"));

      const allStudents = [];

      for (const eventDoc of eventsQuery.docs) {
        const studentsQuery = await getDocs(
          collection(eventDoc.ref, "students")
        );
        studentsQuery.forEach((studentDoc) => {
          const studentData = studentDoc.data();
          allStudents.push({
            eventId: eventDoc.id,
            eventTheme: eventDoc.data().theme,
            studentId: studentDoc.id,
            ...studentData,
          });
        });
      }

      return allStudents;
    } catch (error) {
      console.error("Error getting students from Firestore:", error);
      return [];
    }
  }
}

export default StudentRepository;
