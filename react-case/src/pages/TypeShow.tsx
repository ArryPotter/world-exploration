import { useState } from "react";

function TypeShowPage(){
    const [description, setDescription] = useState('');

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    return (
        <div className="p-8 w-300 mx-auto ">
           <div className="w-250 mx-auto font-sans font-bold text-3xl my-3"  >Type and Show Page</div>
           <div className="w-250 mx-auto font-sans my-3"  >Showing the result to the user in near real time as they type.<br/> Try to type in description field</div>
           <div className="w-250 border-gray-200 border-2 h-20 rounded mx-auto p-6">
                <span className="w-full font-bold">Result</span>
                <div>{description}</div>            
            </div>
            <div className="w-250  border-gray-200 border-2 rounded mt-6 p-6 mx-auto">
                <label className="font-bold">Description</label>
                <input type="text" name='description' value={description} 
                    className="w-full border-gray-200 border-2  rounded p-2 mt-4"
                    placeholder="Description"
                    onChange={inputHandler}/>
            </div>            
        </div >
    )
}

export default TypeShowPage;