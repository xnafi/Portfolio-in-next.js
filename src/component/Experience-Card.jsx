function ExperienceCard({ h1, h2, id }) {
  return (
    <div
      id={id}
      className="flex w-full lg:w-[80%] lg:mx-auto cursor-pointer flex-col bg-slate-700 p-4 rounded-lg justify-center items-center space-y-3 hover:scale-105 transition-all ease-in-out"
    >
      <div className="text-3xl">{h1}</div>
      <div className="lg:text-sm font-bold text-[12px]">
        <h2>{h2}</h2>
      </div>
    </div>
  );
}

export default ExperienceCard;
