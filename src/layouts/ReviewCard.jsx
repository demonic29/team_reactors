export default function ReviewCard({
    title,
    content,
    date,
    avatar,
    onClick,
    isActive,
}) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer w-[600px] h-[400px] bg-white rounded-lg shadow-md transition-transform duration-300 ${
                isActive ? "transform scale-105" : "transform scale-95"
            }`}
        >
            <div className="flex items-center mb-4">
                <img
                    src={avatar}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm text-gray-600">{date}</p>
                </div>
            </div>
            <p className="text-gray-800">{content}</p>
        </div>
    );
}
