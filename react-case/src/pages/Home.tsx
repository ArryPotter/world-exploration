import { useState } from 'react';

function HomePage(){
    const [formData, setFormData] = useState({
        productName: '',
        quantity: ''
    });
    const [productList, setProductList] = useState<any[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleAddClick = () => {
        setProductList([...productList, formData]);
        setFormData({ productName: '', quantity: '' }); // Reset all at once
    }

    const handleSortByName = () => {
        const sortedList = [...productList].sort(
            (a, b) => a.productName.localeCompare(b.productName)
        );
        setProductList(sortedList);
    }

    const handleSortByQuantity = () => {
        const sortedList = [...productList].sort((a, b) => 
            Number(b.quantity) - Number(a.quantity)
        );
        setProductList(sortedList);
    }

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
            <p className="text-lg">This is the main landing page of the application.</p>
            <div className="bg-gray-300 p-6 rounded">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Product Name</label>
                    <input 
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                        placeholder="Enter Product Name..."
                        className="w-full p-2 border border-gray-400 rounded bg-white"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Quantity</label>
                    <input 
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="Enter quantity..."
                        className="w-full p-2 border border-gray-400 rounded bg-white"
                    />
                </div>
                <button 
                    onClick={handleAddClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add
                </button>
            </div>

            <div className="bg-gray-300 p-6 rounded mt-6">
                <p className="text-lg mb-4">Result.</p>
                <div className="mb-4 flex gap-2">
                    <button 
                        onClick={handleSortByName}
                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                    >
                        Sort by Name
                    </button>
                    <button 
                        onClick={handleSortByQuantity}
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                    >
                        Sort by Quantity (Desc)
                    </button>
                </div>
                {productList.length === 0 ? (
                    <p className="text-gray-600">No products added yet.</p>
                ) : (
                    productList.map((data, index) => 
                        (<div key={index} className='bg-amber-100 p-2 mb-2 rounded'>{data.productName} - Qty: {data.quantity}</div>)
                    )
                )}
            </div>
        </div>
    )
}

export default HomePage;