const MarketingCards = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
      
      {/* Card 1 */}
      <div className="group bg-pink-100 rounded-2xl p-6 shadow-lg text-center hover:bg-blue-50 transition-all duration-500 ease-in-out
     will-change-transform hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-[#DAA520]">Swipe & Match</h3>
        <p className="text-gray-600 group-hover:text-[#DAA520]">
          Discover people nearby and match instantly with a simple swipe.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-pink-100 rounded-2xl p-6 shadow-lg text-center hover:bg-blue-50 transition-all duration-500 ease-in-out
      will-change-transform hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-[#DAA520]">Chat Instantly</h3>
        <p className="text-gray-600 group-hover:text-[#DAA520]">
          Start conversations the moment you match. No waiting.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-pink-100 rounded-2xl p-6 shadow-lg text-center hover:bg-blue-50 transition-all duration-500 ease-in-out
        will-change-transform hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-[#DAA520]">Go Premium</h3>
        <p className="text-gray-600 group-hover:text-[#DAA520]">
          Unlock unlimited likes, boosts, and see who likes you.
        </p>
      </div>

    </div>
  );
};

export default MarketingCards;
