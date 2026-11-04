export default function CurrentResearch() {
  return (
    <section className="current-research" aria-labelledby="current-research-heading">
      <h2 id="current-research-heading">Current research</h2>
      <p>
        The central question of my master&apos;s thesis is: <strong>How can the theory of quantum computation contribute to AI safety?</strong> We began by studying the detection of AI-generated content (watermarking), which led us to a quantum watermarking scheme designed so that a quantum polynomial-time (QPT) algorithm can detect whether content is AI-generated while a classical polynomial-time (CPT) algorithm cannot.
      </p>
      <p>
        To the best of our knowledge, this is the first construction of its kind. A cryptographic watermarking scheme must satisfy two demanding requirements at the same time: pseudorandomness and robustness. Pseudorandomness is needed to make the watermarked text indistinguishable from ordinary text, while robustness allows the detector to tolerate errors introduced during transmission or modification.
      </p>
      <p>
        Our research therefore requires a new classical primitive whose outputs are classically pseudorandom but remain error-tolerant. It must also support detection by QPT algorithms while preventing a CPT adversary from recognizing outputs produced by the primitive.
      </p>
    </section>
  );
}
