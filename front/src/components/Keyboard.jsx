const letters = "abcdefghijklmnopqrstuvwxyz".split("")

export const Keyboard = ({ word, guessedLetters, handleGuess, disabled }) => {

    return (
        <div className="keyboard">

            {letters.map(letter => {
                const isGuessed = guessedLetters.includes(letter)
                const isCorrect = word.includes(letter)

                return (
                    <button
                        key={letter}
                        onClick={() => handleGuess(letter)}
                        disabled={isGuessed || disabled}
                        className={
                            isGuessed
                                ? isCorrect
                                    ? "correct"
                                    : "wrong"
                                : ""
                        }
                    >
                        {letter}
                    </button>
                )
            })}

        </div>
    )
}