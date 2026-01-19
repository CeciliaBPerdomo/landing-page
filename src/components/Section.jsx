function Section({ title, items }) {
  return (
    <section>
      <h2>
        {title}
      </h2>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Section;

