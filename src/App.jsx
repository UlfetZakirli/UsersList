import AddUser from './components/AddUser';
import Table from './components/Table';
import UserProvider from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Table />
      <AddUser /> 
    </UserProvider>
  )
}

export default App