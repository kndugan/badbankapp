function AllData(){
    const ctx = React.useContext(UserContext);
  return (
    <div className="container">
        <Card 
        bgcolor="light"
        txtcolor="black"
        header="All Data"
        body={JSON.stringify(ctx)}
        />
    </div>
  )
}

