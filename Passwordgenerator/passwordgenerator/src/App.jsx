import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordInput = useRef(null);

  const passwordGenerator = useCallback(() => {
    let generatedPassword = "";
    let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) possibleCharacters += "0123456789";
    if (character) possibleCharacters += "!@#$%^&*(){}'`";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * possibleCharacters.length);
      generatedPassword += possibleCharacters.charAt(char);
    }
    setPassword(generatedPassword);
  }, [length, includeNumbers, character, setPassword ]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordInput.current.select();
    window.navigator.clipboard.writeText(password)
  },
[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, includeNumbers, character, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center">
        <h1 className="text-white text-center font-bold">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            type="text"
            ref={passwordInput}
          />
          <button
           onClick={copyPasswordToClipboard}
           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-yellow-200 hover:text-black">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={includeNumbers}
              id="numberInput"
              onChange={() => setIncludeNumbers((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={character}
              id="characterInput"
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
