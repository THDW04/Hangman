export function Word({ word, guessedLetters }) {

  return (
    <div className="word">
      {word.split("").map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter)
            ? letter
            : "_"}
        </span>
      ))}
    </div>
  )

}