import { useState } from "react";

function SortingPage(){
    const initialForm = {
        fruitName: '',
        quantity: ''
    }
    const [formData, setFormData] = useState(initialForm);
    const [fruitList, setFruitList] = useState([]);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }

    const addHandler = () => {
        setFruitList([...fruitList, formData]);
        setFormData(initialForm)
    }

    const nameSortHandler = () => {
        const resultArray = [...fruitList].sort(
            (a, b) => a.fruitName.localeCompare(b.fruitName)
        )
        setFruitList(resultArray);
    }

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold mb-4">Sorting</h1>
            <span>It sort the fruit list. The fruit item can be inserted by filling the data section. Then the list can be sorted by name or quantity</span>
            <h2 className="text-2xl font-bold mb-4 mt-10">Data</h2>
            <div className="border-2 border-gray-200 p-6 rounded mb-6">
                <label className="font-bold pb-2">Fruit Name</label>
                <input 
                    type="text"
                    name="fruitName"
                    onChange={inputChange}
                    value={formData.fruitName}
                    className="bg-white w-full border-gray-200 border-2 p-2"
                />
                <label className="font-bold pb-2">Quantity</label>
                <input 
                    type="text"
                    name="quantity"
                    onChange={inputChange}
                    value={formData.quantity}
                    className="bg-white w-full border-gray-200 border-2 p-2"
                />
                <button className="bg-blue-600 px-4 py-2 rounded mt-6 text-white font-bold" onClick={addHandler}>Add</button>
            </div>

            <h2 className="text-2xl font-bold mb-4">Result</h2>
            <div className="p-6 rounded border-2 border-gray-200">
                {
                    fruitList.map((data, index) => (
                        <div key={index}> {data.fruitName} - {data.quantity} </div>
                    ))
                }
                <button className="bg-blue-600 px-4 py-2 rounded mt-6 mr-3 text-white font-bold" onClick={nameSortHandler}>Sort by name</button>
                <button className="bg-blue-600 px-4 py-2 rounded mt-6 text-white font-bold" onClick={addHandler}>Sort by quantity</button>
                
            </div>

        </div>
            )
        }

export default SortingPage;