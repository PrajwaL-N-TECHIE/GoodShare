
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DonationsPage from "./pages/DonationsPage";
import DonatePage from "./pages/DonatePage";
import NGOsPage from "./pages/NGOsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import FoodDonationsPage from "./pages/FoodDonationsPage";
import ClothesDonationsPage from "./pages/ClothesDonationsPage";
import BookDonationsPage from "./pages/BookDonationsPage";
import FootwearDonationsPage from "./pages/FootwearDonationsPage";
import FurnitureDonationsPage from "./pages/FurnitureDonationsPage";
import ToysDonationsPage from "./pages/ToysDonationsPage";
import VolunteerPage from "./pages/VolunteerPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/donations" element={<DonationsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/ngos" element={<NGOsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donations/food" element={<FoodDonationsPage />} />
          <Route path="/donations/clothes" element={<ClothesDonationsPage />} />
          <Route path="/donations/books" element={<BookDonationsPage />} />
          <Route path="/donations/footwear" element={<FootwearDonationsPage />} />
          <Route path="/donations/furniture" element={<FurnitureDonationsPage />} />
          <Route path="/donations/toys" element={<ToysDonationsPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
