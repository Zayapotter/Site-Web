import React, { useState, useEffect } from 'react';

function Footer() {
    const [lastUpdated, setLastUpdated] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLastUpdated(new Date());
        }, 60000); // Actualise la date de mise à jour toutes les minutes
        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer >
            <br></br>
            <p>Édité par: ZAYA</p>
            <p>Dernière mise à jour: {lastUpdated.toLocaleDateString()} {lastUpdated.toLocaleTimeString()}</p>
            <p>© 2023 ZAYA. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;