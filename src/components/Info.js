const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null;
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        InformacionArtista
      </div>
      <div className="card-body">
        <img src={info.strArtistThumb} alt="Logo artista" />
      </div>
    </div>
  );
};

export default Info;
