import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {increment, fetchCats} from "./redux/slices";
import {useEffect, useState} from "react";
import {useFetchCats} from "./hooks";
import {useQueryClient} from "react-query";


function App(id) {
    // const catsData = useSelector((state) => state.catReducer.catsData)
    // const dispatch = useDispatch();

    const {data, error, isLoading} = useFetchCats()

    // const queryClient = useQueryClient()
    // console.log({queryClient})

    const [newFact, setNewFact] = useState(false);

    console.log(newFact, data)


    // useEffect(() => {
    //     dispatch(fetchCats())
    // }, [newFact, dispatch])

    return (
        <div className="App">
            <button onClick={() => {
                setNewFact(state => !state)
            }}>NEW FACT
            </button>

            {/*<h2>Data about cats with using Redux:</h2>*/}
            {/*<span>{catsData.fact}</span>*/}

            <br/>
            <br/>

            <h2>Data about cats with using React query:</h2>
            <span>{data.fact}</span>
        </div>
    );
}

export default App;
