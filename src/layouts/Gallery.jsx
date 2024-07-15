import { useApi } from "../contexts/managerPage/api-context";
import { useEffect, useState } from "react";

export default function Gallery() {
    const { data } = useApi();
    const [tourList, setTourList] = useState([]);
    const [mainImage, setMainImage] = useState("");
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        if (data && data.tours && data.tours.length > 0) {
            setTourList(data.tours);
            if (data.tours[0].images && data.tours[0].images.length > 0) {
                setMainImage(data.tours[0].images[0]);
            }
        }
    }, [data]);

    const handleThumbnailClick = (clickedImage) => {
        if (clickedImage !== mainImage) {
            setIsFading(true);
            setTimeout(() => {
                setMainImage(clickedImage);
                setIsFading(false);
            }, 600);
        }
    };

    return (
        <div className="max-w-[1000px] m-auto my-[65px]">
            <h2>ギャラリー</h2>
            <div className="flex justify-around mt-[30px]">
                <div
                    className={`relative w-[700px] h-[400px] rounded-lg overflow-hidden`}
                >
                    <img
                        src={mainImage}
                        alt="gallery-main-img"
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                            isFading ? "opacity-0" : "opacity-100"
                        }`}
                    />
                </div>
                <div className="flex flex-col justify-between">
                    {tourList.length > 0 &&
                        tourList[0].images &&
                        tourList[0].images.length > 0 &&
                        tourList[0].images.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => handleThumbnailClick(image)}
                            >
                                <img
                                    src={image}
                                    className="w-[240px] h-[85px] object-cover rounded-lg cursor-pointer"
                                    alt={`gallery-${index}`}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
