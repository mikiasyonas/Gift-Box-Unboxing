import React from 'react';

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

  React.useEffect(() => {
    setOpen(isOpened);
  }, [isOpened]);

  const handleClick = () => {
    if (!open) {
      setOpen(true);
      onOpen?.();
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

  return (
    <div className="board">
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