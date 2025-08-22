const { useState } = React;

function Header() {
  return (
    <header>
      <h1>Dinesh Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm Dinesh. I'm a passionate developer specializing in web technologies.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>Portfolio Website</li>
        <li>Todo App</li>
        <li>Blog Platform</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: dinesh@example.com</p>
    </section>
  );
}

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
