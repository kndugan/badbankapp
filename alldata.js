function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <div className="container">
    <h1>All Data<br/>
      {JSON.stringify(ctx)}
    </h1>
    </div>
  );
}
