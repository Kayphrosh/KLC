// components/MapButton.js

const MapButton = () => {
  const handleOpenMap = () => {
    const destination = '7.513572900339352, 4.524456085537545';  // Replace with your destination coordinates
    const url = `https://www.google.com/maps/search/?api=1&query=${destination}`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleOpenMap} id='locate'>
        <p>Locate Church</p>
    </button>
  );
};

export default MapButton;
