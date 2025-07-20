'use client';

import { useState } from 'react';

export default function ProjectModal({ title, description }: { title: string; description: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer border p-4 rounded hover:shadow-xl">
        <h3 className="font-bold text-xl">{title}</h3>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p>{description}</p>
            <button onClick={() => setOpen(false)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
