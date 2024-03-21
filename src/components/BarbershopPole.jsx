import './barbershoppole.css';

/**
 * React component to draw a Barbershop Pole
 * @param {any} props Static barbershop pole size (SMALL or MEDIUM)
 * @returns React component
 */
export default function BarbershopPole({ isSmall = false }) {

  const barberContainer = {
    width: `${isSmall ? 55 : 85}px`,
    height: `${isSmall ? 270 : 300}px`,
    // margin: '1em',
    // padding: '0.5em',
  };
  const ball = {
    width: `${isSmall ? 15 : 25}px`,
    height: `${isSmall ? 15 : 25}px`,
  };
  const capSmall = {
    width: `${isSmall ? 35 : 55}px`,
    height: '15px',
    marginTop: '1px',
    marginBottom: '1px',
  };
  const capLarge = {
    width: `${isSmall ? 55 : 85}px`,
    height: '15px',
    marginTop: '1px',
    marginBottom: '1px',
  };
  const barberWrap = {
    // width: '54px',
    width: '100%',
    // height: '172px',
    height: '100%',
  };
  const barber = {
    // width: '54px',
    width: '70%',
    // height: '172px',
    height: '60%',
    // backgroundSize: '27px 27px',
    backgroundSize: isSmall ? '20px 20px' : '31px 31px',
    marginTop: '1px',
    marginBottom: '1px',
  };

  return (
    <div className="barberContainer" style={barberContainer}>
      <div className="ball" style={ball} />
      <div className="cap" style={capSmall} />
      <div className="cap" style={capLarge} />
      <div className="barber" style={barber} >
        <div className="barberWrap" style={barberWrap} />
      </div>
      <div className="cap" style={capLarge} />
      <div className="cap" style={capSmall} />
      <div className="ball" style={ball} />
    </div>
  );
}






