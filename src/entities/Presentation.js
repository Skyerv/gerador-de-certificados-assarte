class Presentation {
  constructor(id, title, day, startTime, endTime, presenter, responsible) {
    this.id = id;
    this.title = title;
    this.day = day;
    this.startTime = startTime;
    this.endTime = endTime;
    this.presenter = presenter;
    this.responsible = responsible;
  }

  toMap() {
    return {
      title: this.title,
      day: this.day,
      startTime: this.startTime,
      endTime: this.endTime,
      presenter: this.presenter,
      responsible: this.responsible,
    };
  }
}

export default Presentation;
