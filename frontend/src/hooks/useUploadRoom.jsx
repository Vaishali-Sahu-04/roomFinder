import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from 'axios';

const useUploadRoom = () => {

    const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

    const uploadRoom = async({price, location, availableFor, type, available, ownerPhone, area,
        beds, baths, balcony, furnished, electricity, constructionAge,images}) => {

        const success = handleInputErrors({price, location, availableFor, type, available, ownerPhone, area,
            beds, baths, balcony, furnished, electricity, constructionAge, images});
		if (!success) return;
		setLoading(true);

		const formData = new FormData();

		// Append regular form fields
		formData.append('price', price);
		formData.append('location', location);
		formData.append('availableFor', availableFor);
		formData.append('type', type);
		formData.append('available', available);
		formData.append('ownerPhone', ownerPhone);
		formData.append('area', area);
		formData.append('beds', beds);
		formData.append('baths', baths);
		formData.append('balcony', balcony);
		formData.append('furnished', furnished);
		formData.append('electricity', electricity);
		formData.append('constructionAge', constructionAge);

		// Append images
		images.forEach((image, index) => {
			formData.append('images', image); // Append images with field name 'images'
		});		

		try {
			const response = await axios.post("http://localhost:5000/api/rooms/uploadroom", 
			formData,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			} );

			console.log(response.data.data);
			const data = response.data.data;
			if (data.error) {
				throw new ApiError(400, data.error);
			}
			navigate('/my-rooms');
            toast.success("Room uploaded successfully");
		} 
		catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, uploadRoom };
}

export default useUploadRoom;

function handleInputErrors({price, location, availableFor, type, available, ownerPhone, area,
    beds, baths, balcony, furnished, electricity, constructionAge,images}) {
        console.log("Price:", price);
        console.log("Location:", location);
        console.log("Available For:", availableFor);
        console.log("Type:", type);
        console.log("Available:", available);
        console.log("Owner Phone:", ownerPhone);
        console.log("Area:", area);
        console.log("Beds:", beds);
        console.log("Baths:", baths);
        console.log("Balcony:", balcony);
        console.log("Furnished:", furnished);
        console.log("Electricity:", electricity);
        console.log("Construction Age:", constructionAge);
		console.log("Images:", images);
	if (!price || !location || !availableFor || !type || !available || !ownerPhone || !area ||
            !beds || !baths || !balcony || !furnished || !electricity || !constructionAge || !images) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}
