import './barbershoppole.css';

/**
 * React component to draw a Barbershop Pole
 * @param {any} props Static barbershop pole size (SMALL or MEDIUM)
 * @returns React component
 */
export default function BarbershopPole(props) {
  const isSmall = props.size === 'SMALL' ? true : false;

  const barberContainer = {
    width: '85px',
    height: '300px',
    margin: '2em',
    padding: '0.5em',
  };
  const ball = {
    width: '25px',
    height: '25px',
  };
  const capSmall = {
    width: '54px',
    height: '15px',
    marginTop: '2px',
    marginBottom: '2px',
  };
  const capLarge = {
    width: '85px',
    height: '15px',
    marginTop: '2px',
    marginBottom: '2px',
  };
  const barberWrap = {
    width: '54px',
    height: '172px',
  };
  const barber = {
    width: '54px',
    height: '172px',
    backgroundSize: '27px 27px',
    marginTop: '2px',
    marginBottom: '2px',
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






