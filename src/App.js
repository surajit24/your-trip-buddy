import data from "./mocks/api/tours-mock-api.json";
import { TourCard } from "./components/TourCard";
import { MainLayout } from "./layout/MainLayout";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container>
        <MainLayout>
          {data.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </MainLayout>
      </Container>
    </div>
  );
}

export default App;
