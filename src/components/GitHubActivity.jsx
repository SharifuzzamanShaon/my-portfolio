const GitHubProfile = () => {
  const username = "SharifuzzamanShaon";

  return (
    <div className="p-4 justify-center items-center text-white text-center">
      <h2 className="text-md font-semibold mb-4 text-center"> GitHub Activity</h2>
      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Visit My GitHub
      </a>
      <div className="mt-6">
        <img
          src={`https://ghchart.rshah.org/${username}`}
          alt="GitHub Contributions Chart"
          className="w-full max-w-lg"
        />
      </div>
      <div className="mt-6">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default`}
          alt="GitHub Stats"
          className="w-100% max-w-md justify-center items-center mx-auto"
        />
      </div>
    </div>
  );
};

export default GitHubProfile;
