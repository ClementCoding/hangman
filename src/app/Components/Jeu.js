'use client';
import React, { useState, useEffect } from 'react';
import Keyboard from './Keyboard';
import Popup from './Popup';
import './styles.css';

const Etape1 = (
  <svg viewBox="0 0 200 200" width="200" height="300">
    <circle cx="100" cy="60" r="20" fill="brown" />
  </svg>
);

const Etape2 = (
  <svg viewBox="0 0 200 200" width="200" height="300">
    <circle cx="100" cy="60" r="20" fill="brown" />
    <line x1="100" y1="80" x2="100" y2="140" stroke="brown" />
  </svg>
);

const Etape3 = (
  <svg viewBox="0 0 200 200" width="200" height="300">
    <circle cx="100" cy="60" r="20" fill="brown" />
    <line x1="100" y1="80" x2="100" y2="140" stroke="brown" />
    <line x1="100" y1="100" x2="80" y2="120" stroke="brown" />
  </svg>
);

const Etape4 = (
  <svg viewBox="0 0 200 200" width="200" height="300">
    <circle cx="100" cy="60" r="20" fill="brown" />
    <line x1="100" y1="80" x2="100" y2="140" stroke="brown" />
    <line x1="100" y1="100" x2="80" y2="120" stroke="brown" />
    <line x1="100" y1="100" x2="120" y2="120" stroke="brown" />
  </svg>
);

const Etape5 = (
  <svg viewBox="0 0 200 200" width="200" height="300">
    <circle cx="100" cy="60" r="20" fill="brown" />
    <line x1="100" y1="80" x2="100" y2="140" stroke="brown" />
    <line x1="100" y1="100" x2="80" y2="120" stroke="brown" />
    <line x1="100" y1="100" x2="120" y2="120" stroke="brown" />
    <line x1="100" y1="140" x2="80" y2="160" stroke="brown" />
  </svg>
);

const Etape6 = (
  <svg viewBox="0 0 200 200" width="200" height="300">
    <circle cx="100" cy="60" r="20" fill="brown" />
    <line x1="100" y1="80" x2="100" y2="140" stroke="brown" />
    <line x1="100" y1="100" x2="80" y2="120" stroke="brown" />
    <line x1="100" y1="100" x2="120" y2="120" stroke="brown" />
    <line x1="100" y1="140" x2="80" y2="160" stroke="brown" />
    <line x1="100" y1="140" x2="120" y2="160" stroke="brown" />
  </svg>
);

const Etape7 = (
  <svg viewBox="0 0 200 200" width="200" height="300">
    <circle cx="100" cy="60" r="20" fill="brown" />
    <line x1="100" y1="0" x2="100" y2="140" stroke="brown" />
    <line x1="100" y1="100" x2="80" y2="120" stroke="brown" />
    <line x1="100" y1="100" x2="120" y2="120" stroke="brown" />
    <line x1="100" y1="140" x2="80" y2="160" stroke="brown" />
    <line x1="100" y1="140" x2="120" y2="160" stroke="brown" />
  </svg>
);

const Etape8 = (
  <svg viewBox="0 0 200 200" width="200" height="300">
    <circle cx="100" cy="60" r="20" fill="brown" />
    <line x1="100" y1="0" x2="100" y2="140" stroke="brown" />
    <line x1="100" y1="100" x2="80" y2="120" stroke="brown" />
    <line x1="100" y1="100" x2="120" y2="120" stroke="brown" />
    <line x1="100" y1="140" x2="80" y2="160" stroke="brown" />
    <line x1="100" y1="140" x2="120" y2="160" stroke="brown" />
    <line x1="80" y1="0" x2="20000" y2="140" stroke="brown" />
  </svg>
);

const Etape9 = (
  <svg viewBox="0 0 200 200" width="200" height="300">
    <circle cx="100" cy="60" r="20" fill="brown" />
    <line x1="100" y1="0" x2="100" y2="140" stroke="brown" />
    <line x1="100" y1="100" x2="80" y2="120" stroke="brown" />
    <line x1="100" y1="100" x2="120" y2="120" stroke="brown" />
    <line x1="100" y1="140" x2="80" y2="160" stroke="brown" />
    <line x1="100" y1="140" x2="120" y2="160" stroke="brown" />
    <line x1="180" y1="0" x2="180" y2="160" stroke="brown" />
    <line x1="80" y1="0" x2="20000" y2="140" stroke="brown" />
  </svg>
);

const Etape10 = (
  <svg viewBox="0 0 200 200" width="200" height="300">
    <circle cx="100" cy="60" r="20" fill="brown" />
    <line x1="100" y1="0" x2="100" y2="140" stroke="brown" />
    <line x1="100" y1="100" x2="80" y2="120" stroke="brown" />
    <line x1="100" y1="100" x2="120" y2="120" stroke="brown" />
    <line x1="100" y1="140" x2="80" y2="160" stroke="brown" />
    <line x1="100" y1="140" x2="120" y2="160" stroke="brown" />
    <line x1="180" y1="0" x2="180" y2="160" stroke="brown" />
    <line x1="80" y1="0" x2="20000" y2="140" stroke="brown" />
    <line x1="160" y1="160" x2="20000" y2="140" stroke="brown" />
  </svg>
);


const translations = {
  'fr-FR': {
    title: 'Jeu du Pendu',
    loading: 'Chargement...',
    error: 'Erreur :',
    word: 'Mot :',
    wrongLetters: 'Mauvaises lettres :',
    victory: 'Bravo ! Vous avez gagné !',
    defeat: 'Vous avez perdu !',
    selectLanguage: 'Choisissez une langue :',
    loading: 'Chargement...',
    loading: 'Chargement...',
  },
  'en-GB': {
    title: 'Hangman Game',
    loading: 'Loading...',
    error: 'Error:',
    word: 'Word:',
    wrongLetters: 'Wrong letters:',
    victory: 'Congratulations! You won!',
    defeat: 'You lost!',
    selectLanguage: 'Select a language:',
  },
};

function Jeu() {
  const [motAleatoire, setMotAleatoire] = useState('');
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [langueSelectionnee, setLangueSelectionnee] = useState('fr-FR');
  const [lettresSelectionnees, setLettresSelectionnees] = useState([]);
  const [lettresIncorrectes, setLettresIncorrectes] = useState([]);
  const [motAffiche, setMotAffiche] = useState('');
  const [victoire, setVictoire] = useState(false);
  const [erreurs, setErreurs] = useState(0);
  const [perdu, setPerdu] = useState(false);

  useEffect(() => {
    resetJeu();
  }, [langueSelectionnee]);

  useEffect(() => {
    fetchMotAleatoire(langueSelectionnee);
  }, [langueSelectionnee]);

  const resetJeu = () => {
    setMotAleatoire('');
    setChargement(true);
    setErreur(null);
    setLettresSelectionnees([]);
    setLettresIncorrectes([]);
    setMotAffiche('');
    setVictoire(false);
    setErreurs(0);
    setPerdu(false);
  };

  const fetchMotAleatoire = async (langue) => {
    setChargement(true);
    setErreur(null);

    try {
      console.log('Récupération du mot aléatoire...');
      const response = await fetch('https://node-hangman-api-production.up.railway.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          locale: langue
        })
      });

      if (!response.ok) {
        throw new Error('Échec de la récupération du mot aléatoire');
      }

      const data = await response.json();
      console.log('Mot aléatoire reçu :', data.word);
      setMotAleatoire(data.word);
      setMotAffiche(generateGuessedWord(data.word));
    } catch (error) {
      console.error('Erreur lors de la récupération du mot aléatoire :', error.message);
      setErreur(error.message);
    } finally {
      setChargement(false);
    }
  };

  const generateGuessedWord = (word) => {
    return word.split('').map(() => '_').join(' ');
  };

  const handleChangementLangue = (event) => {
    setLangueSelectionnee(event.target.value);
    resetJeu();
  };

  const handleSelectLetter = (letter) => {
    if (lettresSelectionnees.includes(letter)) {
      return;
    }

    setLettresSelectionnees([...lettresSelectionnees, letter]);

    if (motAleatoire.includes(letter)) {
      const newMotAffiche = motAleatoire.split('').map((char, index) => {
        if (char === letter) {
          return letter.toUpperCase();
        } else {
          return motAffiche[index * 2];
        }
      }).join(' ');

      setMotAffiche(newMotAffiche);
      if (!newMotAffiche.includes('_')) {
        setVictoire(true);
      }
    } else {
      setLettresIncorrectes([...lettresIncorrectes, letter]);
      setErreurs(erreurs + 1);
      if (erreurs >= 10) {
        setPerdu(true);
      }
    }
  };


  const getPenduParts = () => {
    switch (erreurs) {
      case 1:
        return Etape1;
      case 2:
        return Etape2;
      case 3:
        return Etape3;
      case 4:
        return Etape4;
      case 5:
        return Etape5;
      case 6:
        return Etape6;
      case 7:
        return Etape7;
      case 8:
        return Etape8;
      case 9:
        return Etape9;
       case 10:
        return Etape10;
    }
  };

  return (
    <div className="jeu-container">
      <h1>{translations[langueSelectionnee].title}</h1>
      <select value={langueSelectionnee} onChange={handleChangementLangue}>
        <option value="en-GB">English</option>
        <option value="fr-FR">Français</option>
      </select>
      {chargement ? (
        <p>{translations[langueSelectionnee].loading}</p>
      ) : erreur ? (
        <p>{translations[langueSelectionnee].error} {erreur}</p>
      ) : (
        <div>
          <p className="mot-affiche">{translations[langueSelectionnee].word} {motAffiche}</p>
          <p className="lettres-incorrectes">{translations[langueSelectionnee].wrongLetters} {lettresIncorrectes.join(', ')}</p>
          <Keyboard onSelectLetter={handleSelectLetter} motAleatoire={motAleatoire} />
          {erreurs > 0 && getPenduParts()}
          {victoire && <Popup onNewGame={() => window.location.reload()}  message={translations[langueSelectionnee].victory} />}
          {perdu && <Popup onNewGame={() => window.location.reload()} message="Vous avez perdu !" motPerdu={motAleatoire} />}
        </div>
      )}
    </div>
  );
}

export default Jeu;
