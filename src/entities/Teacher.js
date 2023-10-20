class Teacher {
  constructor(name, email, id = null) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  toMap() {
    return {
      name: this.name,
      email: this.email,
    };
  }
}

export default Teacher;
