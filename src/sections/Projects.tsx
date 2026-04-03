import ProjectCanvas from "../components/Canvas/ProjectCanvas";

const Projects = () => {
  return (
    <section className="bg-black text-white">
      <header className="md:mb-10">
        <h1 className="text-5xl text-center"> Projetos </h1>
        <p className="text-xl text-center">
          Conheça um pouco dos meus projetos!
        </p>
      </header>
      <main className="flex ">
        <div className="relative h-150 w-1/2">
          <ProjectCanvas video="test" />
        </div>
        <div className="text-xl w-1/2 py-20 pr-30">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab alias
          assumenda animi veniam maiores, sit magnam doloremque odit dolores
          placeat eveniet laborum debitis in officia labore cupiditate incidunt
          voluptatibus nulla?
        </div>
      </main>
    </section>
  );
};

export default Projects;
