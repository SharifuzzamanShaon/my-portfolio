    const LeetCodeProfile = () => {
  const username = "SharifuzzamanShaon";

  return (
    <div className="p-4 text-center">
      <h2 className="text-md font-semibold mb-4 text-center">My LeetCode Profile</h2>

      {/* LeetCode Profile Link */}
      <a
        href={`https://leetcode.com/u/${username}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline "
      >
        Visit My LeetCode
      </a>
      {/* LeetCode Stats Image */}
      <div className="mt-6">
        <img
          src={`https://leetcard.jacoblin.cool/${username}`}
          alt="LeetCode Stats"
          className="w-full max-w-xl justify-center items-center mx-auto"
        />
      </div>
    </div>
  );
};

export default LeetCodeProfile;
