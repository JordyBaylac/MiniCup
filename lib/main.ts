import app from "./config/App";

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});
