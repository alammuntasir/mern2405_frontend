import Header from "@/components/Header";
import Banner from "@/components/home/Banner";
import { Home } from "lucide-react";

export default function MainLayout({ children }) {
  return (
    <main>

      <Header/>
      

     
    

      {children}
    </main>
  );
}
