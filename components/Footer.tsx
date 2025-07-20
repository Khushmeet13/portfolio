export default function Footer() {
  return (
    <>
    <div className="h-3 w-full bg-gradient-to-t from-black to-gray-700" />
    <footer className="bg-black text-white text-center py-2 font-mono">
      <p>© {new Date().getFullYear()}. Khushmeet Saini. My Portfolio. All rights reserved.</p>
    </footer>
    </>
  );
}
