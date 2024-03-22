import Image from "next/image";
import Sidebar from "../components/Sidebar";
import FortuneBody from "../components/FortuneBody";

export default function Home() {
  return (
    <div className="flex contain">
      <Sidebar />
      <FortuneBody />
    </div>
  );
}
