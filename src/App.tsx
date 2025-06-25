
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import CraftCategory from "./pages/CraftCategory";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import SubCategoryDetail from "./pages/SubCategoryDetail";
import ChatBot from './components/ChatBot';
import BuyProducts from './pages/BuyProducts';
import CraftWorkshops from "./pages/CraftWorkshops";
import ReviewsPage from "./pages/Reviews";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/craft/:category" element={<CraftCategory />} />
          <Route path="/category/:category/:subcategory" element={<SubCategoryDetail />} />
          <Route path="/workshops" element={<CraftWorkshops />} />
          <Route path="/buy-products" element={<BuyProducts />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
