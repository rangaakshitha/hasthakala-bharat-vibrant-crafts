import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import CraftCategory from "./pages/CraftCategory";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import SubCategoryDetail from "./pages/SubCategoryDetail";
import ChatBot from './components/ChatBot';
import BuyProducts from './pages/BuyProducts';
import CraftWorkshops from "./pages/CraftWorkshops";
import ReviewsPage from "./pages/Reviews";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

// Wrapper to use location and hide chatbot on specific routes
const AppWrapper = () => {
  const location = useLocation();
  const hideChatbotOnPaths = ['/login', '/create-account'];
  const shouldHideChatbot = hideChatbotOnPaths.includes(location.pathname);

  return (
    <>
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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Show ChatBot on all pages except login/create */}
      {!shouldHideChatbot && <ChatBot />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <AppWrapper />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
