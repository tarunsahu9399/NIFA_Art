import Footer from "./Components/Footer";
import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import SliderImg from "./Components/SliderImg";
import StudentWork from "./Components/StudentWork";
import Updates from "./Components/Updates";
import WelcomeNote from "./Components/WelcomeNote";
import Courses from "./CoursesPage/Courses";

function App() {
  return (
    <>
      <Header1 />
      <Header2 />
      <SliderImg />
      <Updates/>
      <WelcomeNote/>
      <Courses/>
      <StudentWork/>
      <Footer/>
    </>
  );
}

export default App;
