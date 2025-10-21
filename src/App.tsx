import { useEffect, useState } from 'react'

import './App.css'
import GiftBox from './components/GiftBox'

function App() {
   const [isOpened, setIsOpened] = useState(false);
  const onOpen = (): void => {
    setIsOpened(true);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setIsOpened(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);
  return (
     <main className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Unlock Your Reward</h1>
          <p className="text-lg text-muted-foreground">Click the gift box to reveal your exclusive bonus</p>
        </div>
        <GiftBox isOpened={isOpened} onOpen={onOpen}  />
      </div>
    </main>
  )
}

export default App
