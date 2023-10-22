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
      setTitle("");
      setDay("");
      setStartTime("");
      setEndTime("");
      setPresenterName("");
      setResponsibleName("");
      fetchPresentations();

      return "Apresentação realizada com sucesso";
    } else {
      return "Por favor insira todas as informações";
    }
  };

  const handleDeletePresentation = async (presentationId) => {
    await presentationRepo.delete(presentationId);
    fetchPresentations();
  };

  const handleEditPresentation = async (presentationId, currentTitle) => {
    const newTitle = prompt("Edit presentation title:", currentTitle);
    if (newTitle !== null) {
      await presentationRepo.update(presentationId, { title: newTitle });
      fetchPresentations();
    }
  };

  const fetchPresentations = useCallback(async () => {
    const allPresentations = await presentationRepo.getAll();
    setPresentations(allPresentations);
  }, [presentationRepo]);

  useEffect(() => {
    fetchPresentations();
  }, [fetchPresentations]);

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
    handleDeletePresentation,
    handleEditPresentation,
  };
};

export default PresentationController;
