
const Achivements = () => {
  const achievements = [
    { 
      "img":"/certifications/1.png",
    },
    {
      "img":"/certifications/2.png",
    },
    {
      "img":"/certifications/3.png",
    },
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 ">
      <h2 className="text-lg sm:text-2xl font-semibold text-white mb-4 relative inline-block text-center">
        <span className="relative z-5 bg-slate-500 p-2 rounded-lg px-6 font-light">
          Achievements
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 ">
            <img src={achievement.img} alt={`Achievement ${index + 1}`} className="w-full h-auto rounded-md" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achivements