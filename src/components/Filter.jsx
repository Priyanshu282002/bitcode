import { useRecoilState } from "recoil";
import { QuestionData } from "../recoil/Question";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Filter({filterData,category,setCategory}){

    const [Question, setQuestion] = useRecoilState(QuestionData);
    const navigate = useNavigate();
    const AllQuestion = async (api) => {
    const QuestionData = await axios.get(
      `http://localhost:4000/api/v1/Practice/${api}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    setQuestion(QuestionData.data.groupedQuestions);
  };
  

  function filterHandler(title){
      setCategory(title);
      AllQuestion(title);
  }

  return(
      <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
          {
              filterData.map((data)=>{
              return(
                  <button key={data.id} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                  ${category===data.api?"bg-opacity-60 border-white":"bg-opacity-40 border-transparent"}
                  `} onClick={()=>filterHandler(data.api)}>
                      {data.title}
                  </button>);
              })
          }
      </div>
  );
}

export default Filter;