
export const FORM_EXP=()=>{

    return(
        <main className="ml-5 ">
            <form id="myForm" >
                <div className="max-w-2xl border-2 p-3 rounded-lg shadow-xl shadow-black bg-white ">
                    <legend id="titreSection"className="Slabo text-lg" ><h2><u><i className="fa-solid fa-business-time"></i> Experience antérieur</u></h2></legend><br></br>

                    <label>Remplir ce qui suit:</label><br></br><br></br>
                    <ul></ul>
                        <li><label>stage:</label></li> <br></br>
                            <div className="ml-5">
                                <li><label htmlFor="organisation">le nom de l'organisation: </label>
                                <input className="border ml-2 rounded-md" type="text" id="organisation" name="stage" placeholder="nom de l'organisation" /></li> <br></br>

                                <li><label htmlFor="debut" >début de stage:</label>
                                <input className="border ml-2 rounded-md" type="date" name="stage" id="debut" value="debut"/></li><br></br>

                                <li><label htmlFor="fin">fin de stage:</label>
                                <input className="border ml-2 rounded-md" type="date" name="stage" id="fin" value="fin"/></li><br></br>

                                <li><label htmlFor="domaine">domaine de stage:</label></li>
                                    <select id="domaine" className="border ml-2 rounded-md">
                                        <optgroup label="cloud track">
                                            <option value="Cloud Service" >Cloud Service</option>
                                            <option value="Big Data">Big Data</option>
                                            <option value="AI">AI</option>
                                        </optgroup>
                                        <optgroup label="Network track">
                                            <option >Security</option>
                                            <option>Datacom</option>
                                            <option >WLAN</option>
                                        </optgroup>
                                        <optgroup label="Computing track">
                                            <option value="OpenEuler">OpenEuler</option>
                                            <option value="OpenGauss">OpenGauss</option>
                                            <option value="Kunpeng">Kunpeng</option>
                                        </optgroup>
                                    </select><br></br><br></br>

                                <li><label htmlFor="piece jointe">cetificat:</label>
                                <input type="file" id="piece jointe" name="stage" accept="file/pdf"/></li>
                            </div>

                            <br></br>
                        <li><label>Profession</label></li> <br></br>
                            <div className="ml-5">
                                <li><label htmlFor="nom_org">le nom d'organisation:</label>
                                <input className="border ml-2 rounded-md" type="text" id="nom_org"name="Profession" placeholder="nom de l'organisation"  /> </li><br></br>

                                <li><label htmlFor="lieu">lieu de travail:</label>
                                <input className="border ml-2 rounded-md" type="text" id="lieu" name="Profession" /></li> <br></br>

                                <li><label htmlFor="piece jointe" >cetificat:</label>
                                <input type="file" id="piece jointe" name="stage" accept="pdf" required/></li>

                            </div>
                </div>
                <br></br>
            </form>
            
        </main>
    )
}