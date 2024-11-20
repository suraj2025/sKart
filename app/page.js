import Image from "next/image";
import { Loader } from "rsuite";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
  <div className="relative w-20 h-20">
    <div className="absolute w-full h-full border-4 border-transparent border-t-red-500 rounded-full animate-spin"></div>
  </div>
  <p className="mt-4 text-gray-700">loading...</p>
</div>

  );
}
