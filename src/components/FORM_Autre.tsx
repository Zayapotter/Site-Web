import React, { useState } from 'react';

function estDescriptionValide(description: string): boolean {
    // Vérifier que la description est un paragraphe et ne contient pas de chiffres ou de caractères spéciaux
    return /^[A-Za-z\s.,;!?'"()]+$/.test(description);
}


export const FORM_Autre=()=>{
    const [description, setDescription] = useState('')
    const [descriptionErreur, setDescriptionErreur] = useState('');
    const [formulaireSoumis, setFormulaireSoumis] = useState(false);

    function valider(event: React.FormEvent) {
        event.preventDefault();
        setDescriptionErreur('');
        if (!estDescriptionValide(description)) {
            setDescriptionErreur("La description doit être un paragraphe et ne doit pas contenir de chiffres ou de caractères spéciaux.");
        }
        
        setFormulaireSoumis(true);
    }
    return(
        <main className="ml-5 ">
            <form id="myForm" onSubmit={valider}>
                <div className="max-w-2xl border-2 p-3 rounded-lg shadow-xl shadow-black bg-white">
                    <legend className="Slabo text-lg" ><h2><u><i className="fa-solid fa-question"></i> Autres</u></h2></legend><br></br>
                    <div className="ml-5">
                        <li><label>Loisir: </label></li><br></br>

                            <label htmlFor="lecture">lecture</label>
                            <input type="checkbox" name="Loisir" id="lecture" value="lecture" />

                            <label htmlFor="sport">Sport</label>
                            <input type="checkbox" name="Loisir" id="sport" value="Sport" />

                            <label htmlFor="Art">Art</label>
                            <input type="checkbox" name="Loisir" id="Art" value="Art" />

                            <label htmlFor="Pas">Passions</label>
                            <input type="checkbox" name="Pas" id="Pas" value="Passions" /><br></br><br></br>


                        <li><label htmlFor="description" >description:</label><br></br><br></br>
                        <textarea  defaultValue="" className="border ml-2 rounded-md resize-none" id="description" rows={7} cols={70} value={description} onChange={(e) => setDescription(e.target.value)}></textarea></li>
                        {formulaireSoumis && descriptionErreur && <p style={{ color: 'red' }}>{descriptionErreur}</p>} <br></br><br></br>
                    </div>
                </div>
                <br></br>
                

            </form>
        </main>
    )
}
/*<button className="border px-3 ml-2 rounded-md bg-[#0D9DF3] hover:text-[lightgreen]" type="reset">Reset</button><br></br><br></br>
                <button type="submit" className="border px-3 ml-2 rounded-md bg-[#0D9DF3] hover:text-[lightgreen]">Submit</button>*/ 