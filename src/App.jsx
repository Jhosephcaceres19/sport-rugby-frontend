import { Article } from "./landingpage/Article";
import { Footer } from "./landingpage/Footer";
import { Navbar } from "./landingpage/Navbar";

// App.js
export const App = () => {
  return (
    <div className='bg-[#9fd5d1] flex flex-col min-h-screen'>
      <Navbar/>
      <Article/>
      <Footer/>
    </div>
  );
};
