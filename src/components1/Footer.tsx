import React, { useState, useEffect } from 'react';

function Footer() {
    const [lastUpdated, setLastUpdated] = useState(new Date());

    // Utilisez useEffect pour mettre en place l'intervalle de rafraîchissement
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLastUpdated(new Date());
        }, 60000); // Actualise la date de mise à jour toutes les minutes

        // Nettoyez l'intervalle lors du démontage du composant
        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer>
            <p>Édité par: ZAYA</p>
            <p>Dernière mise à jour: {lastUpdated.toLocaleDateString()} {lastUpdated.toLocaleTimeString()}</p>
            <p>©️ 2023 ZAYA. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;
