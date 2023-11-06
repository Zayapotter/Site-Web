import React, { useState } from 'react';

function estNomValide(nom: string): boolean {
  return /^[A-Z]+$/.test(nom);
}

function estPrenomValide(prenom: string): boolean {
  return /^[A-Z][a-zA-Z]*$/.test(prenom);
}
function estAdresseValide(adresse: string): boolean {
    // Vérifier que l'adresse ne dépasse pas 100 caractères et ne contient pas de caractères spéciaux
    return adresse.length <= 100 && /^[a-zA-Z0-9\s]+$/.test(adresse);
}

function estEmailValide(email: string): boolean {
    // Expression régulière pour valider une adresse e-mail avec les domaines .com ou .fr
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|fr)$/;
  
    return regex.test(email);
}

export const Formulaire_Per =()=>{
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [adresse, setAdresse] = useState('');
    const [nomErreur, setNomErreur] = useState('');
    const [prenomErreur, setPrenomErreur] = useState('');
    const [ageErreur, setAgeErreur] = useState('');
    const [emailErreur, setEmailErreur] = useState('');
    const [adresseErreur, setAdresseErreur] = useState('');
    const [formulaireSoumis, setFormulaireSoumis] = useState(false);
    
    const valider = (event: React.FormEvent) => {
        event.preventDefault();
        setNomErreur('');
        setPrenomErreur('');
        setAgeErreur('');
        setEmailErreur('');
        setAdresseErreur('');
        

        if (!estNomValide(nom)) {
            setNomErreur ("*Le nom doit être en majuscules et ne contenient ni chiffres ni symboles.");
          
        }
        if (!estPrenomValide(prenom)) {
            setPrenomErreur ("*Le prénom doit commencer par une majuscule et ne contenient ni chiffres ni symboles.");
          
        }
        if (!estAdresseValide(adresse)) {
            setAdresseErreur("L'adresse est invalide. Elle ne doit pas dépasser 100 caractères et ne doit pas contenir de caractères spéciaux.");
            
        }
        if (!estEmailValide(email)) {
            setEmailErreur("L'adresse e-mail est invalide. Veuillez utiliser une adresse e-mail valide avec le domaine .com ou .fr.");
        
        }
        const ageValue = parseInt(age, 10);
        if (isNaN(ageValue) || ageValue <= 18) {
            setAgeErreur("*L'âge doit être supérieur à 18 ans.");
          
        }
        
        setFormulaireSoumis(true);
    };
        
        
        
    return(

        <main className="ml-5">
            <nav >
                <h2 id="titreCV" className="border-2 text-center bg-[#ddb6f7] ">Formulaire de mon CV<i className="fa-solid fa-user-tie"></i>  </h2>
            </nav>
            <br></br>
            <form id="myForm" onSubmit={valider}>
                <div className="max-w-3xl border-2 p-3 rounded-lg shadow-xl shadow-black bg-white">
                    <legend id="titreSection" className="Slabo text-lg" ><h2><u><i className="fa-solid fa-pen-to-square"></i>Information personnels</u></h2></legend> <br></br>
                    <div>
                        <div >
                            <label htmlFor="Name">Nom:</label>
                            <input className="border ml-2 rounded-md" type="text" id="Name"  name= "Name"  placeholder="Ex: Potter" required value={nom} onChange={(e) => setNom(e.target.value)} /> 
                            {formulaireSoumis && nomErreur && <p style={{ color: 'red' }}>{nomErreur}</p>}<br></br>
                        </div>
                        <div>
                            <label htmlFor="Prénom">Prénom:</label>
                            <input className="border ml-2 rounded-md" type="text" id="Prénom" placeholder="Ex: Zaya" required value={prenom} onChange={(e) => setPrenom(e.target.value)} /> 
                            {formulaireSoumis && prenomErreur && <p style={{ color: 'red' }}>{prenomErreur}</p>}<br></br>
                        </div>
                    </div>

                    <label htmlFor="file"> photo:</label>
                    <input  type="file"id="file" name="file" accept="image/png, image/jpeg" required/> <br></br><br></br>

                    <label htmlFor="CIN" >CIN:</label>
                    <input  className="border ml-2 rounded-md" type="text" id="CIN" required /> <br></br><br></br>

                    <label htmlFor="Adresse">Adresse :</label>
                    <input className="border ml-2 rounded-md" type="text" id="Adresse" required value={adresse} onChange={(e) => setAdresse(e.target.value)} />
                    {formulaireSoumis && adresseErreur && <p style={{ color: 'red' }}>{adresseErreur}</p>} <br></br><br></br>

                    <div >
                            <div >
                        <label htmlFor="phone">Telephone:</label>
                        <input  className="border ml-2 rounded-md" type="tel" id="phone" placeholder="0645-326589" required /> <br></br><br></br>
                            </div>
                            <div >
                        <label htmlFor="email">E-mail:</label>
                        <input className="border ml-2 rounded-md" type="email" id="email" placeholder="hhhhoos6@gmail.com"  required value={email} onChange={(e) => setEmail(e.target.value)} />
                        {formulaireSoumis && emailErreur && <p style={{ color: 'red' }}>{emailErreur}</p>} <br></br>
                            </div>
                    </div>

                    <label htmlFor="age">Âge :</label>
                    <input  className="border ml-2 rounded-md" type="number" id="age"  required value={age} onChange={(e) => setAge(e.target.value)}/> 
                    {formulaireSoumis && ageErreur && <p style={{ color: 'red' }}>{ageErreur}</p>}<br></br>

                    <label htmlFor="naissance">date de naissance :</label>
                    <input  className="border ml-2 rounded-md" type="date" id="naissance" required /> <br></br><br></br>

                    <label htmlFor="situation familiale">situation familiale: </label>

                    <label htmlFor="célibataire">célibataire </label>
                    <input type="radio" id="célibataire" value="célibataire" name="situation familiale" required /> 

                    <label htmlFor="Marié(e)">Marié(e) </label>
                    <input type="radio" id="Marié(e)" value="Marié(e)" name="situation familiale" required /> <br></br><br></br>

                </div> <br></br>
                <br></br><br></br>
            </form>
        </main>
    )
}
