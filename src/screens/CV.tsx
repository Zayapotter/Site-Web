import React from 'react';

import { Header } from '../components1/Header';
import { Objectifsprofessionnels } from '../components1/Objectifsprofessionnels';
import { FormationetDiplômes } from '../components1/FormationetDiplômes';
import { Competencestechni } from '../components1/Competencestechni';
import { CompétencesLinguistiques } from '../components1/CompétencesLinguistiques';
import { Autres } from '../components1/Autres';
import Footer from '../components1/Footer';
export const CV=()=> {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-yellow-300 ">
                    <Header />
                    <br></br>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-8 ml-6 mt-7 ">
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
        </div>
    );
}

