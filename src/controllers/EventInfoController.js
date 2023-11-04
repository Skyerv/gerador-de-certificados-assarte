import { useState } from "react";
import EventInfo from "../entities/EventInfo";
import EventInfoRepository from "../repositories/eventInfoRepository";

const EventInfoController = () => {
  const [theme, setTheme] = useState("");
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [local, setLocal] = useState("");

  const edit = async () => {
    const eventInfo = new EventInfo(
      theme,
      startDay,
      endDay,
      description,
      local,
      phone
    );
    const eventInfoRepo = new EventInfoRepository();
    await eventInfoRepo.edit(eventInfo);
  };

  const get = async () => {
    const eventInfoRepo = new EventInfoRepository();
    const eventInfo = await eventInfoRepo.get();
    setTheme(eventInfo.theme);
    setStartDay(eventInfo.startDay);
    setEndDay(eventInfo.endDay);
    setDescription(eventInfo.description);
    setPhone(eventInfo.phone);
    setLocal(eventInfo.local);
  };

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
    edit,
    get,
  };
};

export default EventInfoController;
