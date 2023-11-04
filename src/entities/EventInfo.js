class EventInfo {
  constructor(theme, startDay, endDay, description, local, phone) {
    this.theme = theme;
    this.startDay = startDay;
    this.endDay = endDay;
    this.description = description;
    this.local = local;
    this.phone = phone;
  }

  toMap() {
    return {
      theme: this.theme,
      startDay: this.startDay,
      endDay: this.endDay,
      description: this.description,
      local: this.local,
      phone: this.phone,
    };
  }
}

export default EventInfo;
