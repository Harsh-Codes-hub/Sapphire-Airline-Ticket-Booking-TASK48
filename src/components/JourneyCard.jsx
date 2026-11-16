const JourneyCard = ({headline, subline, para}) => {
  return (
    <li className="w-[90%]">
      <article className="bg-(--off-white) py-6 px-4 flex flex-col items-start justify-between shadow-lg rounded-lg">
        <h4 className="font-heading font-semibold text-3xl text-(--yale-blue) tracking-wide mb-1">{headline}</h4>
        <h5 className="font-body tracking-wide font-semibold text-xl mb-4 text-(--ink-black)">{subline}</h5>
        <p className="font-body tracking-wide text-lg">{para}</p>
      </article>
    </li>
  )
}

export default JourneyCard
