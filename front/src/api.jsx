export const getRandomWord = async () => {
  try {
const response = await fetch('http://localhost:3333/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', 
  },
  body: JSON.stringify({ locale: 'fr-FR' }),
});

    if (!response.ok) throw new Error('Erreur API');
    
    const data = await response.json();
    return data.word;
  } catch (error) {
    console.error("Erreur lors de la récupération du mot:", error);
    return null;
  }
};