import MapTest from "./MapTest";


type Props = {
  countries: any;
};

const MapServer = ({ countries }: Props) => {
  return (
    <div>
      <MapTest dataReady={countries} />
    </div>
  ); //
};

export default MapServer;
