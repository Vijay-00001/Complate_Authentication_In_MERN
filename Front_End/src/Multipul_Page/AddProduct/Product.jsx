import React, { useState } from 'react'
import './Product.css'
import axios from 'axios';

const Product = () => {

    const [current, setValue] = useState({
        name: "", company: "", price: 0, brand: "", stock: 0, sold: 0, mostWonted: ""
    });

    const Hendel = (event) => {
        const { name, value } = event.target;

        setValue((pre) => {
            return { ...pre, [name]: value };
        });
    }
    const [Image, setImage] = useState('');
    console.log(current.mostWonted);

    const postData = async (e) => {
        e.preventDefault();

        // const { name, company, price, brand, stock, sold, most_Wonted } = current;
        console.log(current.most_Wonted);
        const url = 'http://localhost:5111/Uploading';
        const formData = await new FormData();
        formData.append('name', current.name);
        formData.append('company', current.company);
        formData.append('price', current.price);
        formData.append('brand', current.brand);
        formData.append('stock', current.stock);
        formData.append('sold', current.sold);
        formData.append('Image', Image);
        const data = await axios.post(url,formData,{
            headers: {
            "Authorization": localStorage.getItem("token")
            }
        }).then(console.log("Adding")).catch((e) => console.log(e));

        const responc = await data.json();
        console.log(responc);
        if (responc.status == 200) {
            window.alert("Ragistretion successfull.");
            console.log("Ragistretion successfull.");
        } else {
            window.alert("Invalid Ragistretion.");
            console.log("Invalid Ragistretion");
        }
    }

    return (
        <div className='table'>
            <form method="POST" enctype="multipart/form-data">
                <table>
                    <tr className='heading'><td colSpan={2}>Add Products on Your API</td></tr>
                    <tr>
                        <td>Product Name </td>
                        <td><input type="text"
                            name="name"
                            onChange={Hendel}
                            placeholder='Enter Product Name' /></td>
                    </tr>
                    <tr>
                        <td>Product Company </td>
                        <td><input type="text"
                            name="company"
                            onChange={Hendel}
                            placeholder='Enter Product Company' /></td>
                    </tr>
                    <tr>
                        <td>Product Price </td>
                        <td><input type="number"
                            name="price"
                            onChange={Hendel}
                            placeholder='Enter Product Price' /></td>
                    </tr>
                    <tr>
                        <td>Product Brand </td>
                        <td><input type="text"
                            name="brand"
                            onChange={Hendel}
                            placeholder='Enter Product Brand' /></td>
                    </tr>
                    <tr>
                        <td>Product Stock </td>
                        <td><input type="number"
                            name="stock"
                            onChange={Hendel}
                            placeholder='Enter Product Stock' /></td>
                    </tr>
                    <tr>
                        <td>Product Sold </td>
                        <td><input type="number"
                            name="sold"
                            onChange={Hendel}
                            placeholder='Enter Product Sold' /></td>
                    </tr>
                    <tr>
                        <td>Product Image </td>
                        <td><input type="file"
                            name="Image"
                            onChange={(e) => setImage(e.target.files[0])} /></td>
                    </tr>
                    <tr>
                        <td>Product Most_Wonted </td>
                        <td><select name='most_Wonted' onChange={Hendel}>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select></td>
                    </tr>
                </table>

                <button onClick={postData}>Add</button>
            </form>
        </div>
    )
}

export default Product
