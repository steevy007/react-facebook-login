import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './redux/type/type';
import { logout } from './redux/type/type';
function App() {
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.isLogin)
  const [user, setUser] = React.useState(null)
  return (
    <>
      <div className='wrapper'>
        <div className="content">
          <div>
            {
              !isLogin && <FacebookLogin
                appId="357090782879156"
                autoLoad={true}
                fields="name,email,picture"
                onClick={(result) => { console.log(result) }}
                callback={(result) => {
                  console.log(dispatch(login(result)))
                  setUser(result)
                }} />
            }
          </div>
          {
            isLogin &&
            <div className="object">
              <div>
                <img src={user ? user.picture.data.url : ''} alt="profile" />
              </div>
              <div>
                <h2>{user ? user.name : ''}</h2>
                <h3 style={{ marginBottom: '0.5rem' }}>{user ? user.email : ''}</h3>
                <button onClick={() => { dispatch(logout()) }}>Logout</button>
              </div>
            </div>
          }
        </div>
      </div>
      
    </>
  );
}

export default App;
