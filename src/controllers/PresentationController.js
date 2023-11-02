import { useState, useEffect, useCallback, useMemo } from "react";
import PresentationRepository from "../repositories/presentationRepository";
import Presentation from "../entities/Presentation";

const PresentationController = () => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [presenterName, setPresenterName] = useState("");
  const [responsibleName, setResponsibleName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [presentations, setPresentations] = useState([]);

  const presentationRepo = useMemo(() => new PresentationRepository(), []);

  const handleAddPresentation = async () => {
    if (
      title !== "" &&
      day !== "" &&
      startTime !== "" &&
      endTime !== "" &&
      presenterName !== "" &&
      responsibleName !== ""
    ) {
      const newPresentation = new Presentation(
        null,
        title,
        day,
        startTime,
        endTime,
        presenterName,
        responsibleName
      );

      await presentationRepo.add(newPresentation);
      resetForm();
      fetchPresentations();

      return "Apresentação realizada com sucesso";
    } else {
      return "Por favor insira todas as informações";
    }
  };

  const handleEditPresentation = async (presentationId) => {
    if (presentationId) {
      const updatedPresentation = new Presentation(
        presentationId,
        title,
        day,
        startTime,
        endTime,
        presenterName,
        responsibleName
      );

      await presentationRepo.update(presentationId, updatedPresentation);
      resetForm();
      fetchPresentations();
    }
  };

  const handleDeletePresentation = async (presentationId) => {
    await presentationRepo.delete(presentationId);
    fetchPresentations();
  };

  const fetchPresentations = useCallback(async () => {
    const allPresentations = await presentationRepo.getAll();
    setPresentations(allPresentations);
  }, [presentationRepo]);

  useEffect(() => {
    fetchPresentations();
  }, [fetchPresentations]);

  const resetForm = () => {
    setTitle("");
    setDay("");
    setStartTime("");
    setEndTime("");
    setPresenterName("");
    setResponsibleName("");
  };

  const fetchPresentationById = async (presentationId) => {
    try {
      const presentationData = await presentationRepo.fetchPresentationById(
        presentationId
      );
      setTitle(presentationData.title);
      setDay(presentationData.day);
      setStartTime(presentationData.startTime);
      setEndTime(presentationData.endTime);
      setPresenterName(presentationData.presenter);
      setResponsibleName(presentationData.responsible);
      return presentationData;
    } catch (error) {
      console.error("Error fetching presentation data:", error);
    }
  };

  function calculateDuration(startTime, endTime) {
    const startTimeParts = startTime.split(":");
    const endTimeParts = endTime.split(":");
    
    const startHours = parseInt(startTimeParts[0]);
    const startMinutes = parseInt(startTimeParts[1]);
    const endHours = parseInt(endTimeParts[0]);
    const endMinutes = parseInt(endTimeParts[1]);
    
    let durationHours = endHours - startHours;
    let durationMinutes = endMinutes - startMinutes;
    
    if (durationMinutes < 0) {
      durationHours--;
      durationMinutes += 60;
    }
    
    const durationString = `${durationHours.toString().padStart(2, '0')}:${durationMinutes.toString().padStart(2, '0')}`;
    
    return durationString;
  }

  return {
    title,
    setTitle,
    day,
    setDay,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    presenterName,
    setPresenterName,
    responsibleName,
    setResponsibleName,
    searchQuery,
    setSearchQuery,
    presentations,
    handleAddPresentation,
    handleEditPresentation,
    handleDeletePresentation,
    fetchPresentationById,
    calculateDuration,
  };
};

export default PresentationController;
