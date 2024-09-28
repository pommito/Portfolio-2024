export default function Home() {
  return (
    <main className="font-pp px-20">
      <section className="flex flex-col h-screen py-20">
        <h2 className="font-dot text-9xl mt-[20vh] ">Victor Lebecq</h2>
        <h1 className="text-9xl ml-20">Front end developer</h1>
        <p className="leading-[150%] ml-auto mt-auto text-right text-xl  w-[650px]">
          I’m a 24 years old developer based in France who likes to work with <b>React</b>, <b>Wordpress</b>, and{' '}
          <b>Laravel</b>. With a keen eye for design, I love crafting immersive and scalable experiences on the web.
          Together, let’s bring your projects to life.
        </p>
      </section>

      <section className="h-screen py-20">
        <h3 className="font-dot text-6xl mb-20">About me</h3>
        <p className="leading-[150%] text-xl">
          Passionate about technology since childhood, I enjoy finding
          <br /> solutions to solve problems. Currently based in Valencia, I work
          <br /> remotely for several clients on various projects as a freelancer.
          <br /> When I’m not coding, I’m probably skiing or exploring the mountains.
        </p>

        <h4 className="font-dot opacity-50 mt-20 mb-6">[ Work Experiences ]</h4>
        <ul>
          <li className="flex justify-between items-center py-4 border-b border-[#f1f1f1]/20">
            <div className="flex flex-col gap-1">
              <h5 className="text-xl font-medium">Freelance Web Developer</h5>
              <span className="font-dot text-sm opacity-50">[ March 2024 - Present ]</span>
            </div>
            <h6 className="font-pp text-xl opacity-50">Titan Informatique</h6>
            <h6 className="text-xl">Wordpress | Javascript | PHP</h6>
          </li>
          <li className="flex justify-between items-center py-4 border-b border-[#f1f1f1]/20">
            <div className="flex flex-col gap-1">
              <h5 className="text-xl font-medium">Freelance Web Developer</h5>
              <span className="font-dot text-sm opacity-50">[ March 2024 - Present ]</span>
            </div>
            <h6 className="font-pp text-xl opacity-50">Titan Informatique</h6>
            <h6 className="text-xl">Wordpress | Javascript | PHP</h6>
          </li>
          <li className="flex justify-between items-center py-4 border-b border-[#f1f1f1]/20">
            <div className="flex flex-col gap-1">
              <h5 className="text-xl font-medium">Freelance Web Developer</h5>
              <span className="font-dot text-sm opacity-50">[ March 2024 - Present ]</span>
            </div>
            <h6 className="font-pp text-xl opacity-50">Titan Informatique</h6>
            <h6 className="text-xl">Wordpress | Javascript | PHP</h6>
          </li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </main>
  );
}
