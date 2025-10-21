import React from 'react';
import ReactConfetti from 'react-confetti';

interface GiftBoxProps {
  isOpened?: boolean;
  onOpen?: () => void;
  rewardText?: string;
}

const GiftBox: React.FC<GiftBoxProps> = ({ 
  isOpened = false, 
  onOpen, 
  rewardText = "20% Bonus" 
}) => {
  const boxRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(isOpened);
  const [showConfetti, setShowConfetti] = React.useState(false);

  React.useEffect(() => {
    setOpen(isOpened);
  }, [isOpened]);

  const handleClick = () => {
    if (!open) {
      setOpen(true);
      setShowConfetti(true);
      onOpen?.();

      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    } else {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    const box = boxRef.current;
    if (box) {
      box.addEventListener('click', handleClick);
    }

    return () => {
      if (box) {
        box.removeEventListener('click', handleClick);
      }
    };
  }, [open]);

    const [dimensions, setDimensions] = React.useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  }));

  React.useEffect(() => {
    const handleResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const { width, height } = dimensions;

  return (
    <div className="board">
      {showConfetti && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={1000}
          gravity={0.4}
          initialVelocityY={15}
          colors={['#F0B90B', '#2AAAE6', '#FFFFFF', '#F8D33A', '#C27028', '#EAECEF']}
          tweenDuration={8000}
        />
      )}
      <div className={`box ${open ? 'open' : ''}`} id="box" ref={boxRef}>
        <div className="lid">
          <span className="ribbon"></span>
        </div>
        <div className="body"></div>
        <div className="contents">
          {rewardText}
        </div>
      </div>

      {!open && (
        <div className="instruction-text">
          Click the gift box to reveal your reward!
        </div>
      )}
    </div>
  );
};

export default GiftBox;