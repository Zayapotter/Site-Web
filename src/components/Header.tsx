export const Header = () => {
    return (
            <div className="bg-blue-300 bg-b w-1/8 h-auto  px-40 py-80 h-full ">
                <div className="flex items-center justify-center mb-10 "> </div>
                    <img className=' rounded-full w-32 border-2 mb-10'  src='/CVV.jpeg' alt='CVV'  />
                    <h1 className="text-3xl  flex justify-center underline decoration-solid font-serif text-white" id="titre"><strong>ZAYA Potter</strong></h1>
                        <h4 className="mt-3 mr-1 text-red-900 font-semibold ">ELEVE INGENIEUR OFFICIER DE RESERVE</h4><br></br>
                        <ul className="list-decimal ml-10 mt-3  ">
                            <li ><a className=" underline hover:text-[#881997] visited[blue]"href="#Informationspersonnels">Informations personnels</a></li>
                            <li><a className="underline  hover:text-[#881997] visited[blue] "href="#Objectifsprofessionnels">Objectifs professionnels</a></li>
                            <li><a className="underline  hover:text-[#881997] visited[blue]" href="#FormationetDiplômes">Formation et Diplômes</a></li>
                            <li><a  className="underline  hover:text-[#881997] visited[blue]"href="#CompétencesTechniques">Compétences Techniques</a></li>
                            <li><a  className="underline  hover:text-[#881997] visited[blue]"href="#CompétencesLinguistiques">Compétences Linguistiques</a></li>
                            <li><a  className="underline  hover:text-[#881997] visited[blue]"href="#Autres">Autres</a></li>
                        </ul>
            </div>
      

    );
}


