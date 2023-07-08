import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI-Powred Prompts</span>
        </h1>
        <p className="desc text-center">Promptopia is an open-soutvr AI prompting tool for morden world to discover, create and share creative propts</p>
        <Feed />
    </section>
  )
}

export default Home