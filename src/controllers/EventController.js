import { useState } from "react";
import Event from "../entities/Event";
import EventRepository from "../repositories/eventRepository";

const EventController = () => {
  const [theme, setTheme] = useState("");
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [local, setLocal] = useState("");

  const add = async () => {
    const eventInfo = new Event(
      null,
      theme,
      startDay,
      endDay,
      description,
      local,
      phone
    );
    const eventRepo = new EventRepository();
    await eventRepo.add(eventInfo);
  };

  const getLastAddedEvent = async () => {
    const eventInfoRepo = new EventRepository();
    const eventInfo = await eventInfoRepo.getLastAddedEvent();

    if (eventInfo) {
      setTheme(eventInfo.theme);
      setStartDay(eventInfo.startDay);
      setEndDay(eventInfo.endDay);
      setDescription(eventInfo.description);
      setPhone(eventInfo.phone);
      setLocal(eventInfo.local);
      return eventInfo;
    } else {
      console.log("No events found.");
    }
  };

  // const get = async () => {
  //   const eventInfoRepo = new EventRepository();
  //   const eventInfo = await eventInfoRepo.get();
  //   setTheme(eventInfo.theme);
  //   setStartDay(eventInfo.startDay);
  //   setEndDay(eventInfo.endDay);
  //   setDescription(eventInfo.description);
  //   setPhone(eventInfo.phone);
  //   setLocal(eventInfo.local);
  // };

  return {
    theme,
    setTheme,
    startDay,
    setStartDay,
    endDay,
    setEndDay,
    description,
    setDescription,
    phone,
    setPhone,
    local,
    setLocal,
    add,
    getLastAddedEvent,
  };
};

export default EventController;
