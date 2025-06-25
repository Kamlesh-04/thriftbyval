'use client';

export default function LegacyWrapper() {
  return (
    <main className="w-full h-screen bg-black p-4">
      <h1 className="text-white text-2xl mb-4">Wrapped Legacy HTML</h1>
      <iframe
        src="/legacy.html"
        className="w-full h-[90vh] border border-white"
        title="Legacy HTML"
      ></iframe>
    </main>
  );
}
