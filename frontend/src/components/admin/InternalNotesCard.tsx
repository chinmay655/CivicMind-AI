import { useState } from "react";
import { StickyNote } from "lucide-react";

interface Note {
  id: number;
  author: string;
  message: string;
  date: string;
}

const initialNotes: Note[] = [
  {
    id: 1,
    author: "Admin",
    message: "Complaint verified. Waiting for department assignment.",
    date: "31 Jul 2026",
  },
  {
    id: 2,
    author: "Rahul Sharma",
    message: "Site visit scheduled for tomorrow.",
    date: "01 Aug 2026",
  },
];

const InternalNotesCard = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (!newNote.trim()) return;

    const note: Note = {
      id: Date.now(),
      author: "Admin",
      message: newNote,
      date: new Date().toLocaleDateString(),
    };

    setNotes([note, ...notes]);
    setNewNote("");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-yellow-100 p-3">
          <StickyNote className="text-yellow-600" size={22} />
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            Internal Notes
          </h2>

          <p className="text-sm text-slate-500">
            Private notes visible only to administrators.
          </p>
        </div>
      </div>

      <textarea
        rows={4}
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Write an internal note..."
        className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500 resize-none"
      />

      <button
        onClick={handleAddNote}
        className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Add Note
      </button>

      <div className="mt-8 space-y-4">

        {notes.map((note) => (
          <div
            key={note.id}
            className="rounded-xl border border-slate-200 p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">
                {note.author}
              </h3>

              <span className="text-sm text-slate-500">
                {note.date}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-600">
              {note.message}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default InternalNotesCard;