import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";


const App = () => {

  const [contacts, setContacts] = useState([]);


  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
      <div className="flex relative flex-grow items-center">
      <FiSearch className="ml-1 text-white absolute text-3xl"/>

        <input 
        type="text" 
        className="h-10 pl-9 flex-grow text-white rounded-md border border-white bg-transparent " />
      </div>
      <AiFillPlusCircle className="text-5xl cursor-pointer text-white "/>
      </div>
    </div>
  )
}

export default App