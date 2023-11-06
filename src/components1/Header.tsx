export const Header = () => {
    return (
            <div>
                <div id="photoProfil">
                    <img src="image/WhatsApp Image 2023-10-02 at 20.50.42_4e599185.png" alt ="photo CV" className="w-1/2 mx-auto rounded-full"/> 
                </div>
                <br></br>
        
                <h1 className="text-3xl mb-1 flex justify-center underline decoration-solid font-serif text-white" id="titre"><strong>ZAYA Potter</strong></h1>
                <nav className="text-xs  flex justify-center  ">ELEVE INGENIEUR OFFICIER DE RESERVE</nav><br></br>
                <div id="blockContact" className="px-4 lg:px-16 mt-3 ">
                    <div className="text-xl font-bold">Contact</div>
                    <div className="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span  > +212 762908598</span>
                    </div>
                    <div className="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-2 inline ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>  
                        <span ><a className=" underline  visited-[blue]" href="mailto:zayapotter34@gmail.com">  zayapotter34@gmail.com</a></span>
                    </div>
                    <div className="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-r h-5 inline">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        <span className="ml-1"> rue Oukaïmeden, 1er étage, appt. 6, Agdal </span>
                    </div>
                </div>
                <div id="blockProfil" className="px-4 lg:px-16 mt-3 border-t-2 p-4">
                    <div className="text-xl font-bold">Profil</div>
                    <div className="text-xs mt-2 ">
                      Élève ingénieur en génie informatique à l'École Mohammedia d'Ingénieurs et officier de réserve.
                      <br></br>Passionnée par la résolution de problèmes complexes et la conception de solutions innovantes, je suis déterminée, leader et capable de performer sous pression.
                    </div>
                </div>
                <div className="mt-5  border-t-2 p-4">
                    <ul className="list-decimal ml-10 mt-3 font-family text-black ">
                        <li><a className="underline  hover:text-[#881997] visited[blue] "href="#Objectifsprofessionnels">Objectifs professionnels</a></li>
                        <li><a className="underline  hover:text-[#881997] visited[blue]" href="#FormationetDiplômes">Formation et Diplômes</a></li>
                        <li><a  className="underline  hover:text-[#881997] visited[blue]"href="#CompétencesTechniques">Compétences Techniques</a></li>
                        <li><a  className="underline  hover:text-[#881997] visited[blue]"href="#CompétencesLinguistiques">Compétences Linguistiques</a></li>
                        <li><a  className="underline  hover:text-[#881997] visited[blue]"href="#Autres">Autres</a></li>
                    </ul>
                </div>
            </div>

    );
}


