import React from 'react';

import { Informationspersonnels } from '../components/Informationspersonnels';
import { Header } from '../components/Header';
import { Objectifsprofessionnels } from '../components/Objectifsprofessionnels';
import { FormationetDiplômes } from '../components/FormationetDiplômes';
import { Competencestechni } from '../components/Competencestechni';
import { CompétencesLinguistiques } from '../components/CompétencesLinguistiques';
import { Autres } from '../components/Autres';
import Footer from '../components/Footer';
export const CV=()=> {
    return (
        <div className="flex items-center justify-center mt-5">
            <Header />
            <br></br>
            <div className=" bg-white w-7/12 h-auto p-10">
            <Informationspersonnels />
            <br></br>
            <Objectifsprofessionnels />
            <br></br>
            <FormationetDiplômes />
            <br></br>
            <Competencestechni />
            <br></br>
            <CompétencesLinguistiques />
            <br></br>
            <Autres />
            <br></br>
            <Footer />
            </div>


        </div>
    );
}

