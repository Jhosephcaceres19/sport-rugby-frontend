import { Article } from "./Article";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

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
