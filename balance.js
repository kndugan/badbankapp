function Balance(){
  const [show, setShow]        = React.useState(true); 
  const [status, setStatus]    = React.useState(''); 
  const [balance, setBalance]  = React.useState('$100'); 

  const balanceMessage = "Balance: " + balance;
  const ctx = React.useContext(UserContext);
  return (
    <div className="container">
        <Card 
        bgcolor="light"
        txtcolor="black"
        header="Balance"
        body={balanceMessage}
        />
    </div>
  )
}
