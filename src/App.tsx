import { createContext, useState } from 'react';
import Aaa from './Aaa'

type Person = {
  name: string;
} | null;

type PersonContextType = {
  person: Person;
  setPerson: React.Dispatch<React.SetStateAction<Person>>;
}
export const personContext = createContext<PersonContextType | null>(null)


function App() {
  const [person, setPerson] = useState<Person>(null)
  const PersonContextProvider = personContext.Provider
  return (
    <div className="App">
      <PersonContextProvider value={{person, setPerson}}>
        <Aaa />
      </PersonContextProvider>
    </div>
  );
}

export default App;
