// When user chooses a song it is added to the setlist
import SongList from "./SongList";

const SetSong = () => {
  const [song, setSong] = useState("Choose a song");

  const getSong = (value) => {
    setSong(`${value}`);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>{song}</p>
          </Col>
          <Col>
            <SongList callback={getSong} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SetSong;
