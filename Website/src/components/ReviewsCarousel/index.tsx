import { reviews } from "../../Data/reviews";

const duplicated = [...reviews, ...reviews]; // So the loop feels infinite

const ReviewsMarquee = () => {
  return (
    <div className="overflow-hidden w-full py-20 relative">
      {/* Background bar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/15 w-[110%] h-[200px] bg-[#5d4fff] rounded-xl z-0" />

      {/* Review cards */}
      <div
        className="flex w-max animate-marquee gap-8 px-4 z-10 relative"
        style={{ animation: "marquee 60s linear infinite" }}
      >
        {duplicated.map((review, i) => (
          <div
            key={i}
            className="min-w-[320px] max-w-[420px] bg-gray-200/85 border border-black/35 rounded-xl shadow-md p-6 text-[#00579E] text-base flex-shrink-0 overflow-hidden"
          >
            <p className="italic mb-3 break-words whitespace-normal leading-relaxed">
              "{review.text}"
            </p>
            <p className="font-semibold text-black/70 truncate">– {review.name}</p>
            <p className="text-black/40 text-xs">{review.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsMarquee;
