function Home(){ 
  return (
    <div className="container">
      <Card 
        bgcolor="light"
        txtcolor="black"
        header="BadBank Landing Page"
        title="Welcome to the Bank"
        text="You can use this bank"
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />  
    </div>
  );  
}
