
import './App.css';
import { Button } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';

function App() {
  return (
    <div className="App"> 
    <Grid.Container gap={2}>
      <Grid>
        <Button color="primary" auto ghost>
          Primary
        </Button>
      </Grid>
      <Grid>
        <Button color="secondary" auto ghost>
          Secondary
        </Button>
      </Grid>
      <Grid>
        <Button color="success" auto ghost>
          Success
        </Button>
      </Grid>
      <Grid>
        <Button color="warning" auto ghost>
          Warning
        </Button>
      </Grid>
      <Grid>
        <Button color="error" auto ghost>
          Error
        </Button>
      </Grid>
      <Grid>
        <Button color="gradient" auto ghost>
          Gradient
        </Button>
      </Grid>
    </Grid.Container>
    </div>
  );
}

export default App;
