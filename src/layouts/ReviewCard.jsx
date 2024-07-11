export default function ReviewCard({
    title,
    content,
    date,
    image,
    onClick,
    isActive,
    user,
    review,
}) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer block w-[600px] h-[300px] my-[20px] bg-white rounded-lg shadow-md transition-transform duration-300 ${
                isActive ? "transform scale-105" : "transform scale-95"
            }`}
        >
            <div className="flex justify-center items-start pt-[30px] ">
                <div>
                    <img
                        src={user.image}
                        alt="Avatar"
                        className="w-[100px] h-[100px] rounded-full"
                    />
                </div>
                <div className=" p-4 ">
                    <div className="">
                        <div className="flex justify-between ">
                            <div className=" w-[150px] flex justify-between">
                                <div className="text-[20px] font-semibold">
                                    {user.name}
                                </div>
                                <div className="text-[16px]">age</div>
                            </div>
                            <div className="inline text-[12px] text-gray-400">
                                {date}
                            </div>
                        </div>
                        <div className="inline text-[12px] text-[#727272]">
                            {user.role}
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="inline-block text-[16px]">
                            {review.text}
                        </p>
                    </div>
                    {/* <div className="ml-4 flex justify-between items-center">
                        <h2 className="text-lg font-semibold">{user.name}</h2>
                        <p className="text-sm text-gray-600">{date}</p>
                    </div> */}
                </div>
            </div>{" "}
            <p className="text-gray-800">{content}</p>
        </div>
    );
}
