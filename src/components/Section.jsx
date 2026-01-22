function Section({ title, items, image }) {
  return (
    <section className="h-full">
      <div className="h-full">
        <div className="bg-white  rounded-xl  p-10 text-center  min-h-[280px] flex flex-col justify-center
          shadow-[0_10px_30px_rgba(56,189,248,0.25)]
          hover:shadow-[0_15px_40px_rgba(56,189,248,0.35)]
          transition-shadow duration-300 ">

          {image && (
            <img src={image} lt={title} className="w-20 h-20 mx-auto mb-6 object-contain" />)}

          <h3 className="text-3xl font-bold text-slate-800 mb-6">
            {title}
          </h3>

          <p className="text-slate-600 text-lg leading-relaxed">
            {items}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section;


