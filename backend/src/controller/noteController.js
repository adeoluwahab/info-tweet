import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({
      message: "Error fetching notes",
      error: error.message,
    });
  }
}

export async function getNotesById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.error("Error fetching note:", error);
    res.status(500).json({ message: "Error fetching note", error });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res
      .status(201)
      .json({ message: "Notes created successfully", note: savedNote });
  } catch (error) {
    console.error("Error creating notes:", error);
    res.status(500).json({ message: "Error creating notes", error });
  }
}

export async function updateNotes(req, res) {
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );
    res.status(200).json({ message: "Notes updated successfully", note });
  } catch (error) {
    console.error("Error updating notes:", error);
    res.status(500).json({ message: "Error updating notes", error });
  }
}

export async function deleteNotes(req, res) {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Notes deleted successfully" });
  } catch (error) {
    console.error("Error deleting notes:", error);
    res.status(500).json({ message: "Error deleting notes", error });
  }
}
