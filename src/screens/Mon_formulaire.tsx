import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type FormInput = {
  nom: string,
  prenom: string,
  file: File,
  CIN: string,
  email: string,
  adresse: string,
  tel: Number,
  age: number,
  naissance: Date,
  situation: string,
  
  organisation_stage: string,
  debut_stage: Number,
  Fin_stage: Number,
  Domaine_stage: string,
  certificat_stage: File,

  organisation_prof:string,
  lieu_prof: string,
  certificat_prof: string,

  Loisir: string,
  description: string,
}

export const Mon_formulaire=()=>{

  const [loisir, setLoisir] = useState<string[]>([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInput>();

  const isUppercase = (value: string) => {
    // Vérifier que le nom commence par une majuscule et ne contient que des lettres
    return /^[A-Z][a-zA-Z]*$/.test(value);
  };
  
  const isFirstUppercase = (value: string) => {
      return value[0] === value[0].toUpperCase();
  }
  const isDigit = (value: number) => {
      return value >= 18 && value <= 60;
  }
  const isEmail = (value: string) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(value);
  }
  const validateAdresse = (value: string) => {
    return (value.length <= 100 && /^[a-zA-Z\s,.'()-]+$/.test(value) ) || 'Adresse invalide';
  };
  function isDescriptionValide(description: string) {
    // Vérifier que la description est un paragraphe et ne contient ni chiffres ni symboles
    return /^[A-Za-z\s.,;!?'"()]+$/.test(description);
  }

  const isValidSelect = (value: string) => {
      return value !== '...';
  }


  const onSubmit: SubmitHandler<FormInput> = (data) => {
      console.log(data);
      // Reset the form after submission
      reset();
  }

  return(
    <main className="ml-5">
    <nav >
        <h2 id="titreCV" className="border-2 text-center bg-[#ddb6f7] ">Formulaire de mon CV<i className="fa-solid fa-user-tie"></i>  </h2>
    </nav>
    <br></br>
    <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-3xl border-2 p-3 rounded-lg shadow-xl shadow-black bg-white">
            <legend id="titreSection" className="Slabo text-lg" ><h2><u><i className="fa-solid fa-pen-to-square"></i>Information personnels</u></h2></legend> <br></br>
            <div>
                <div >
                    <label htmlFor="Name">Nom:</label>
                    <input {...register("nom", { required: '*Champs obligatoire',validate: (value) => isUppercase(value) || '*Nom doit être en majuscule et ne contient aucun chiffre ni caractère spécial.' })} className="border ml-2 rounded-md" type="text" id="Name" placeholder="Ex: Potter" /> 
                </div>
                <div className="ml-5  text-pink-800">
                  {errors.nom && <p>{errors.nom.message}</p>}
                </div>
                <br></br>
                <div>
                    <label htmlFor="Prénom">Prénom:</label>
                    <input {...register("prenom", { required: '*Champs obligatoire', validate: (value) => isFirstUppercase(value) || '*Debut doit être majuscule et ne contient aucun chiffre ni caractère spécial.' })} className="border ml-2 rounded-md" type="text" id="Prénom" placeholder="Ex: Zaya"  /> 
                    
                </div>
                <div className="ml-5 text-pink-800">
                  {errors.prenom && <p>{errors.prenom.message}</p>}
                </div>
                <br></br>
            </div>

            <label htmlFor="file"> photo:</label>
            <input {...register("file", { required: '*Champs obligatoire',/* validate: (value) => isValidFileExtension(value) || 'Entrez un type valide (png/jpg/jpeg/gif)' */ })} type="file"id="file" name="file" accept="image/png, image/jpeg" /> <br></br><br></br>
            <div className="ml-5 text-pink-800">
                {errors.file && <p>{errors.file.message}</p>}
            </div>
            <br></br>
            <label htmlFor="CIN" >CIN:</label>
            <input {...register("CIN", { required: '*Champs obligatoire'})} className="border ml-2 rounded-md" type="text" id="CIN" required /> <br></br><br></br>
            <div className="ml-5 text-pink-800">
                {errors.CIN && <p>{errors.CIN.message}</p>}
            </div>
            <br></br>
            <label htmlFor="Adresse">Adresse :</label>
            <input {...register("adresse", { required: '*Champs obligatoire',validate: (value) => validateAdresse(value) || 'Remplissez l\'adresse et il ne doit pas dépasser 100 caractères.' })} className="border ml-2 rounded-md" type="text" id="Adresse" required />
            <div className="ml-5 text-pink-800">
                {errors.adresse && <p>{errors.adresse.message}</p>}
            </div>
            <br></br>

            <div >
              <div >
                <label htmlFor="phone">Telephone:</label>
                <input {...register("tel", { required: '*Champs obligatoire' })} className="border ml-2 rounded-md" type="tel" id="phone" placeholder="0645-326589" /> <br></br><br></br>
              </div>
              <div className="ml-5 text-pink-800">
                {errors.tel && <p>{errors.tel.message}</p>}
            </div>
              <div >
                <label htmlFor="email">E-mail:</label>
                <input {...register("email", { required: '*Champs obligatoire', validate: (value) => isEmail(value) || '*L\'adresse e-mail invalide. Veuillez utiliser une adresse email valide avec le domaine .com ou .fr.' })} className="border ml-2 rounded-md" type="email" id="email" placeholder="hhhhoos6@gmail.com"  required  />
                
              </div>
              <div className="ml-5 text-pink-800">
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <br></br>
            </div>

            <label htmlFor="age">Âge :</label>
            <input  {...register("age", { required: '*Champs obligatoire', validate: (value) =>isDigit(value) || 'L\'âge doit être de 18 ans ou plus.'})}className="border ml-2 rounded-md" type="number" id="age"  required /> 
            
            <div className="ml-5 text-pink-800">
                {errors.age && <p>{errors.age.message}</p>}
            </div>
            <br></br>

            <label htmlFor="naissance">date de naissance :</label>
            <input {...register("naissance")} className="border ml-2 rounded-md" type="date" id="naissance" required /> <br></br><br></br>
            <div>
              <label htmlFor="situation familiale">situation familiale: </label>

              <label htmlFor="célibataire">célibataire </label>
              <input type="radio" id="célibataire" value="célibataire"{...register("situation", { required: 'Sélectionnez votre situation familiale' })} /> 

              <label htmlFor="Marié(e)">Marié(e) </label>
              <input type="radio" id="Marié(e)" value="Marié(e)" {...register("situation", { required: 'Sélectionnez votre situation familiale' })}/> <br></br><br></br>
            </div>
            <div className="ml-5 text-pink-800">
              {errors.situation && <p>{errors.situation.message}</p>}
            </div>

        </div> <br></br>
        <br></br><br></br>
        <div className="max-w-3xl border-2 p-3 rounded-lg shadow-xl shadow-black bg-white">
            <legend id="titreSection"className="Slabo text-lg" ><h2><u><i className="fa-solid fa-business-time"></i> Experience antérieur</u></h2></legend><br></br>

              <label>Remplir ce qui suit:</label><br></br><br></br>
              <ul></ul>
                <li><label>stage:</label></li> <br></br>
                  <div className="ml-5">
                      <li><label htmlFor="organisation">le nom de l'organisation: </label>
                        <input {...register("organisation_stage")} className="border ml-2 rounded-md" type="text" id="nom_org" placeholder="nom de l'organisation"  /> </li><br></br>

                        <li><label htmlFor="debut" >début de stage:</label>
                        <input {...register("debut_stage")} className="border ml-2 rounded-md" type="date" id="debut" /></li><br></br>

                        <li><label htmlFor="fin">fin de stage:</label>
                        <input {...register("Fin_stage")} className="border ml-2 rounded-md" type="date"  id="fin" /></li><br></br>

                        <li><label htmlFor="domaine">domaine de stage:</label></li>
                        <select {...register("Domaine_stage")}onChange={(e) => {console.log(e.target.value); }} id="domaine" className="border ml-2 rounded-md">
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
                        <input {...register("certificat_stage")} type="file" id="piece jointe" name="stage" accept="application/pdf"/></li>
                  </div>

                  <br></br>
                  <li><label>Profession</label></li> <br></br>
                  <div className="ml-5">
                    <li><label htmlFor="nom_org">le nom d'organisation:</label>
                    <input {...register("organisation_prof")} className="border ml-2 rounded-md" type="text" id="nom_org" placeholder="nom de l'organisation"  /> </li><br></br>

                    <li><label htmlFor="lieu">lieu de travail:</label>
                    <input {...register("lieu_prof")} className="border ml-2 rounded-md" type="text" id="lieu"/></li> <br></br>

                    <li><label htmlFor="piece jointe" >cetificat:</label>
                    <input {...register("certificat_prof")} type="file" id="piece jointe"  accept="application/pdf" required/></li>

                  </div>
        </div>
        <br></br>
        <div className="max-w-3xl border-2 p-3 rounded-lg shadow-xl shadow-black bg-white">
          <legend className="Slabo text-lg" ><h2><u><i className="fa-solid fa-question"></i> Autres</u></h2></legend><br></br>
          <div className="ml-5">
            <li><label >Loisir: </label></li><br></br>

              <label htmlFor="lecture">lecture</label>
              <input type="checkbox" id="lecture" value="lecture" {...register('Loisir')}onChange={(e) => {if (e.target.checked) { setLoisir([...loisir, e.target.value]);} else { setLoisir(loisir.filter((value) => value !== e.target.value));}}} />

              <label htmlFor="sport">Sport</label>
              <input type="checkbox"  id="sport" value="Sport" {...register('Loisir')}onChange={(e) => {if (e.target.checked) { setLoisir([...loisir, e.target.value]);} else { setLoisir(loisir.filter((value) => value !== e.target.value));}}}/>

              <label htmlFor="Art">Art</label>
              <input type="checkbox"  id="Art" value="Art" {...register('Loisir')}onChange={(e) => {if (e.target.checked) { setLoisir([...loisir, e.target.value]);} else { setLoisir(loisir.filter((value) => value !== e.target.value));}}}/>

              <label htmlFor="Pas">Passions</label>
              <input type="checkbox" id="Pas" value="Passions" {...register('Loisir')}onChange={(e) => {if (e.target.checked) { setLoisir([...loisir, e.target.value]);} else { setLoisir(loisir.filter((value) => value !== e.target.value));}}}/><br></br><br></br>
              <div className="flex items-center">
                <div>
                 
                    <div className="flex items-center">
                      <div>
                        <li><label htmlFor="description" >description :</label><br></br><br></br>
                        <textarea {...register("description", { required: '*Champs obligatoire',validate: (value) => isDescriptionValide(value) || 'La description doit être un paragraphe et ne doit pas contenir de chiffres ou de caractères spéciaux.'})} defaultValue="" className="border ml-2 rounded-md resize-none" id="description" rows={7} cols={70} ></textarea></li>
                      </div>
                      <div className="ml-5 text-pink-800">
                        {errors.description && <p>{errors.description.message}</p>}
                      </div>
                    </div>
                  
                </div>
              </div>
               <br></br><br></br>
          </div>
        </div>
        <br></br>
        <div className="text-center w-full ">
          <button type="submit" className="rounded-full w-40 h-18 px-4 mt-3 mb-3 bg-gradient-to-r from-cyan-300 to-blue-300  hover:bg-violet-400 focus:outline-none focus:ring focus:ring-cyan-700">ENVOYER</button>
        </div>
    </form>
  </main>
  )
}